import { useState } from 'react';
import icon_on from '../../img/homepage/icon_on.png';
import icon_off from '../../img/homepage/icon_off.png';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="faq-question">{question}</h3>
                {/* isOpen 상태에 따라 img1(플러스) 또는 img2(엑스) 표시 */}
                <img src={isOpen ? icon_off : icon_on} alt="toggle" className="faq-toggle-icon" />
            </div>

            {/* isOpen이 true일 때만 설명(answer)이 보임 */}
            {isOpen && (
                <div className="faq-body">
                    <p className="faq-answer">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FaqItem;
