import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import {
  MdOutlineSubscriptions,
  MdFavoriteBorder,
  MdThumbUpOffAlt,
  MdOutlinePlaylistPlay,
} from "react-icons/md";

const Sidebar = ({
  className = "",
  onNavigate,
  onClose,
  id,
  showPrimaryNav = false,
}) => {
  const [activeMenu, setActiveMenu] = useState("홈");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (onNavigate) onNavigate();
  };

  return (
    <aside id={id} className={`sidebar ${className}`.trim()}>
      <button
        type="button"
        className="sidebar__close"
        onClick={onClose}
        aria-label="사이드 메뉴 닫기"
      >
        ×
      </button>

      {showPrimaryNav && (
        <>
          <nav className="sidebar-primary-nav">
            <ul>
              <li>
                <Link to="/" onClick={onNavigate}>
                  홈
                </Link>
              </li>
              <li>
                <Link to="/video" onClick={onNavigate}>
                  영상
                </Link>
              </li>
              <li>
                <Link to="/diet" onClick={onNavigate}>
                  식단
                </Link>
              </li>
            </ul>
          </nav>
          <hr className="sidebar-divider" />
        </>
      )}

      <nav>
        <ul>
          <li
            className={activeMenu === "홈" ? "active" : ""}
            onClick={() => handleMenuClick("홈")}
          >
            <HiOutlineHome /> <span>홈</span>
          </li>
          <li
            className={activeMenu === "구독" ? "active" : ""}
            onClick={() => handleMenuClick("구독")}
          >
            <MdOutlineSubscriptions /> <span>구독</span>
          </li>
          <li
            className={activeMenu === "찜한 동영상" ? "active" : ""}
            onClick={() => handleMenuClick("찜한 동영상")}
          >
            <MdFavoriteBorder /> <span>찜한 동영상</span>
          </li>
          <li
            className={activeMenu === "좋아요 표시된 동영상" ? "active" : ""}
            onClick={() => handleMenuClick("좋아요 표시된 동영상")}
          >
            <MdThumbUpOffAlt /> <span>좋아요 표시된 동영상</span>
          </li>
          <li
            className={activeMenu === "내 재생목록" ? "active" : ""}
            onClick={() => handleMenuClick("내 재생목록")}
          >
            <MdOutlinePlaylistPlay /> <span>내 재생목록</span>
          </li>
        </ul>
        <hr />
      </nav>
    </aside>
  );
};

export default Sidebar;
