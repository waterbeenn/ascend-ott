import React, { useRef, useState } from "react";
import "./DietRecipes.css";
import recipe1 from "../../img/dietpage/recipe1.png";
import recipe2 from "../../img/dietpage/recipe2.png";
import recipe3 from "../../img/dietpage/recipe3.png";

const DietRecipes = () => {
  /* --- 스크롤 기능 도구 --- */
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  /* --- 데이터: 레시피 목록 --- */
  const recipes = [
    {
      id: 1,
      img: recipe1,
      title: "아보카도 연어 오픈 샌드위치",
      desc: "연어에 샌드위치는 못참지~",
      tags: ["400Kcal", "고단백", "건강식단"],
    },
    {
      id: 2,
      img: recipe2,
      title: "두부구이 샐러드",
      desc: "야채만은 싫어요, 단백질도 같이 챙겨요!",
      tags: ["260Kcal", "고단백", "저칼로리"],
    },
    {
      id: 3,
      img: recipe3,
      title: "포두부 야채롤",
      desc: "두부 싫어하는 아들도 잘 먹어요.",
      tags: ["260Kcal", "고단백", "다이어트 식단"],
    },
  ];

  /* --- 마우스 드래그 스크롤 기능 --- */
  const onDragStart = (e) => {
    setIsDrag(true);
    /* scrollRef 안전 처리 적용 */
    setStartX(e.pageX + (scrollRef.current?.scrollLeft || 0));
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag && scrollRef.current) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <div className="recipes-container">
      {/* 1. 상단 제목 & 더보기 */}
      <div className="recipes-header">
        <h2 className="recipes-title">지금 인기있는 레시피</h2>
        <span className="recipes-more">더 보기 →</span>
      </div>

      {/* 2. 레시피 카드 목록 (가로 스크롤 영역) */}
      <div
        className={`recipes-list ${isDrag ? "dragging" : ""}`}
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
      >
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.img}
              alt={recipe.title}
              className="recipe-img"
              draggable="false"
            />

            {/* 텍스트 영역 */}
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-desc">{recipe.desc}</p>

              {/* 해시태그 */}
              <div className="recipe-tags">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="recipe-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietRecipes;
