import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "普通科",
      description: "基礎学力を養い、多様な進路に対応。文系・理系の進路選択が可能。",
      features: ["大学進学対応", "基礎科目の徹底"],
    },
    {
      name: "専門科",
      description: "実践的なスキルを学び、即戦力となる人材を育成。",
      features: ["商業スキル習得", "資格取得支援"],
    },
    {
      name: "国際科",
      description: "語学力と国際感覚を養うカリキュラムを提供。",
      features: ["留学制度の充実", "英語特化プログラム"],
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>コース紹介</h1>
      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <ul style={{ paddingLeft: "1.5rem", listStyle: "disc" }}>
            {course.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Courses;
