import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper"; // 必要なモジュールをインポート
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      id: 1,
      text: "新入生歓迎会のお知らせ",
      background: "#ddd",
    },
    {
      id: 2,
      text: "避難訓練のご案内",
      background: "#bbb",
    },
    {
      id: 3,
      text: "夏休みの自由研究コンテスト",
      background: "#999",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // ユーザー操作後も再生を続行
      }}
      pagination={{ clickable: true }} // ページネーションを有効化
      navigation={true} // 前後ナビゲーションを有効化
      modules={[Autoplay, Pagination, Navigation]} // モジュールを登録
      style={{ width: "100%", height: "300px" }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            style={{
              height: "100%",
              background: slide.background,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
