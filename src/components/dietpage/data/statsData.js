import iconOrange1 from '../../../img/dietpage/icon_orange1.png';
import iconOrange2 from '../../../img/dietpage/icon_orange2.png';
import iconOrange3 from '../../../img/dietpage/icon_orange3.png';
import iconOrange4 from '../../../img/dietpage/icon_orange4.png';

import iconBlue1 from '../../../img/dietpage/icon_blue1.png';
import iconBlue2 from '../../../img/dietpage/icon_blue2.png';
import iconBlue3 from '../../../img/dietpage/icon_blue3.png';
import iconBlue4 from '../../../img/dietpage/icon_blue4.png';

export const todayStats = {
    totalKcal: 1234,
    goalKcal: 2200,
    nutrients: [
        { label: '아침 120kcal', color: '#E84700', icon: iconOrange1 },
        { label: '지방 34g', color: '#006FED', icon: iconBlue1 },

        { label: '점심 700kcal', color: '#E84700', icon: iconOrange2 },
        { label: '단백질 60g', color: '#006FED', icon: iconBlue2 },

        { label: '저녁 250kcal', color: '#E84700', icon: iconOrange3 },
        { label: '탄수화물 65g', color: '#006FED', icon: iconBlue3 },

        { label: '간식 75kcal', color: '#E84700', icon: iconOrange4 },
        { label: '물 500ml', color: '#006FED', icon: iconBlue4 },
    ],
};

export const monthlyStats = [
    { date: '11.2', height: '40%', active: false },
    { date: '11.3', height: '80%', active: true }, // 오늘
    { date: '11.4', height: '60%', active: false },
    { date: '11.5', height: '50%', active: false },
    { date: '11.6', height: '65%', active: false },
    { date: '11.7', height: '45%', active: false },
    { date: '11.8', height: '55%', active: false },
];
