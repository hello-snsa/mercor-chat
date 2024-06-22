import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  hi: { nativeName: 'हिंदी' },
}

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')

  const handleChange = ({ target }: any) => {
    const lang = target.value
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      {t('t1')}
      <select value={lang} onChange={handleChange} className="form-select">
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng}>
            {lngs[lng as keyof typeof lngs].nativeName}
          </option>
        ))}
      </select>
    </div>
  )
}
