import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import VideoPage from './pages/video/VideoPage';
import DietPage from './pages/diet/DietPage';
import VideoDetailPage from './pages/video/VideoDetailPage';
import './index.css';
import MainLayout from './layouts/MainLayout';
import VideoLayout from './layouts/VideoLayout';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/diet" element={<DietPage />} />
                    </Route>

                    <Route path="/video" element={<VideoLayout />}>
                        <Route index element={<VideoPage />} />
                        <Route path="1" element={<VideoDetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
