import React from "react";

const Courses = () => {
  const courses = [
    { name: "普通科", description: "基礎学力を身につけ、多様な進路に対応。" },
    { name: "専門科", description: "実践的なスキルを学び、即戦力となる人材を育成。" },
    { name: "国際科", description: "語学力と国際感覚を養うカリキュラム。" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>コース紹介</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
