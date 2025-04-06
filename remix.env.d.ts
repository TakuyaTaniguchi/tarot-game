/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

// CSSモジュールの型定義
declare module '*.css?url' {
  const url: string;
  export default url;
}

// 通常のCSSモジュールの型定義も追加しておく
declare module '*.css' {
  const css: string;
  export default css;
}

interface Window {
    ENV: {
        [key: string]: string;
    };
}