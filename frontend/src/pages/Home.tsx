import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Sprout, Microscope, TrendingUp, ArrowRight, Sparkles, Shield, Zap, BarChart3, Users, CheckCircle2, Brain, Globe, Leaf, Droplets, Sun } from 'lucide-react'

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

      {/* How It Works Section */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized crop recommendations in just three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold">Enter Field Details</h3>
            <p className="text-muted-foreground">
              Provide your field location, soil properties, and farming preferences
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our AI analyzes your data using machine learning models trained on agricultural data
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold">Get Recommendations</h3>
            <p className="text-muted-foreground">
              Receive detailed crop recommendations with yield estimates and profit projections
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-muted/50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose AgriSmart?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering farmers with data-driven decisions for better harvests
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2">
            <CardHeader>
              <Brain className="w-8 h-8 text-primary mb-4" />
              <CardTitle>AI-Powered Insights</CardTitle>
              <CardDescription>
                Advanced machine learning algorithms analyze your field data for accurate recommendations
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <Zap className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Instant Results</CardTitle>
              <CardDescription>
                Get crop recommendations and disease diagnoses in seconds, not days
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Data Privacy</CardTitle>
              <CardDescription>
                Your field data is secure and private. We never share your information
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <Globe className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Multilingual</CardTitle>
              <CardDescription>
                Available in multiple languages to serve farmers across different regions
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Active Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Fields Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Key Features Detail */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Agricultural Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for smart farming in one platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Soil Analysis</CardTitle>
              </div>
              <CardDescription className="text-base">
                Get detailed insights about your soil's pH, nitrogen, phosphorus, and potassium levels. 
                Our system provides recommendations based on comprehensive soil health metrics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>pH level analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>NPK nutrient testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Organic matter assessment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Water Management</CardTitle>
              </div>
              <CardDescription className="text-base">
                Optimize your irrigation strategy with AI-powered water requirement calculations. 
                Save water while maximizing crop yield.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Irrigation scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Water requirement estimation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Rainfall prediction</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Weather Integration</CardTitle>
              </div>
              <CardDescription className="text-base">
                Real-time weather data integration helps you plan your farming activities. 
                Get alerts for adverse weather conditions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>7-day weather forecast</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Temperature monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Rainfall predictions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Market Insights</CardTitle>
              </div>
              <CardDescription className="text-base">
                Make informed decisions with market price trends and profit projections. 
                Know when to sell for maximum returns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Current market prices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Profit projections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Price trend analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of farmers who are already using AgriSmart to make better decisions and increase their yields
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link to="/field/new">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/diagnose">
              <Button size="lg" variant="outline" className="gap-2">
                Try Disease Detection
                <Microscope className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

