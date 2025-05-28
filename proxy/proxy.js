import { Proxy } from "http-mitm-proxy"; 
import net from "net";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const proxy = new Proxy();

const CA_DIR = path.join(__dirname, "cert");

proxy.onError((ctx, err, errorKind) => {
  const url = ctx?.clientToProxyRequest?.url || '';
  console.error(`${errorKind} on ${url}:`, err);
});

const blacklist = ["pornhub.com", "xvideos.com", "xnxx.com","opera.com"];

function isBlacklisted(host) {
  if (!host) return false;
  return blacklist.some(domain => host.includes(domain));
}

proxy.onRequest((ctx, callback) => {
  const host = ctx.clientToProxyRequest.headers.host;
  console.log("➡️ Target host:", host);

  if (isBlacklisted(host)) {
    ctx.proxyToClientResponse.writeHead(403, { 'Content-Type': 'text/plain' });
    ctx.proxyToClientResponse.end("Blocked by PornBlocker.");
    return;
  }

  return callback();
});

proxy.onConnect((req, socket, head) => {
  if (!req.url) {
    console.log("No url in request");
    return;
  }
  const host = req.url.split(":")[0];

  if (isBlacklisted(host)) {
    socket.write("HTTP/1.1 403 Forbidden\r\n\r\nBlocked by PornBlocker.");
    socket.destroy();
    console.log("❌ HTTPS bloqué :", host);
    return;
  }

  const port = parseInt(req.url.split(":")[1]);

  console.log("Tunnel to", req.url);
  const conn = net.connect(
    {
      port,
      host,
      allowHalfOpen: true,
    },
    () => {
      conn.on("finish", () => {
        socket.destroy();
      });
      socket.on("close", () => {
        conn.end();
      });
      socket.write("HTTP/1.1 200 OK\r\n\r\n", "utf-8", () => {
        conn.pipe(socket);
        socket.pipe(conn);
      });
    }
  );

  conn.on("error", (err) => {
    filterSocketConnReset(err, "PROXY_TO_SERVER_SOCKET");
  });
  socket.on("error", (err) => {
    filterSocketConnReset(err, "CLIENT_TO_PROXY_SOCKET");
  });
});

function filterSocketConnReset(err, socketDescription) {
  if (err.errno === "ECONNRESET") {
    console.log(`Got ECONNRESET on ${socketDescription}, ignoring.`);
  } else {
    console.log(`Got unexpected error on ${socketDescription}`, err);
  }
}


proxy.listen({
  port: 8000,
  sslCaDir: CA_DIR,
  forceSNI: true
})


