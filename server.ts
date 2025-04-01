import { createRequestHandler } from "@remix-run/express";
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

  const build = viteDevServer
    ? () =>
        viteDevServer.ssrLoadModule(
          "virtual:remix/server-build"
        )
    : await import("./build/server/index.js");

  app.all("*", createRequestHandler({ build }));

  app.listen(3000, () => {
    console.log("App listening on http://localhost:3000");
  });
};

// サーバー起動
initServer().catch(console.error);