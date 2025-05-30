// set-system-proxy.js
import os from "os";
import sudo from "@vscode/sudo-prompt";

const options = {
  name: "Haven Proxy",
};

export function enableSystemProxy() {
  const platform = os.platform();

  let command = "";

  if (platform === "darwin") {
    command = [
      `networksetup -setwebproxy "Wi-Fi" localhost 8000`,
      `networksetup -setsecurewebproxy "Wi-Fi" localhost 8000`,
      `networksetup -setwebproxystate "Wi-Fi" on`,
      `networksetup -setsecurewebproxystate "Wi-Fi" on`
    ].join(" && ");
  } else if (platform === "win32") {
    command = [
      `reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f`,
      `reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyServer /t REG_SZ /d localhost:8000 /f`,
      `RunDll32.exe inetcpl.cpl,ProxyStub`
    ].join(" && ");
  } else {
    console.error("❌ OS non supporté.");
    return;
  }

  sudo.exec(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Erreur d'exécution :", error);
    } else {
      console.log("✅ Proxy système activé !");
    }
  });
}
export function disableSystemProxy() {
  const platform = os.platform();

  let command = "";

  if (platform === "darwin") {
    command = [
      `networksetup -setwebproxystate "Wi-Fi" off`,
      `networksetup -setsecurewebproxystate "Wi-Fi" off`
    ].join(" && ");
  } else if (platform === "win32") {
    command = [
      `reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f`,
      `RunDll32.exe inetcpl.cpl,ProxyStub`
    ].join(" && ");
  } else {
    console.error("❌ OS non supporté.");
    return;
  }

  sudo.exec(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Erreur d'exécution :", error);
    } else {
      console.log("✅ Proxy système désactivé !");
    }
  });
}

