import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { diagnosisService } from '@/services/diagnosisService'
import { useTranslation } from 'react-i18next'

export function DiseaseDiagnosis() {
  const { t } = useTranslation()
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    try {
      const diagnosis = await diagnosisService.diagnoseDisease(file)
      setResult(diagnosis)
    } catch (error) {
      console.error('Error diagnosing disease:', error)
      alert('Failed to diagnose disease. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('diagnosis.title')}</CardTitle>
          <CardDescription>{t('diagnosis.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="image">{t('diagnosis.uploadImage')}</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>
            {file && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading || !file}>
              {loading ? t('common.loading') : t('diagnosis.analyze')}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>{t('diagnosis.result')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                {t('diagnosis.disease')}: {result.disease}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('diagnosis.confidence')}: {(result.confidence * 100).toFixed(1)}%
              </p>
              <div className="mt-4">
                <p className="font-semibold">{t('diagnosis.treatment')}</p>
                <p className="text-sm">{result.treatment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

