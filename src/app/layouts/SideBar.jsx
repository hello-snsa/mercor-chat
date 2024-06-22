import { Link } from "react-router-dom";
import {HomeIcon, Search, Bookmark} from "../../assets/images";
import { t } from "i18next";


export default function SideBar() {
  return (
    <div>
      {/* Home */}
      <div>
        <Link to="/">
          <img src={HomeIcon} alt={t("tHome")} />
          <p>{t("tHome")}</p>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={Search} alt={t("tSearchingGlass")} />
          <p>{t('tSearch')}</p>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={Bookmark} alt={t('bookmarkSymbol')} />
          <p>{t('tBookMark')}</p>
        </Link>
      </div>
      <div>
    </div>
    </div>
  )
}
