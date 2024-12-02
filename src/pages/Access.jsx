import React from "react";

const Access = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>アクセス</h1>
      <p>〒123-4567 岩手県陸前高田市 〇〇町〇〇番地</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9279078918676!2d139.69170631557115!3d35.68963448019106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjAiTiAxMznCsDQxJzI2LjMiRQ!5e0!3m2!1sen!2sjp!4v1633019606275!5m2!1sen!2sjp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="学校所在地"
      ></iframe>
    </div>
  );
};

export default Access;
