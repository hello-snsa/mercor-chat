import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { t } from "i18next";

import './sidebar.css'
import { HomeIcon, HomeIconActive, Search, SearchActive, Bookmark, BookmarkActive, Logout } from "../../assets/images";

export default function SideBar() {
  const location = useLocation().pathname;

  const [activeLocation, setActiveLocation] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("MercorUserToken");
    localStorage.removeItem("MercorRefreshToken");

    window.location.href = "/login";
  }

  useEffect(() => {
    setActiveLocation(location);
  }, [location])

  return (
    <div className="flex flex-column flex-justify-space-between height-100 width-100 sidebar" >
      <div className="sidebar-top flex flex-column mt-2r">
        <div className="logo-details">
          <NavLink to="/">
            <img
              src={activeLocation === "/" ? HomeIconActive : HomeIcon}
              alt={t("tHome")}
              className="nav-icon"
            />
            <p className="logo_name">{t("tHome")}</p>
          </NavLink>
        </div>
        <div className="logo-details">
          <NavLink to="/ai-search" >
            <img src={activeLocation === "/ai-search" ? SearchActive : Search} alt={t("tSearchingGlass")} />
            <p className="logo_name">{t('tSearch')}</p>
          </NavLink>
        </div>
        <div className="logo-details">
          <NavLink to="/shortlisted">
            <img src={activeLocation === "/shortlisted" ? BookmarkActive : Bookmark} alt={t('bookmarkSymbol')} />
            <p className="logo_name">{t('tShortlisted')}</p>
          </NavLink>
        </div>
        <div>
        </div>
      </div>
      <div className="sidebar-bottom mb-2r">
        <div>
          <button onClick={() => handleLogout()} className="btn-hidden-outline">
            <img src={Logout} alt={t('tLogout')} />
          </button>

        </div>
      </div>
    </div>
  )
}
