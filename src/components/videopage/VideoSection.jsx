import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import VideoCard from './VideoCard';

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';

// 데이터 파일에서 각 섹션별 데이터를 임포트합니다.
import { videoData, basicData, clipData, food1Data, food2Data } from './videoData';

const VideoSection = ({ title, type }) => {
    // type 값에 따라 어떤 데이터를 사용할지 매핑합니다.
    const dataMap = {
        video: videoData,
        basic: basicData,
        clip: clipData,
        food1: food1Data,
        food2: food2Data,
    };

    // 현재 type에 맞는 데이터를 가져오고, 없으면 빈 배열을 기본값으로 설정합니다.
    const data = dataMap[type] || [];

    // 필터 버튼 상태 (첫 번째 섹션에만 표시)
    const [activeFilter, setActiveFilter] = useState('전체');

    // 첫 번째 섹션(오늘의 인기 영상)에만 필터 버튼 표시
    const showFilters = type === 'video';

    const filters = [
        '전체',
        '인기동영상',
        '팔뚝',
        '허벅지',

        '복부',
        '등',
        '종아리',
        '요가',
        '필라테스',
        '식단',
    ];

    // Swiper 설정 (섹션별로 다르게)
    const swiperSettings = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerView: 'auto',
        // navigation: true,
        // modules: [Navigation],
        breakpoints: {
            768: {
                spaceBetween: 15,
            },
            1024: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 20,
            },
        },
    };

    return (
        <section className={`video-section ${type}`}>
            <div className="section-top">
                <h3>{title}</h3>
                {/* 더보기 링크 */}
                <a href="#" className="more-link">
                    더보기 →
                </a>
            </div>

            {/* 필터 버튼 (오늘의 인기 영상 섹션에만 표시) */}
            {showFilters && (
                <div className="filter-buttons">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            )}

            {/* Swiper로 교체 */}
            <Swiper {...swiperSettings} className="card-swiper">
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <VideoCard {...item} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default VideoSection;
