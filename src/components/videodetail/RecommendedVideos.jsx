import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { LuAlarmClock } from 'react-icons/lu';
import { videoSwiperConfig } from './swiperConfig';

const RecommendedVideos = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['추천 영상', '이 영상과 비슷한 영상'];

    const swiperConfig = {
        modules: [Navigation],
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
            nextEl: '.rec-next',
            prevEl: '.rec-prev',
        },
        breakpoints: {
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            320: { slidesPerView: 1.2 },
        },
    };

    return (
        <section className="recommended-section">
            <div className="recommend-tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="swiper-container-wrapper">
                <Swiper {...videoSwiperConfig}>
                    {data.map((video) => (
                        <SwiperSlide key={video.id}>
                            <VideoCard video={video} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="rec-prev custom-nav" aria-label="이전 영상" />
                <div className="rec-next custom-nav" aria-label="다음 영상" />
            </div>
        </section>
    );
};

const VideoCard = ({ video }) => (
    <div className="video-card">
        <div className="thumb-box">
            <img src={video.img} alt={video.title} />
        </div>
        <div className="video-info">
            <h4 className="video-title">{video.title}</h4>
            <div className="video-meta">
                <span className="view-count">조회수 {video.views}</span>
                <span className="duration">
                    <LuAlarmClock /> {video.time}
                </span>
            </div>
        </div>
    </div>
);

export default RecommendedVideos;
