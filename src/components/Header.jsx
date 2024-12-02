import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // 検索キーワードを親コンポーネントに渡す
  };

  return (
    <header style={{ background: "#007BFF", padding: "1rem", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>学校サイト</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              ホーム
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              学校紹介
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              コース紹介
            </Link>
          </li>
          <li>
            <Link
              to="/admissions"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              入試情報
            </Link>
          </li>
          <li>
            <Link
              to="/access"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              アクセス
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="ニュースを検索..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginTop: "1rem",
          padding: "0.5rem",
          width: "80%",
          maxWidth: "400px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </header>
  );
};

export default Header;
