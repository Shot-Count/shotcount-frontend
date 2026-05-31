import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const distDir = fileURLToPath(new URL("../dist", import.meta.url));
const bannedStrings = [
  "Welcome back.",
  "Email address",
  "Password",
  "Forgot your password",
  "Continue to jobs",
  "Need an account?",
  "Make one",
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (/\.(html|js|css)$/i.test(entry.name)) {
      yield path;
    }
  }
}

const failures = [];

for await (const path of walk(distDir)) {
  const source = await readFile(path, "utf8");
  for (const value of bannedStrings) {
    if (source.includes(value)) {
      failures.push(`${path}: contains banned email-auth UI text "${value}"`);
    }
  }
}

if (failures.length > 0) {
  console.error("Email/password auth UI must not ship on ShotCount landing.");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Verified: no email/password auth UI strings in dist.");
