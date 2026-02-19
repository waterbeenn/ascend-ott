import MainVisual from '../../components/hompage/MainVisual';
import SectionLayout from '../../components/hompage/SectionLayout';
import { workoutData } from '../../components/hompage/data/workoutData';
import { dietData } from '../../components/hompage/data/dietData';
import { storeData } from '../../components/hompage/data/storeData';
import { infoData } from '../../components/hompage/data/infoData';
import { fnqData } from '../../components/hompage/data/fnqData';
import WorkoutSwiper from './../../components/hompage/WorkoutSwiper';
import DietSection from './../../components/hompage/DietSection';
import StoreSection from './../../components/hompage/StoreSection';
import InfoSection from '../../components/hompage/InfoSection';
import FaqList from '../../components/hompage/FaqList';

const Homepage = () => {
    return (
        <>
            <MainVisual />
            {/* 운동 */}
            <SectionLayout
                category="영상"
                title="쉽게 찾아보는 운동"
                description="실시간 운동량과 시간, 소모 칼로리를 확인하면서 끝까지 운동해요."
            >
                <WorkoutSwiper data={workoutData} />
            </SectionLayout>
            {/* 식단 */}
            <SectionLayout
                category="식단"
                title="맞춤형 식단까지 한 번에"
                description={`다양한 콘텐츠는 물론, AI 맞춤 식단 기능을 통해 나에게 꼭 맞는 한 끼를 완성해 보세요.`}
            >
                <DietSection data={dietData} />
            </SectionLayout>
            {/* 스토어 */}
            <SectionLayout
                category="스토어"
                title="영상 속 상품들"
                description="운동에 필요한 다양한 물품부터 프레시한 푸드까지 한 번에 쇼핑해 보세요."
            >
                <StoreSection data={storeData} />
            </SectionLayout>
            <SectionLayout
                category="All in One"
                title="어센드를 구독해야 하는 이유"
                description="왜 지금, 이 서비스를 선택해야 할까요?"
            >
                <InfoSection data={infoData} />
            </SectionLayout>
            <SectionLayout category="FnQ" title="자주 묻는 질문">
                <FaqList data={fnqData} />
            </SectionLayout>
        </>
    );
};

export default Homepage;
