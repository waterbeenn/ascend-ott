import background from "../../img/homepage/background.mp4";
import "./index.css";

const MainVisual = () => {
  return (
    <div id="mainVisual">
      <div className="title-box">
        <div className="main-title">
          <p className="top-title">Ascend</p>
          <p className="mid-title">당신의 운동 파트너</p>
          <p className="btm-title">올인원 어센드로 완벽 해결.</p>
        </div>
        <div className="free-btn">
          <p>7일 무료체험</p>
        </div>
      </div>
      <div className="background">
        <video autoPlay loop muted playsInline className="main-video">
          <source src={background} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainVisual;
