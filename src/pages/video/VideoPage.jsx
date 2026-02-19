import VideoBanner from "../../components/videopage/VideoBanner";
import VideoSection from "../../components/videopage/VideoSection";
import "./VideoPage.css";

const VideoPage = () => {
  return (
    <div className="video-page-content">
      <div className="video-page-header">
        <h1>안녕하세요, 민지님!</h1>
        <p>
          짧은 시간이라도 포기하지 않고 꾸준히 움직이면 더 강해질 수 있어요.
        </p>
      </div>

      <VideoBanner />

      <VideoSection title="오늘의 즐기기 영상 📌" type="video" />
      <VideoSection title="순서로 따라하는 기초부터 탄탄" type="basic" />
      <VideoSection title="1분 Clip 📌" type="clip" />
      <VideoSection title="식단과 연계한 추천" type="food1" />
      <VideoSection title="자극없고 맛있는 레시피" type="food2" />
    </div>
  );
};

export default VideoPage;
