const DietSection = ({ data }) => {
    return (
        <div className="diet-card-list">
            {data.map((item) => (
                <div className="diet-card">
                    <img src={item.img} alt={item.title} className="diet-img" />
                    <div className="diet-text-area">
                        <p className="diet-name">{item.title}</p>
                        <p className="diet-desc">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DietSection;
