import { createRequestHandler } from "@remix-run/express";
import { ServerBuild } from "@remix-run/node";
import express from "express";
import { createServer } from "vite";

// ESモジュール形式で非同期に初期化
const initServer = async () => {
  const viteDevServer =
    process.env.NODE_ENV === "production"
      ? null
      : await createServer({
          server: { middlewareMode: true },
        });

  const app = express();
  app.use(
    viteDevServer
      ? viteDevServer.middlewares
      : express.static("build/client")
  );

  // build関数の型を明示的に指定
  const build: (() => Promise<ServerBuild>) | ServerBuild = viteDevServer
    ? () =>
        viteDevServer.ssrLoadModule(
          "virtual:remix/server-build"
        ) as Promise<ServerBuild>
    : await import("./build/server/index.js") as unknown as ServerBuild;

  app.all("*", createRequestHandler({ build }));

  app.listen(3000, () => {
    console.log("App listening on http://localhost:3000");
  });
};

// サーバー起動
initServer().catch(console.error);