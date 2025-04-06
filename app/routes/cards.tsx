import type { LoaderFunction } from "@remix-run/node";
import { CardsPage, LoaderData } from '../pages/cards';

export const loader: LoaderFunction = async () => {
  try {
    // データをインポート
    const majorArcana = await import("../data/tarot-major.json");
    
    // 正しいContent-Typeでレスポンスを返す
    return new Response(JSON.stringify({
      cards: majorArcana
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error loading tarot data:", error);
    return new Response(JSON.stringify({ error: "Failed to load tarot data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export default function Cards() {
    return <CardsPage />;
}