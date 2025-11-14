import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'
import { Sprout, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              <Sprout className="w-6 h-6" />
              <span>AI Crop Advisor</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 items-center">
              <Link to="/">
                <Button
                  variant={isActive('/') ? 'default' : 'ghost'}
                  size="sm"
                >
                  Home
                </Button>
              </Link>
              <Link to="/field/new">
                <Button
                  variant={isActive('/field/new') ? 'default' : 'ghost'}
                  size="sm"
                >
                  {t('nav.newField')}
                </Button>
              </Link>
              <Link to="/diagnose">
                <Button
                  variant={isActive('/diagnose') ? 'default' : 'ghost'}
                  size="sm"
                >
                  Diagnose
                </Button>
              </Link>
              <div className="flex items-center gap-2 ml-4 pl-4 border-l">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="min-w-[3rem]"
                >
                  EN
                </Button>
                <Button
                  variant={i18n.language === 'hi' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('hi')}
                  className="min-w-[3rem]"
                >
                  HI
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive('/') ? 'default' : 'ghost'}
                  className="w-full justify-start"
                >
                  Home
                </Button>
              </Link>
              <Link to="/field/new" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive('/field/new') ? 'default' : 'ghost'}
                  className="w-full justify-start"
                >
                  {t('nav.newField')}
                </Button>
              </Link>
              <Link to="/diagnose" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive('/diagnose') ? 'default' : 'ghost'}
                  className="w-full justify-start"
                >
                  Diagnose
                </Button>
              </Link>
              <div className="flex gap-2 pt-2">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="flex-1"
                >
                  EN
                </Button>
                <Button
                  variant={i18n.language === 'hi' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('hi')}
                  className="flex-1"
                >
                  HI
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
    </div>
  )
}

