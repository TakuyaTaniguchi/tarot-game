import {
    Links,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";

const isReady: boolean = false;
console.log(isReady);

export default function App() {
    return (
        <html>
        <head>
            <link
                rel="icon"
                href="data:image/x-icon;base64,AA"
            />
            <Meta />
            <Links />
        </head>
        <body>
        <h1>Hello world!!!!!</h1>
        <Outlet />

        <Scripts />
        </body>
        </html>
    );
}