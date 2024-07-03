import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { t } from "i18next";

import './sidebar.css'
import { HomeIcon, HomeIconActive, Search, SearchActive, Bookmark, BookmarkActive, Logout } from "../../assets/images";

export default function SideBar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [activeLocation, setActiveLocation] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("MercorUserToken");
    localStorage.removeItem("MercorRefreshToken");
    navigate("/login");
  }

  useEffect(() => {
    setActiveLocation(location);
  }, [location]);

  return (
    <div className="sidebar" >
      <div className="sidebar_top">
        <NavLink to="/" className="logo-details">
          <img
            src={activeLocation === "/" ? HomeIconActive : HomeIcon}
            alt={t("tHome")}
            className="nav-icon"
          />
          <p className="logo_name">{t("tHome")}</p>
        </NavLink>
        <NavLink to="/ai-search" className="logo-details">
          <img src={activeLocation === "/ai-search" ? SearchActive : Search} alt={t("tSearchingGlass")} />
          <p className="logo_name">{t('tSearch')}</p>
        </NavLink>
        <NavLink to="/shortlisted" className="logo-details">
          <img src={activeLocation === "/shortlisted" ? BookmarkActive : Bookmark} alt={t('bookmarkSymbol')} />
          <p className="logo_name">{t('tShortlisted')}</p>
        </NavLink>
        <div>
        </div>
      </div>
      <div className="sidebar_bottom mb-2r">
        <button onClick={() => handleLogout()} className="btn-hidden-outline">
          <img src={Logout} alt={t('tLogout')} />
        </button>
      </div>
    </div>
  )
}
