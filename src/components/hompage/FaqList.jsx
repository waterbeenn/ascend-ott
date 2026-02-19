import FaqItem from './FaqItem';

const FaqList = ({ data }) => {
    return (
        <div className="faq-container">
            {data.map((item) => (
                <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FaqList;
