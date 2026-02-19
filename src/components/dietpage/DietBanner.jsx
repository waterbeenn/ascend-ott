import React, { useRef, useEffect, useState } from "react";
import "./DietBanner.css";
import AIBannerImg from "../../img/dietpage/AIbanner.png";

const DietBanner = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "나에게 맞는 진단 제공",
      desc: "AI 식단은 나이, 키, 목표 뿐만 아니라 운동량과 활동량을 고려한 맞춤 진단을 제공해요.",
    },
    {
      id: 2,
      title: "끼니에 따라, 적정 칼로리 식단 생성",
      desc: "아침, 점심, 저녁, 간식 다 챙겨먹지 않아도 알맞게 식단을 생성해요.",
    },
    {
      id: 3,
      title: "AI 딥러닝으로 적합성 체크 및 추천",
      desc: "추천하는 식품의 적합한 영양소를 체크해서 추천해요.",
    },
  ];

  return (
    <div
      className={`banner-container ${isVisible ? "animate" : ""}`}
      ref={bannerRef}
    >
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${AIBannerImg})` }}
      >
        {/* --- 왼쪽 구역: 제목 & 버튼 --- */}
        <div className="banner-left">
          <h2 className="banner-title">
            AI가 만들어 주는
            <br />
            나만의 맞춤형 식단
          </h2>
          <p className="banner-subtitle">
            먹는 순간까지 스마트하게, Ascend가 함께합니다.
          </p>

          <div className="banner-buttons">
            <button className="btn-primary">검진받기</button>
            <button className="btn-secondary">검진기록 보기</button>
          </div>
        </div>

        {/* --- 오른쪽 구역: 1, 2, 3 리스트 --- */}
        <div className="banner-right">
          <ul className="feature-list">
            {features.map((item) => (
              <li key={item.id} className="feature-item">
                <div className="feature-number">{item.id}</div>
                <div className="feature-text">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">
                    {item.desc.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== item.desc.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DietBanner;
