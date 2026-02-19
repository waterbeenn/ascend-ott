import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DietStats.css";
import { LuCirclePlus, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const DietStats = ({ today }) => {
  const navigate = useNavigate(); // 이동 기능

  const [selectedPeriod, setSelectedPeriod] = useState("7days");
  const [baseDate, setBaseDate] = useState(new Date());
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 100);
  };

  const generateChartData = (period, base) => {
    const data = [];
    const todayObj = new Date(); // 오늘 날짜 (비교용)

    // (1) 7일 조회 (기존과 동일)
    if (period === "7days") {
      for (let i = 6; i >= 0; i--) {
        const d = new Date(base);
        d.setDate(d.getDate() - i);
        const dateLabel = `${d.getMonth() + 1}.${d.getDate()}`;
        const isToday = d.toDateString() === todayObj.toDateString();
        data.push({
          date: dateLabel,
          height: isToday ? "80%" : `${Math.floor(Math.random() * 50 + 20)}%`,
          active: isToday,
        });
      }
    }
    // (2) 1개월 조회 (4주치)
    else if (period === "1month") {
      for (let i = 0; i < 4; i++) {
        const height =
          i === 3 ? "80%" : `${Math.floor(Math.random() * 50 + 30)}%`;
        data.push({ date: `${i + 1}주`, height, active: i === 3 });
      }
    }
    // (3) 3개월 / 6개월 / 1년 조회 (월별)
    else {
      let count = 3; // 기본 3개월
      if (period === "6months") count = 6;
      if (period === "1year") count = 12;

      for (let i = count - 1; i >= 0; i--) {
        const d = new Date(base);
        d.setMonth(d.getMonth() - i);

        // 월 라벨 (2월)
        const dateLabel = `${d.getMonth() + 1}월`;
        const isThisMonth =
          d.getMonth() === todayObj.getMonth() &&
          d.getFullYear() === todayObj.getFullYear();

        data.push({
          date: dateLabel,
          height: isThisMonth
            ? "80%"
            : `${Math.floor(Math.random() * 50 + 20)}%`,
          active: isThisMonth,
        });
      }
    }
    return data;
  };

  const monthlyData = generateChartData(selectedPeriod, baseDate);
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setBaseDate(new Date());
    triggerAnimation();
  };

  const moveDate = (direction) => {
    const newDate = new Date(baseDate);
    const isNext = direction === "next";

    if (selectedPeriod === "7days") {
      newDate.setDate(newDate.getDate() + (isNext ? 7 : -7));
    } else if (selectedPeriod === "1month") {
      newDate.setMonth(newDate.getMonth() + (isNext ? 1 : -1));
    } else {
      newDate.setFullYear(newDate.getFullYear() + (isNext ? 1 : -1));
    }

    setBaseDate(newDate);
    triggerAnimation();
  };

  const goToRecord = () => navigate("/diet");
  // 안전장치
  if (!today) return <div>로딩중...</div>;

  return (
    <div className="stats-container">
      {/* 1. 상단 제목 */}
      <div className="stats-header">
        <h2>오늘 민지님의 상태는?</h2>
        <button className="record-btn" onClick={goToRecord}>
          <LuCirclePlus className="btn-icon" strokeWidth={1} />
          오늘의 식사 기록하기
        </button>
      </div>

      {/* 2. 박스 영역 */}
      <div className="stats-box">
        {/* === 도넛 차트 === */}
        <div className="left-section">
          <div className="section-title">
            <span>오늘의 칼로리</span>
            <span className="more-btn">자세히 보기 →</span>
          </div>

          <div className="donut-wrapper">
            <div className="svg-donut-box">
              <svg width="280" height="280" viewBox="0 0 280 280">
                {/* 회색 배경 원 */}
                <circle
                  cx="140"
                  cy="140"
                  r="120"
                  fill="none"
                  stroke="#E5E5E5"
                  strokeWidth="30"
                />
                {/* 주황색 게이지 (끝이 둥글게: strokeLinecap="round") */}
                <circle
                  cx="140"
                  cy="140"
                  r="120"
                  fill="none"
                  stroke="#E84700"
                  strokeWidth="30"
                  strokeDasharray="450 754"
                  strokeLinecap="round"
                  transform="rotate(90 140 140)"
                  // 애니메이션 효과 (stroke-dashoffset 이용)
                  style={{
                    transition: "stroke-dasharray 1s ease-out",
                    strokeDasharray: animate ? "400 628" : "0 628",
                  }}
                />
              </svg>

              {/* 가운데 글씨 */}
              <div className="donut-text">
                <div className="kcal-top">
                  <span className="kcal-bold">
                    {today.totalKcal.toLocaleString()}
                  </span>
                  <span className="kcal-light">
                    {" "}
                    / {today.goalKcal.toLocaleString()}
                  </span>
                </div>
                <div className="kcal-unit">kcal</div>
              </div>
            </div>
          </div>

          {/* 영양소 리스트 */}
          <div className="nutrient-list">
            {today.nutrients &&
              today.nutrients.map((item, index) => (
                <div key={index} className="nutrient-item">
                  <div className="icon-wrapper">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="nutrient-icon"
                    />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
          </div>
        </div>

        {/* 칸막이 선 */}
        <div className="vertical-divider"></div>

        {/* === 오른쪽 구역: 막대 그래프 === */}
        <div className="right-section">
          <div className="section-title">
            <span>월간 칼로리 통계</span>
            <span className="more-btn">자세히 보기 →</span>
          </div>

          {/* 그래프 영역 */}
          <div className="chart-container-row">
            <LuChevronLeft
              className="chart-arrow"
              onClick={() => moveDate("prev")}
            />

            <div className="bar-chart-area">
              {monthlyData.map((item, index) => (
                <div key={index} className="bar-column">
                  <div
                    className={`bar ${item.active ? "active" : ""}`}
                    style={{
                      height: animate ? item.height : "0%",
                    }}
                  ></div>
                  <span className="bar-date">{item.date}</span>
                </div>
              ))}
            </div>

            <LuChevronRight
              className="chart-arrow"
              onClick={() => moveDate("next")}
            />
          </div>

          {/* 3. 기간 선택 버튼*/}
          <div className="period-buttons">
            <button
              className={`p-btn ${selectedPeriod === "7days" ? "active" : ""}`}
              onClick={() => handlePeriodChange("7days")}
            >
              7일
            </button>
            <button
              className={`p-btn ${selectedPeriod === "1month" ? "active" : ""}`}
              onClick={() => handlePeriodChange("1month")}
            >
              1개월
            </button>
            <button
              className={`p-btn ${selectedPeriod === "3months" ? "active" : ""}`}
              onClick={() => handlePeriodChange("3months")}
            >
              3개월
            </button>
            <button
              className={`p-btn ${selectedPeriod === "6months" ? "active" : ""}`}
              onClick={() => handlePeriodChange("6months")}
            >
              6개월
            </button>
            <button
              className={`p-btn ${selectedPeriod === "1year" ? "active" : ""}`}
              onClick={() => handlePeriodChange("1year")}
            >
              1년
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietStats;
