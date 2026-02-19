import { LuThumbsUp, LuThumbsDown, LuHeart } from 'react-icons/lu';
import { MdOutlineFileDownload } from 'react-icons/md';
import videoImg from '/src/img/videoDetail/sub_main.png';

const MainVideo = () => {
    return (
        <section className="video-main-section">
            <div className="video-player-area">
                <div className="video-placeholder">
                    <img src={videoImg} alt="Video Thumbnail" />
                </div>
            </div>

            <div className="video-info-area">
                <span className="video-meta">조회수 123,12회 · 소모 칼로리 365kcal</span>
                <div className="video-title-row">
                    <h2 className="video-title">
                        하루 한 번! 코어부터 골반 근육 바로잡는 15분 스쿼트
                    </h2>

                    <div className="action-chips">
                        <button className="chip-btn">
                            <LuThumbsUp /> <span>영상 추천</span>
                        </button>
                        <button className="chip-btn">
                            <LuThumbsDown /> <span>비추천</span>
                        </button>
                        <button className="chip-btn">
                            <MdOutlineFileDownload /> <span>저장하기</span>
                        </button>
                        <button className="chip-btn">
                            <LuHeart /> <span>찜하기</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="detail-divider" />
        </section>
    );
};

export default MainVideo;
