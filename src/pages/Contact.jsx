import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 仮の送信処理（実際のメール送信機能はサーバー側で実装）
    setStatus("お問い合わせを受け付けました。近日中にご連絡いたします。");
    setFormData({ name: "", email: "", message: "" });

    // 実際の送信にはAPIやメール送信サービスを利用
    // 例: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>お問い合わせ</h1>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        ご不明な点やご質問がございましたら、以下のフォームをご利用ください。
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          お名前:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </label>
        <label>
          メールアドレス:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          />
        </label>
        <label>
          お問い合わせ内容:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              height: "100px",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "0.5rem",
            }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          送信
        </button>
        {status && (
          <p style={{ color: "green", marginTop: "1rem", textAlign: "center" }}>
            {status}
          </p>
        )}
      </form>

      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>SNSで学校をフォロー</h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/twitter-icon.png"
              alt="Twitter"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram-icon.png"
              alt="Instagram"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
