import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslation } from 'react-i18next'
import { fieldService } from '@/services/fieldService'

export function FieldForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    area: '',
    soilPh: '',
    soilN: '',
    soilP: '',
    soilK: '',
    lastCrop: '',
    irrigationAvailable: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const field = await fieldService.createField(formData)
      navigate(`/recommendations/${field.id}`)
    } catch (error) {
      console.error('Error creating field:', error)
      alert('Failed to create field. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{t('fieldForm.title')}</CardTitle>
        <CardDescription>{t('fieldForm.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="latitude">{t('fieldForm.latitude')}</Label>
              <Input
                id="latitude"
                type="number"
                step="any"
                required
                value={formData.latitude}
                onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="longitude">{t('fieldForm.longitude')}</Label>
              <Input
                id="longitude"
                type="number"
                step="any"
                required
                value={formData.longitude}
                onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="area">{t('fieldForm.area')} (hectares)</Label>
            <Input
              id="area"
              type="number"
              step="any"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="soilPh">pH</Label>
              <Input
                id="soilPh"
                type="number"
                step="any"
                min="0"
                max="14"
                value={formData.soilPh}
                onChange={(e) => setFormData({ ...formData, soilPh: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="soilN">N (kg/ha)</Label>
              <Input
                id="soilN"
                type="number"
                step="any"
                value={formData.soilN}
                onChange={(e) => setFormData({ ...formData, soilN: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="soilP">P (kg/ha)</Label>
              <Input
                id="soilP"
                type="number"
                step="any"
                value={formData.soilP}
                onChange={(e) => setFormData({ ...formData, soilP: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="soilK">K (kg/ha)</Label>
            <Input
              id="soilK"
              type="number"
              step="any"
              value={formData.soilK}
              onChange={(e) => setFormData({ ...formData, soilK: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="lastCrop">{t('fieldForm.lastCrop')}</Label>
            <Input
              id="lastCrop"
              value={formData.lastCrop}
              onChange={(e) => setFormData({ ...formData, lastCrop: e.target.value })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="irrigation"
              checked={formData.irrigationAvailable}
              onChange={(e) => setFormData({ ...formData, irrigationAvailable: e.target.checked })}
            />
            <Label htmlFor="irrigation">{t('fieldForm.irrigationAvailable')}</Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t('common.loading') : t('fieldForm.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

