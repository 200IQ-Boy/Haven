import inquirer from "inquirer";
import { execSync } from "child_process";
import chalk from "chalk";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const interfaceName = "Wi-Fi"; 
const PASSWORD_FILE = path.resolve(".password");

// Hash SHA-256
function hash(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

// Vérifie si un mot de passe est déjà défini
function isPasswordSet() {
  return fs.existsSync(PASSWORD_FILE);
}

// Crée un mot de passe la première fois
async function setupPassword() {
  console.log(chalk.yellow("🔐 Aucun mot de passe défini. Créons-en un :"));

  const { pwd1 } = await inquirer.prompt({
    type: "password",
    name: "pwd1",
    message: "📝 Nouveau mot de passe :"
  });

  const { pwd2 } = await inquirer.prompt({
    type: "password",
    name: "pwd2",
    message: "🔁 Confirmez le mot de passe :"
  });

  if (pwd1 !== pwd2) {
    console.log(chalk.red("❌ Les mots de passe ne correspondent pas."));
    process.exit(1);
  }

  fs.writeFileSync(PASSWORD_FILE, hash(pwd1), { mode: 0o600 });
  console.log(chalk.green("✅ Mot de passe défini avec succès."));
}

async function resetPassword() {
  if (!isPasswordSet()) {
    console.log(chalk.red("❌ Aucun mot de passe à réinitialiser."));
    return;
  }

  await requirePassword();

  console.log(chalk.yellow("🛠️ Réinitialisation du mot de passe :"));

  const { pwd1 } = await inquirer.prompt({
    type: "password",
    name: "pwd1",
    message: "📝 Nouveau mot de passe :"
  });

  const { pwd2 } = await inquirer.prompt({
    type: "password",
    name: "pwd2",
    message: "🔁 Confirmez le nouveau mot de passe :"
  });

  if (pwd1 !== pwd2) {
    console.log(chalk.red("❌ Les mots de passe ne correspondent pas."));
    return;
  }

  fs.writeFileSync(PASSWORD_FILE, hash(pwd1), { mode: 0o600 });
  console.log(chalk.green("✅ Nouveau mot de passe enregistré."));
}


// Vérifie le mot de passe à la désactivation
async function requirePassword() {
  const { pwd } = await inquirer.prompt({
    type: "password",
    name: "pwd",
    message: "🔑 Entrez le mot de passe pour désactiver le proxy :"
  });

  const savedHash = fs.readFileSync(PASSWORD_FILE, "utf-8");

  if (hash(pwd) !== savedHash.trim()) {
    console.log(chalk.red("❌ Mot de passe incorrect. Désactivation refusée."));
    process.exit(1);
  }
}

// Fonctions proxy macOS
function setProxyMacOS() {
  try {
    execSync(`sudo networksetup -setwebproxy "${interfaceName}" localhost 8000`);
    execSync(`sudo networksetup -setsecurewebproxy "${interfaceName}" localhost 8000`);
    execSync(`sudo networksetup -setwebproxystate "${interfaceName}" on`);
    execSync(`sudo networksetup -setsecurewebproxystate "${interfaceName}" on`);
    console.log(chalk.green("✅ Proxy activé sur l'interface"), interfaceName);
  } catch (err) {
    console.error(chalk.red("❌ Erreur d'activation du proxy :"), err.message);
  }
}

function unsetProxyMacOS() {
  try {
    execSync(`sudo networksetup -setwebproxystate "${interfaceName}" off`);
    execSync(`sudo networksetup -setsecurewebproxystate "${interfaceName}" off`);
    console.log(chalk.yellow("🔌 Proxy désactivé sur l'interface"), interfaceName);
  } catch (err) {
    console.error(chalk.red("❌ Erreur de désactivation du proxy :"), err.message);
  }
}

// Proxy Windows
function setProxyWindows() {
  const proxyAddress = "localhost:8000";
  try {
    execSync(`reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f`);
    execSync(`reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyServer /t REG_SZ /d ${proxyAddress} /f`);
    execSync(`RunDll32.exe inetcpl.cpl,ProxyStub`);
    console.log(chalk.green("✅ Proxy système activé sur Windows :", proxyAddress));
  } catch (err) {
    console.error(chalk.red("❌ Erreur d'activation du proxy :"), err.message);
  }
}

function unsetProxyWindows() {
  try {
    execSync(`reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f`);
    execSync(`RunDll32.exe inetcpl.cpl,ProxyStub`);
    console.log(chalk.yellow("🔌 Proxy désactivé sur Windows"));
  } catch (err) {
    console.error(chalk.red("❌ Erreur de désactivation du proxy :"), err.message);
  }
}

const main = async () => {
  if (!isPasswordSet()) await setupPassword();

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Que veux-tu faire ?",
      choices: [
        { name: "✅ Activer le proxy système (macOS)", value: "enable" },
        { name: "❌ Désactiver le proxy système (macOS)", value: "disable" },
        { name: "✅ Activer le proxy système (Windows)", value: "enableWindows" },
        { name: "❌ Désactiver le proxy système (Windows)", value: "disableWindows" },
        { name: "🔁 Réinitialiser le mot de passe", value: "resetPassword" },
        { name: "🚪 Quitter", value: "exit" }
      ]
    }
  ]);

  if (action === "enable") setProxyMacOS();
  else if (action === "disable") {
    await requirePassword();
    unsetProxyMacOS();
  }
  else if (action === "enableWindows") setProxyWindows();
  else if (action === "disableWindows") {
    await requirePassword();
    unsetProxyWindows();
  }
  else if (action === "resetPassword") {
    await resetPassword();
  }
  else if (action === "exit") {
    console.log(chalk.blue("👋 À bientôt !"));
  }
};

main();

