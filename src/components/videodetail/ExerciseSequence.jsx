import { LuRotateCcw } from 'react-icons/lu';
import { IoTimeOutline } from 'react-icons/io5';

const ExerciseSequence = ({ data }) => {
    return (
        <section className="sequence-section">
            <SequenceHeader />

            <div className="gray-box-container">
                <div className="sequence-list">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className={`sequence-wrapper 
                                ${index === 0 ? 'first' : ''} 
                                ${index === data.length - 1 ? 'last' : ''}
                            `.trim()}
                        >
                            <SequenceItem item={item} index={index} />
                            {index < data.length - 1 && <div className="sequence-divider" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SequenceHeader = () => (
    <div className="sequence-section-header-row">
        <h3 className="sequence-detail-section-title">운동 순서</h3>
        <span className="sub-guide">운동 자격 부위를 참고해보세요!</span>
    </div>
);

const SequenceItem = ({ item, index }) => (
    <div className="sequence-item">
        <div className="sequence-media-wrapper">
            <div className="sequence-media">
                <img src={item.img} alt={item.title} />
            </div>
            <SequenceTags duration={item.duration} count={item.count} isMobile />
        </div>

        <div className="sequence-content">
            <div className="seq-header">
                <span className="seq-number">{index + 1}</span>
                <h4 className="seq-title">{item.title}</h4>
            </div>
            <a href="#!" className="timeline-link">
                타임라인 {item.timeCode}
            </a>

            <SequenceTags duration={item.duration} count={item.count} />

            <div className="seq-desc-box">
                {item.desc.map((text, i) => (
                    <p key={i} className="seq-text">
                        • {text}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

const SequenceTags = ({ duration, count, isMobile = false }) => (
    <div className={`seq-tags ${isMobile ? 'mobile-tags' : 'pc-tags'}`}>
        <span className="seq-tag">
            <IoTimeOutline /> {duration}
        </span>
        <span className="seq-tag">
            <LuRotateCcw /> {count}
        </span>
    </div>
);

export default ExerciseSequence;
