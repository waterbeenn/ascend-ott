import { IoIosArrowRoundForward } from 'react-icons/io';

const SectionLayout = ({ category, title, description, children }) => {
    return (
        <section className="section-container">
            <div className="section-header">
                <span className="category-label">{category}</span>
                <h2 className="section-title">{title}</h2>
                <div className="section-info">
                    <p className="section-desc">{description}</p>
                    {
                        (category === 'FnQ' ? (
                            ''
                        ) : (
                            <button className="view-more-btn">
                                바로가기 <IoIosArrowRoundForward className="arrow" />
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="swiper-wrapper-area">{children}</div>
            <div className="divider-line" />
        </section>
    );
};

export default SectionLayout;
