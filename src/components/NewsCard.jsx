import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  return (
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
        <div style={{ marginTop: "0.5rem" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-block",
                background: "#e0f7fa",
                color: "#00796b",
                padding: "0.2rem 0.5rem",
                margin: "0 0.2rem",
                borderRadius: "4px",
                fontSize: "0.875rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
