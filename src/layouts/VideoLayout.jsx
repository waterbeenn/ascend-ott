import { createContext, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Sidebar from "../components/videopage/Sidebar";
import "../pages/video/VideoPage.css";

const TABLET_BREAKPOINT = 892;
export const VideoDrawerContext = createContext(null);

const VideoLayout = () => {
  const location = useLocation();
  const [isVideoDrawerOpen, setIsVideoDrawerOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const closeAllDrawers = () => setIsVideoDrawerOpen(false);
  const openVideoDrawer = () => setIsVideoDrawerOpen(true);
  const closeVideoDrawer = () => setIsVideoDrawerOpen(false);

  useEffect(() => {
    closeAllDrawers();
  }, [location.pathname]);

  useEffect(() => {
    const syncViewport = () => {
      const compact = window.innerWidth <= TABLET_BREAKPOINT;
      setIsCompact(compact);
      if (!compact) closeAllDrawers();
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!isVideoDrawerOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeAllDrawers();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoDrawerOpen]);

  useEffect(() => {
    if (!isVideoDrawerOpen || window.innerWidth > TABLET_BREAKPOINT) {
      return undefined;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVideoDrawerOpen]);

  const contextValue = useMemo(
    () => ({
      isVideoDrawerOpen,
      openVideoDrawer,
      closeVideoDrawer,
    }),
    [isVideoDrawerOpen]
  );

  return (
    <VideoDrawerContext.Provider value={contextValue}>
      <Header />

      <div className="video-layout">
        <button
          type="button"
          className={`video-overlay ${isVideoDrawerOpen ? "video-overlay--visible" : ""}`}
          onClick={closeVideoDrawer}
          aria-label="영상 카테고리 메뉴 닫기"
          aria-hidden={!isVideoDrawerOpen}
          tabIndex={isVideoDrawerOpen ? 0 : -1}
        />

        <Sidebar
          id="video-sidebar"
          className={`video-drawer ${isVideoDrawerOpen ? "video-drawer--open" : ""}`}
          onNavigate={closeVideoDrawer}
          onClose={closeVideoDrawer}
          showPrimaryNav={isCompact}
        />

        <div className="video-layout__content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </VideoDrawerContext.Provider>
  );
};

export default VideoLayout;
