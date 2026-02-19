import React from 'react';
import './DietPage.css';

import DietStats from '../../components/dietpage/DietStats';
import DietRecipes from '../../components/dietpage/DietRecipes';
import DietBanner from '../../components/dietpage/DietBanner';
import DietClips from '../../components/dietpage/DietClips';

import { todayStats, monthlyStats } from '../../components/dietpage/data/statsData';

const DietPage = () => {
    return (
        <div className="diet-page-container">
            {/* 1. 통계 블록 ! */}
            <DietStats today={todayStats} monthly={monthlyStats} />

            {/* 2. 레시피 블록 */}
            <DietRecipes />

            {/* 3. 배너 블록 */}
            <DietBanner />

            {/* 4. 클립 블록 */}
            <DietClips />
        </div>
    );
};

export default DietPage;
