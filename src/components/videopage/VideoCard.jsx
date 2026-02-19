import { IoPlayCircle } from "react-icons/io5";

const VideoCard = ({ id, img, title, time, type }) => {
  return (
    <div className="video-card">
      <div className="thumb">
        <img src={img} alt={title} />

        {/* 1분 Clip일 때만 재생 버튼 아이콘 표시 */}
        {type === "clip" && (
          <div className="play-icon">
            <IoPlayCircle />
          </div>
        )}

        {time && <span className="time">{time}</span>}
      </div>

      <p className="title">{title}</p>
    </div>
  );
};

export default VideoCard;
