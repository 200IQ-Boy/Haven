const forge = require("node-forge");
const fs = require("fs-extra");
const path = require("path");

const CERT_DIR = path.join(__dirname, "cert");

async function generateCA() {
  await fs.ensureDir(CERT_DIR);

  const keys = forge.pki.rsa.generateKeyPair(2048);
  const cert = forge.pki.createCertificate();

  cert.publicKey = keys.publicKey;
  cert.serialNumber = "01";
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 5);

  const attrs = [{ name: "commonName", value: "PornBlocker Proxy CA" }];
  cert.setSubject(attrs);
  cert.setIssuer(attrs);
  cert.setExtensions([{ name: "basicConstraints", cA: true }]);

  cert.sign(keys.privateKey);

  const pemCert = forge.pki.certificateToPem(cert);
  const pemKey = forge.pki.privateKeyToPem(keys.privateKey);

  await fs.writeFile(path.join(CERT_DIR, "ca.pem"), pemCert);
  await fs.writeFile(path.join(CERT_DIR, "ca.key.pem"), pemKey);

  console.log("✔ Certificat CA généré !");
}

generateCA();
