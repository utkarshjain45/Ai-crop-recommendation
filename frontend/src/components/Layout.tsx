import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            🌾 AI Crop Advisor
          </Link>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => changeLanguage('en')}
            >
              EN
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => changeLanguage('hi')}
            >
              HI
            </Button>
            <Link to="/field/new">
              <Button>{t('nav.newField')}</Button>
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

