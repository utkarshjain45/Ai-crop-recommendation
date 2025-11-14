import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { recommendationService } from '@/services/recommendationService'
import { useTranslation } from 'react-i18next'

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
    return <div className="text-center">{t('common.loading')}</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t('recommendations.title')}</h1>
      <div className="grid gap-6">
        {recommendations.map((rec, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{rec.crop}</span>
                <span className="text-lg text-primary">
                  Score: {(rec.suitabilityScore * 100).toFixed(1)}%
                </span>
              </CardTitle>
              <CardDescription>
                {t('recommendations.expectedYield')}: {rec.expectedYield.toFixed(2)} tons/ha
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t('recommendations.profit')}</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{rec.expectedProfit.toFixed(2)}/ha
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('recommendations.sustainability')}</p>
                  <p className="text-2xl font-bold">
                    {(rec.sustainabilityScore * 100).toFixed(0)}%
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">{t('recommendations.why')}</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {rec.explanation.map((exp, i) => (
                    <li key={i}>{exp}</li>
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

