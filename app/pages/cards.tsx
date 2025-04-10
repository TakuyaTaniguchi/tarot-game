import { useLoaderData } from "@remix-run/react";

// タロットカードの型定義
export type TarotCard = {
  id: number;
  name: string;
  nameEn: string;
  arcana: string;
  number: number;
  suit: string | null;
  description: string;
  meaningUpright: string;
  meaningReversed: string;
  element: string | null;
  keywords: string[];
};

// ローダーデータの型定義
export type LoaderData = {
  cards: {
    cards: TarotCard[];
  };
};

export function CardsPage() {
  // 型付きのuseLoaderData
  const data = useLoaderData<LoaderData>();
  
  // デバッグ用のコンソール出力
  console.log("Loader data:", data);
  
  // データが存在するか確認してから分解

  const cards = data?.cards?.cards || [];

  return (
    <div>
      <h1>タロット一覧</h1>
      <section>
        <h2>大アルカナ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="border p-4 rounded shadow">
              <h3>{card.name} ({card.nameEn})</h3>
              <p>番号: {card.number}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>小アルカナ</h2>
        {/* 小アルカナのデータは別途実装 */}
      </section>
    </div>
  );
}