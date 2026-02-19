import { Swiper, SwiperSlide } from 'swiper/react';
import { LuHeart } from 'react-icons/lu'; // 일관성을 위해 아이콘 사용
import 'swiper/css';
import { productSwiperConfig } from './swiperConfig';

const RelatedProducts = ({ data }) => {
    // Swiper 설정을 별도 상수로 관리
    const swiperConfig = {
        spaceBetween: 12,
        slidesPerView: 1.2,
        breakpoints: {
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
        }
    };

    return (
        <div className="gray-box-container">
            <h3 className="detail-section-title">관련 제품</h3>
            <Swiper {...productSwiperConfig}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

// ProductCard를 별도 컴포넌트로 분리
const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <div className="product-img-box">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="product-info">
                <div className="title-wrapper">
                    <p className="product-title">{item.title}</p>
                    <button 
                        className="wish-btn" 
                        aria-label="찜하기"
                    >
                        <LuHeart />
                    </button>
                </div>
                <p className="product-price">₩ {item.price.toLocaleString()}</p>
                <p className="product-rating">★ {item.rating} ({item.reviews})</p>
            </div>
        </div>
    );
};

export default RelatedProducts;