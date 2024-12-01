import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CardGrid = ({ searchQuery = "" }) => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // 選択されたカテゴリー

  useEffect(() => {
    AOS.init({ duration: 800 });

    // JSONファイルからデータを取得
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles.json");
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // フィルタリングされた記事
  const filteredArticles = articles.filter(
    (item) =>
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );

  return (
    <div>
      {/* フィルターボタン */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <button onClick={() => setSelectedCategory("")}>すべて</button>
        <button onClick={() => setSelectedCategory("学校行事")}>学校行事</button>
        <button onClick={() => setSelectedCategory("お知らせ")}>お知らせ</button>
        <button onClick={() => setSelectedCategory("イベント")}>イベント</button>
      </div>

      {/* ニュースカードグリッド */}
      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {filteredArticles.map((item) => (
          <Link
            to={`/articles/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card"
              data-aos="fade-up"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
