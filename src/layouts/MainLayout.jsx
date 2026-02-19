import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const TABLET_BREAKPOINT = 892;

const MainLayout = () => {
  const location = useLocation();
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);

  const closeGlobalDrawer = () => setIsGlobalOpen(false);
  const openGlobalDrawer = () => setIsGlobalOpen(true);

  useEffect(() => {
    closeGlobalDrawer();
  }, [location.pathname]);

  useEffect(() => {
    if (!isGlobalOpen) return undefined;
    const handleEsc = (event) => {
      if (event.key === "Escape") closeGlobalDrawer();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isGlobalOpen]);

  useEffect(() => {
    if (!isGlobalOpen || window.innerWidth > TABLET_BREAKPOINT) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isGlobalOpen]);

  return (
    <>
      <Header showHamburger onHamburgerClick={openGlobalDrawer} />

      <button
        type="button"
        className={`global-overlay ${isGlobalOpen ? "global-overlay--visible" : ""}`}
        onClick={closeGlobalDrawer}
        aria-label="네비게이션 메뉴 닫기"
        aria-hidden={!isGlobalOpen}
        tabIndex={isGlobalOpen ? 0 : -1}
      />

      <aside
        id="global-drawer"
        className={`global-drawer ${isGlobalOpen ? "global-drawer--open" : ""}`}
      >
        <button
          type="button"
          className="global-drawer__close"
          onClick={closeGlobalDrawer}
          aria-label="네비게이션 메뉴 닫기"
        >
          ×
        </button>
        <nav className="global-drawer__nav">
          <ul>
            <li>
              <Link to="/" onClick={closeGlobalDrawer}>
                홈
              </Link>
            </li>
            <li>
              <Link to="/video" onClick={closeGlobalDrawer}>
                영상
              </Link>
            </li>
            <li>
              <Link to="/diet" onClick={closeGlobalDrawer}>
                식단
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
