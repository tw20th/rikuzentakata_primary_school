import React from "react";

const Admissions = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>入試情報</h1>
      <section>
        <h2>募集要項</h2>
        <p>
          2024年度の入学試験に関する詳細は、以下のリンクからご確認ください。
        </p>
        <button>詳細を見る</button>
      </section>
      <section>
        <h2>試験日程</h2>
        <p>一次試験: 2024年2月10日</p>
        <p>二次試験: 2024年3月15日</p>
      </section>
    </div>
  );
};

export default Admissions;
