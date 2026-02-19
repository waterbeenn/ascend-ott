import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const WorkoutSwiper = ({ data }) => {
    return (
        <Swiper slidesPerView={1.2} spaceBetween={16} className="workout-swiper">
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="workout-card">
                        <img src={item.img} alt={item.title} className="workout-img" />
                        <div className="workout-overlay">
                            <p className="workout-category">{item.title}</p>
                            <p className="coach-name">강사 : {item.coach}</p>
                        </div>

                        {/* 타이머 레이어 */}
                        <div className="timer-box">
                            <p className="timer-label">Time Remaining</p>
                            <p className="timer-value">{item.time}</p>
                            <hr />
                            <div className="cal">
                                <p className="cal-1">Calories Burned</p>
                                <p className="cal-2">350</p>
                            </div>
                            <div className="bars">
                                <div className="timer-progress-bar">
                                    <div className="progress-fill" style={{ width: '70%' }}></div>
                                </div>
                                <div className="timer-progress-bar">
                                    <div className="progress-fill" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="bpm">
                                <p>Distance 5.2 KM</p>
                                <p>155 BPM</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WorkoutSwiper;
