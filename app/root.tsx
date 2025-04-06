import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";

// グローバルスタイルシートを読み込む
import { LinksFunction } from "@remix-run/node";
import globalStyles from "./styles/global.css";
import homeStyles from "./styles/home.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap"
  },
  {
    rel: "stylesheet",
    href: globalStyles
  },
  {
    rel: "stylesheet",
    href: homeStyles
  }
];

export default function App() {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23e94560' d='M32 8l8 16 16 8-16 8-8 16-8-16-16-8 16-8z'/%3E%3C/svg%3E" />
                <Meta />
                <Links />
            </head>
            <body>
                <div className="app-container">
                    <Header />
                    <main className="content">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}