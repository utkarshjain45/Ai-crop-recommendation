import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { recommendationService } from '@/services/recommendationService'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, TrendingUp, DollarSign, Leaf, Sparkles, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Recommendation {
  crop: string
  suitabilityScore: number
  expectedYield: number
  expectedProfit: number
  sustainabilityScore: number
  explanation: string[]
}

export function Recommendations() {
  const { fieldId } = useParams()
  const { t } = useTranslation()
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (fieldId) {
      fetchRecommendations()
    }
  }, [fieldId])

  const fetchRecommendations = async () => {
    try {
      const data = await recommendationService.getRecommendations(fieldId!)
      setRecommendations(data.recommendations)
    } catch (error) {
      console.error('Error fetching recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-muted-foreground">{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            {t('recommendations.title')}
          </h1>
          <p className="text-muted-foreground mt-1">
            Based on your field data, here are the best crop recommendations
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {recommendations.map((rec, idx) => (
          <Card 
            key={idx} 
            className={`border-2 transition-all hover:shadow-lg ${
              idx === 0 ? 'border-primary/50 bg-primary/5' : 'hover:border-primary/30'
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">{rec.crop}</CardTitle>
                    {idx === 0 && (
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Best Match
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {t('recommendations.expectedYield')}: <span className="font-semibold text-foreground">{rec.expectedYield.toFixed(2)} tons/ha</span>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Suitability</div>
                  <div className="text-3xl font-bold text-primary">
                    {(rec.suitabilityScore * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <p className="text-sm font-medium text-muted-foreground">{t('recommendations.profit')}</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{rec.expectedProfit.toFixed(2)}/ha
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">{t('recommendations.sustainability')}</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {(rec.sustainabilityScore * 100).toFixed(0)}%
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">Yield Potential</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {rec.expectedYield.toFixed(1)}t/ha
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {t('recommendations.why')}
                </p>
                <ul className="space-y-2">
                  {rec.explanation.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

