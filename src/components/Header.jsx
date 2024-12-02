import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation(); // 現在のページを取得

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // 検索キーワードを親コンポーネントに渡す
  };

  return (
    <header
      style={{
        position: "sticky", // fixedをstickyに変更
        top: 0,
        width: "100%",
        background: "#007BFF",
        padding: "1rem",
        color: "#fff",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
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
          {[
            { path: "/", label: "ホーム" },
            { path: "/about", label: "学校紹介" },
            { path: "/courses", label: "コース紹介" },
            { path: "/admissions", label: "入試情報" },
            { path: "/access", label: "アクセス" },
            { path: "/contact", label: "お問い合わせ" },
          ].map((menu) => (
            <li key={menu.path}>
              <Link
                to={menu.path}
                style={{
                  color: location.pathname === menu.path ? "#FFD700" : "#fff", // 現在のページを強調
                  textDecoration: "none",
                  fontWeight: "bold",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  background: location.pathname === menu.path ? "#0056b3" : "transparent",
                }}
              >
                {menu.label}
              </Link>
            </li>
          ))}
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
