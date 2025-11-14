import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { diagnosisService } from '@/services/diagnosisService'
import { useTranslation } from 'react-i18next'
import { Upload, Image as ImageIcon, Loader2, AlertCircle, CheckCircle2, ArrowLeft, X } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{t('diagnosis.title')}</h1>
          <p className="text-muted-foreground mt-1">{t('diagnosis.description')}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Upload Image
            </CardTitle>
            <CardDescription>Upload a clear image of the plant leaf for disease diagnosis</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t('diagnosis.uploadImage')}</p>
                <div className="relative">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                  <Label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {file ? (
                      <div className="relative w-full h-full">
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={(e) => {
                            e.preventDefault()
                            setFile(null)
                            setResult(null)
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </>
                    )}
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading || !file}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-4 h-4 mr-2" />
                    {t('diagnosis.analyze')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {t('diagnosis.result')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t('diagnosis.disease')}
                  </p>
                  <span className="px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Detected
                  </span>
                </div>
                <p className="text-2xl font-bold text-primary">{result.disease}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm font-medium">{t('diagnosis.confidence')}</span>
                  <span className="text-lg font-bold">
                    {(result.confidence * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <p className="font-semibold">{t('diagnosis.treatment')}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm leading-relaxed">{result.treatment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!result && !loading && (
          <Card className="border-2 border-dashed">
            <CardContent className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center space-y-2 text-muted-foreground">
                <ImageIcon className="w-12 h-12 mx-auto opacity-50" />
                <p>Upload an image to see diagnosis results here</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

