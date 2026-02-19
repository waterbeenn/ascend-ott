import { IoIosArrowRoundForward } from 'react-icons/io';

const StoreSection = ({ data }) => {
    return (
        <div className="store-card-list">
            {data.map((item) => (
                <div className="store-card">
                    <div className="store-info">
                        <h4 className="store-title">{item.title}</h4>
                        <p className="store-desc">{item.desc}</p>
                    </div>
                    <img src={item.img} alt={item.title} className="store-img" />
                    <button className="store-btn">
                        둘러보기 <IoIosArrowRoundForward className="arrow" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default StoreSection;
