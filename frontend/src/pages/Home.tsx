import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('home.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('home.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🌱 {t('home.features.cropRecommendation.title')}</CardTitle>
            <CardDescription>{t('home.features.cropRecommendation.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/field/new">
              <Button className="w-full">{t('home.getStarted')}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔬 {t('home.features.diseaseDetection.title')}</CardTitle>
            <CardDescription>{t('home.features.diseaseDetection.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/diagnose">
              <Button className="w-full" variant="outline">{t('home.diagnose')}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📊 {t('home.features.yieldForecast.title')}</CardTitle>
            <CardDescription>{t('home.features.yieldForecast.desc')}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

