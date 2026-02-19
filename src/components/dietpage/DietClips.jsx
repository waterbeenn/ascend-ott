import React, { useState, useEffect, useRef } from "react";
import "./DietClips.css";
import { LuHeart, LuMessageCircle, LuShare2 } from "react-icons/lu";
import { FiMoreVertical } from "react-icons/fi";

import clip1 from "../../img/dietpage/clip1.png";
import clip2 from "../../img/dietpage/clip2.png";
import clip3 from "../../img/dietpage/clip3.png";
import clip4 from "../../img/dietpage/clip4.png";
import clip5 from "../../img/dietpage/clip5.png";
import profile1 from "../../img/dietpage/Profile1.png";
import profile2 from "../../img/dietpage/Profile2.png";
import profile3 from "../../img/dietpage/Profile3.png";
import profile4 from "../../img/dietpage/Profile4.png";
import profile5 from "../../img/dietpage/Profile5.png";

const DietClips = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [likedClips, setLikedClips] = useState({});

  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef();

  /* --- 데이터: 클립 목록 --- */
  const clipsData = [
    {
      id: 1,
      img: clip1,
      profile: profile1,
      nick: "캣셰프",
      title: "양배추에 쏙, 한입쌈",
      views: "1.2만회",
      time: "방금 전",
      likes: 1500,
    },
    {
      id: 2,
      img: clip2,
      profile: profile2,
      nick: "헬스앤쿡",
      title: "의외의 꿀조합 덮밥",
      views: "8.5천회",
      time: "2시간 전",
      likes: 850,
    },
    {
      id: 3,
      img: clip3,
      profile: profile3,
      nick: "부카요사카",
      title: "월남쌈 만들기",
      views: "2,025회",
      time: "4시간 전",
      likes: 92,
    },
    {
      id: 4,
      img: clip4,
      profile: profile4,
      nick: "그린라이프",
      title: "겹겹이 꽉 찬 치킨샌드",
      views: "5.6천회",
      time: "어제",
      likes: 620,
    },
    {
      id: 5,
      img: clip5,
      profile: profile5,
      nick: "감자러버",
      title: "상큼폭발 당근라페",
      views: "3.1천회",
      time: "2일 전",
      likes: 410,
    },
  ];

  /* --- 자동 슬라이드 기능 --- */
  useEffect(() => {
    if (isDragging || isPaused) return;
    const nextCard = () => {
      setActiveIndex((prev) => (prev + 1) % clipsData.length);
    };
    autoPlayRef.current = setInterval(nextCard, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [isDragging, isPaused, clipsData.length]);

  /* --- 좋아요 토글 기능 --- */
  const toggleLike = (id) => {
    setLikedClips((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /* --- 드래그 핸들러 --- */
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || (e.touches && e.touches[0].pageX));
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.pageX || (e.changedTouches && e.changedTouches[0].pageX);
    const diff = startX - endX;
    if (diff > 50) setActiveIndex((prev) => (prev + 1) % clipsData.length);
    else if (diff < -50)
      setActiveIndex(
        (prev) => (prev - 1 + clipsData.length) % clipsData.length,
      );
  };

  return (
    <div className="clips-section">
      <div className="clips-header-container">
        <div className="clips-header">
          <h2 className="clips-title">1분 식단 Clip</h2>
          <span className="clips-more">더 보기 →</span>
        </div>
      </div>

      <div
        className="clips-slider-wrapper"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {clipsData.map((clip, index) => {
          let offset = index - activeIndex;
          if (offset < -2) offset += clipsData.length;
          if (offset > 2) offset -= clipsData.length;

          let cardClass = "clip-card";
          if (offset === 0) cardClass += " center";
          else if (offset === -1) cardClass += " left1";
          else if (offset === 1) cardClass += " right1";
          else if (offset === -2) cardClass += " left2";
          else if (offset === 2) cardClass += " right2";

          const isLiked = likedClips[clip.id];
          const displayLikes = isLiked ? clip.likes + 1 : clip.likes;

          return (
            <div
              key={clip.id}
              className={cardClass}
              onClick={() => {
                if (offset !== 0) setActiveIndex(index);
              }}
              onMouseEnter={() => {
                if (offset === 0) setIsPaused(true);
              }}
              onMouseLeave={() => {
                if (offset === 0) setIsPaused(false);
              }}
            >
              <img
                src={clip.img}
                alt={clip.title}
                className="clip-bg"
                draggable="false"
              />

              {/* --- 가독성을 위한 내부 그라데이션 오버레이 --- */}
              <div className="clip-gradient-overlay"></div>

              <div className={`clip-content ${offset === 0 ? "active" : ""}`}>
                <div className="clip-info-section">
                  <div className="profile-box">
                    <img
                      src={clip.profile}
                      alt="profile"
                      className="profile-img"
                      draggable="false"
                    />
                    <div className="nick-box">
                      <span className="nickname">{clip.nick}</span>
                      <span className="dot">ㆍ</span>
                      <span className="follow">팔로우</span>
                    </div>
                  </div>
                  <div className="title-box">
                    <h3 className="clip-subject">{clip.title}</h3>
                    <span className="clip-info">
                      {clip.views}ㆍ{clip.time}
                    </span>
                  </div>
                </div>

                <div className="sidebar-icons">
                  <div
                    className="icon-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(clip.id);
                    }}
                  >
                    <LuHeart
                      className={`side-icon heart-icon ${isLiked ? "liked" : ""}`}
                    />
                    <span className="icon-text">
                      {displayLikes.toLocaleString()}
                    </span>
                  </div>
                  <div className="icon-item">
                    <LuMessageCircle className="side-icon" />
                    <span className="icon-text">42</span>
                  </div>
                  <div className="icon-item">
                    <LuShare2 className="side-icon" />
                    <span className="icon-text">공유</span>
                  </div>
                  <div className="icon-item more-btn-vertical">
                    <FiMoreVertical className="side-icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DietClips;
