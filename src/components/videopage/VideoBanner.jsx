const VideoBanner = () => {
  return (
    <section className="video-banner">
      <div className="banner-img">
        <img src="/img/videopage/main.jpg" alt="5분 힙운동" />
      </div>

      <div className="banner-info">
        <p className="today">오늘의 추천 운동</p>

        <h2>5분 힙 집중 운동</h2>

        <p className="meta">⏱ 8:20</p>

        <p className="desc">
          어제는 상체 운동 영상을 많이 시청하셨어요 그럼 오늘은 하체운동으로
          같이 달려봐요!
          <br/>
            이 영상에서는 엉덩이 부위를 집중적으로 강화할 수 있는 다양한 운동을
            소개해요.
    
        </p>

        <div className="btns">
          <button className="play">재생하기</button>
          <button className="detail">자세히 보기</button>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
