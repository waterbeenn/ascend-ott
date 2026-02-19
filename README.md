# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Structure

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── node_modules/  (omitted for brevity)
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── assets/
    │   └── react.svg
    ├── components/
    │   ├── dietpage/
    │   ├── hompage/
    │   │   ├── DietSection.jsx
    │   │   ├── DietSwiper.jsx
    │   │   ├── FaqItem.jsx
    │   │   ├── FaqList.jsx
    │   │   ├── InfoSection.jsx
    │   │   ├── index.css
    │   │   ├── MainVisual.jsx
    │   │   ├── SectionLayout.jsx
    │   │   ├── StoreSection.jsx
    │   │   ├── StoreSwiper.jsx
    │   │   ├── WorkoutSwiper.jsx
    │   │   └── data/
    │   │       ├── dietData.js
    │   │       ├── fnqData.js
    │   │       ├── infoData.js
    │   │       ├── storeData.js
    │   │       └── workoutData.js
    │   ├── videodetail/
    │   └── videopage/
    ├── img/
    │   ├── background.mp4
    │   ├── common-layout/
    │   │   ├── footer-android.png
    │   │   └── footer-iPhone.png
    │   ├── homepage/
    │   │   ├── background.mp4
    │   │   ├── dietImg1.png
    │   │   ├── dietImg2.png
    │   │   ├── dietImg3.png
    │   │   ├── icon1.png
    │   │   ├── icon2.png
    │   │   ├── icon3.png
    │   │   ├── icon4.png
    │   │   ├── icon_off.png
    │   │   ├── icon_on.png
    │   │   ├── main_video_frame1.png
    │   │   ├── main_video_frame2.png
    │   │   ├── storeImg1.png
    │   │   └── storeImg2.png
    │   └── videopage/
    ├── index.css
    ├── layout/
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   └── index.css
    ├── main.jsx
    ├── pages/
    │   ├── diet/
    │   │   └── DietPage.jsx
    │   ├── home/
    │   │   └── Homepage.jsx
    │   └── video/
    │       ├── VideoDetailPage.jsx
    │       └── VideoPage.jsx
    └── style/
        └── fonts/
            ├── Pretendard-Black.woff2
            ├── Pretendard-Bold.woff2
            ├── Pretendard-ExtraBold.woff2
            ├── Pretendard-ExtraLight.woff2
            ├── Pretendard-Light.woff2
            ├── Pretendard-Medium.woff2
            ├── Pretendard-Regular.woff2
            ├── Pretendard-SemiBold.woff2
            └── Pretendard-Thin.woff2
```
