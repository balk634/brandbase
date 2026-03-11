import { spawn } from "node:child_process";
import path from "node:path";
import net from "node:net";

function getNextCommand() {
  return path.join(
    process.cwd(),
    "node_modules",
    ".bin",
    process.platform === "win32" ? "next.cmd" : "next",
  );
}

export function startNextServer(port) {
  const command = getNextCommand();
  const child =
    process.platform === "win32"
      ? spawn(
          "cmd.exe",
          ["/c", `${command} start -p ${port}`],
          {
            stdio: ["ignore", "pipe", "pipe"],
            env: {
              ...process.env,
              NODE_ENV: "production",
            },
          },
        )
      : spawn(command, ["start", "-p", String(port)], {
          stdio: ["ignore", "pipe", "pipe"],
          env: {
            ...process.env,
            NODE_ENV: "production",
          },
        });

  child.stdout.on("data", (chunk) => {
    process.stdout.write(`[next:start] ${chunk}`);
  });

  child.stderr.on("data", (chunk) => {
    process.stderr.write(`[next:start] ${chunk}`);
  });

  return child;
}

export async function getAvailablePort() {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close(() => reject(new Error("Failed to resolve an open port.")));
        return;
      }

      const port = address.port;
      server.close((error) => {
        if (error) reject(error);
        else resolve(port);
      });
    });
  });
}

export async function waitForServer(url, timeoutMs = 30_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status >= 200 && res.status < 500) {
        return;
      }
    } catch {
      // Server not ready yet.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for server: ${url}`);
}

export async function stopProcess(child) {
  if (!child || child.killed) return;

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const killer = spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
        stdio: "ignore",
      });
      killer.once("exit", () => resolve());
    });
    return;
  }

  await new Promise((resolve) => {
    const timeout = setTimeout(() => {
      child.kill("SIGKILL");
      resolve();
    }, 5_000);

    child.once("exit", () => {
      clearTimeout(timeout);
      resolve();
    });

    child.kill("SIGTERM");
  });
}
