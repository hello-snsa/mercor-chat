import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const handleChange = (language) => {
    i18n.changeLanguage(language)
    return navigate(currentPath);
  }

  return (
    <div className='languageSwitcher'>
      <select onChange={(event) => handleChange(event.target.value)} className="lang-selector">
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  )
}
