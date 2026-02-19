const InfoSection = ({ data }) => {
    return (
        <div className="info-sub">
            <div className="info-card-list">
                {data.map((item) => (
                    <div className="info-card">
                        <h4 className="info-title">{item.title}</h4>
                           <p className="info-desc">{item.desc}</p>
                        <div className="info-icon-wrapper">
                            <img src={item.icon} alt="icon" className="info-icon" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="sub-btn">
                <button>구독하기</button>
            </div>
        </div>
    );
};

export default InfoSection;
