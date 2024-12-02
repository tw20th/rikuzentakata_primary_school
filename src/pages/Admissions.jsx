import React from "react";

const Admissions = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>入試情報</h1>
      <section style={{ marginBottom: "2rem" }}>
        <h2>募集要項</h2>
        <p>
          2024年度の入学試験に関する詳細は、以下の内容をご確認ください。
        </p>
        <ul style={{ paddingLeft: "1.5rem", listStyle: "disc" }}>
          <li>募集人数：普通科 80名、専門科 40名、国際科 30名</li>
          <li>受験資格：中学校卒業見込みの者</li>
          <li>試験科目：国語、数学、英語</li>
        </ul>
      </section>
      <section>
        <h2>試験日程</h2>
        <ul style={{ paddingLeft: "1.5rem", listStyle: "disc" }}>
          <li>出願期間：2024年1月10日 ～ 1月20日</li>
          <li>一次試験：2024年2月10日</li>
          <li>二次試験：2024年3月15日</li>
          <li>合格発表：2024年2月20日</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
