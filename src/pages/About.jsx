import React from "react";

const About = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", lineHeight: "1.8" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>学校紹介</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        私たちの学校は、「学びを通じて未来を切り拓く」を理念に掲げ、地域社会に貢献する人材を育成しています。
        創立以来、100年以上にわたり伝統と革新を融合させた教育を提供しています。
      </p>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>学校理念</h2>
        <p>
          生徒一人ひとりの個性を尊重し、社会に役立つ人材を育てることを目指します。
        </p>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>学校の歴史</h2>
        <p>
          創立は1920年。当初は小さな学び舎から始まりましたが、現在では最新設備を備えたキャンパスを誇ります。
        </p>
      </section>
      <section>
        <h2 style={{ marginBottom: "1rem" }}>教育の特色</h2>
        <ul style={{ paddingLeft: "1.5rem", listStyle: "disc" }}>
          <li>充実した個別指導体制</li>
          <li>国際感覚を養う語学教育</li>
          <li>地域社会との連携を重視したカリキュラム</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
