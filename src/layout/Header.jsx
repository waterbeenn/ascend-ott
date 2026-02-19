import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { VideoDrawerContext } from "../layouts/VideoLayout";
import "./index.css";

const Header = ({
  showHamburger = false,
  onHamburgerClick,
  hamburgerControls = "global-drawer",
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isBlack = pathname !== "/";
  const isVideoRoute = pathname === "/video" || pathname.startsWith("/video/");
  const videoDrawerContext = useContext(VideoDrawerContext);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const shouldShowGlobalHamburger = showHamburger && !isVideoRoute;
  const shouldShowVideoHamburger = Boolean(isVideoRoute && videoDrawerContext);

  return (
    <div id="header" className={isBlack ? "black" : ""}>
      <div className="inner">
        {shouldShowVideoHamburger ? (
          <button
            type="button"
            className="video-category-btn video-category-btn--visible"
            onClick={videoDrawerContext.openVideoDrawer}
            aria-label="영상 카테고리 메뉴 열기"
            aria-controls="video-sidebar"
          >
            <RxHamburgerMenu />
          </button>
        ) : (
          <button
            type="button"
            className={`header-hamburger-btn ${
              shouldShowGlobalHamburger ? "header-hamburger-btn--visible" : ""
            }`}
            onClick={onHamburgerClick}
            aria-label="네비게이션 메뉴 열기"
            aria-controls={hamburgerControls}
          >
            <RxHamburgerMenu />
          </button>
        )}

        <div className="nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="logo">Ascend</h3>
          </Link>
          <ul>
            <Link to="/">
              <li className={isActive("/") ? "active" : ""}>홈</li>
            </Link>
            <Link to="/video">
              <li className={isActive("/video") ? "active" : ""}>영상</li>
            </Link>
            <Link to="/diet">
              <li className={isActive("/diet") ? "active" : ""}>식단</li>
            </Link>
          </ul>
        </div>

        <div className="users">
          <div className="search">
            <input type="text" placeholder="오늘은 어떤 운동이 좋을까요?" />
            <div>
              <IoIosSearch className="searchIcon" />
            </div>
          </div>
          <div className="user">
            <div>
              <LuUserRound className="profile" />
            </div>
            <div>
              <AiOutlineShopping className="shop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
