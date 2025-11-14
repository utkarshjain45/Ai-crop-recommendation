import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FieldForm } from './pages/FieldForm'
import { Recommendations } from './pages/Recommendations'
import { DiseaseDiagnosis } from './pages/DiseaseDiagnosis'
import { Layout } from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/field/new" element={<FieldForm />} />
          <Route path="/recommendations/:fieldId" element={<Recommendations />} />
          <Route path="/diagnose" element={<DiseaseDiagnosis />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

