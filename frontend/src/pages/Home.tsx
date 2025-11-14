import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Sprout, Microscope, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="text-center space-y-6 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Agriculture Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link to="/field/new">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/diagnose">
              <Button size="lg" variant="outline" className="gap-2">
                Diagnose Disease
                <Microscope className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Sprout className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">{t('home.features.cropRecommendation.title')}</CardTitle>
            <CardDescription className="text-base mt-2">{t('home.features.cropRecommendation.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/field/new">
              <Button className="w-full group-hover:bg-primary/90 transition-colors">
                {t('home.getStarted')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Microscope className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">{t('home.features.diseaseDetection.title')}</CardTitle>
            <CardDescription className="text-base mt-2">{t('home.features.diseaseDetection.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/diagnose">
              <Button className="w-full" variant="outline">
                {t('home.diagnose')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">{t('home.features.yieldForecast.title')}</CardTitle>
            <CardDescription className="text-base mt-2">{t('home.features.yieldForecast.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Coming soon with advanced analytics
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

