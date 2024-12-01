import React from "react";
import Slider from "../components/Slider";
import CardGrid from "../components/CardGrid";

const Home = () => {
  return (
    <main>
      {/* メインビジュアル */}
      <section className="main-visual">
        <Slider />
      </section>

      {/* ニュースセクション */}
      <section className="news-section">
        <h2>最新のお知らせ</h2>
        <CardGrid />
      </section>

      {/* 学校の特徴セクション */}
      <section className="features-section">
        <h2>学校の特徴</h2>
        <div className="features">
          <div className="feature-item">
            <h3>充実した施設</h3>
            <p>最新設備を備えた校舎で快適な学びをサポートします。</p>
          </div>
          <div className="feature-item">
            <h3>個別指導</h3>
            <p>生徒一人ひとりに寄り添った指導を行います。</p>
          </div>
          <div className="feature-item">
            <h3>多彩なコース</h3>
            <p>幅広い進路に対応する多彩なカリキュラムを提供します。</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
