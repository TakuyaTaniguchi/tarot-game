import React from 'react';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">魅惑のタロットの世界へようこそ</h1>
          <p className="hero-subtitle">古代の叡智があなたの未来を照らします</p>
          <Link to="/reading" className="tarot-btn">リーディングを始める</Link>
        </div>
      </section>
      
      <section className="features">
        <h2 className="section-title">タロットの魔法を体験</h2>
        <div className="card-container">
          <div className="card fade-in">
            <div className="card-content">
              <h3 className="card-title">過去、現在、未来</h3>
              <p className="card-description">
                3枚のカードで人生の流れを読み解き、あなたの道を照らします。
                時間の糸を紐解き、あなたの歩みを明らかにします。
              </p>
            </div>
          </div>
          
          <div className="card fade-in">
            <div className="card-content">
              <h3 className="card-title">ケルト十字法</h3>
              <p className="card-description">
                伝統的な10枚のカードを使った詳細なリーディングで、あなたの状況を
                多角的に分析し、深い洞察を提供します。
              </p>
            </div>
          </div>
          
          <div className="card fade-in">
            <div className="card-content">
              <h3 className="card-title">ワンカードリーディング</h3>
              <p className="card-description">
                シンプルながらも強力な一枚のカードで、今日の指針や
                直面している問題への答えを得ることができます。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="cta-content fade-in">
          <h2 className="cta-title">あなたの運命を紐解きましょう</h2>
          <p className="cta-description">
            タロットカードは単なる占いツールではなく、自己理解と内省の道具です。
            あなたの中に眠る答えを引き出し、人生の旅路をより豊かにするお手伝いをします。
          </p>
          <div className="cta-buttons">
            <Link to="/reading" className="tarot-btn">リーディングを始める</Link>
            <Link to="/cards" className="tarot-btn">カード一覧を見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}