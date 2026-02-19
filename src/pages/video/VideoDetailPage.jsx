import MainVideo from '../../components/videodetail/MainVideo';
import RelatedProducts from '../../components/videodetail/RelatedProducts';
import ExerciseSequence from '../../components/videodetail/ExerciseSequence';
import RecommendedVideos from '../../components/videodetail/RecommendedVideos';
import {
    productData,
    sequenceData,
    recommendData,
} from '../../components/videodetail/data/videoDetailData';
import './VideoDetail.css';

const VideoDetailPage = () => {
    return (
        <div className="video-detail-page">
            <MainVideo />

            <div className="detail-content-wrapper">
                <RelatedProducts data={productData} />

                <ExerciseSequence data={sequenceData} />

                <div className="divider-line" style={{ margin: '40px 0' }} />

                <RecommendedVideos data={recommendData} />
            </div>
        </div>
    );
};

export default VideoDetailPage;
