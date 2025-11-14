# AI Crop Recommendation System - API Documentation

Base URL: `http://localhost:8080/api/v1`

## 1. Field Management

### POST /fields
Create a new field

**Request Body:**
```json
{
  "latitude": 28.6139,
  "longitude": 77.2090,
  "area": 2.5,
  "soilPh": 7.0,
  "soilN": 55.0,
  "soilP": 35.0,
  "soilK": 45.0,
  "lastCrop": "wheat",
  "irrigationAvailable": true
}
```

**Response:**
```json
{
  "id": 1,
  "latitude": 28.6139,
  "longitude": 77.2090,
  "area": 2.5,
  "soilPh": 7.0,
  "soilN": 55.0,
  "soilP": 35.0,
  "soilK": 45.0,
  "lastCrop": "wheat",
  "irrigationAvailable": true,
  "createdAt": "2024-01-15T10:30:00"
}
```

### GET /fields/{id}
Get field details

**Response:** Same as POST /fields response

## 2. Crop Recommendations

### POST /recommend
Get crop recommendations for a field

**Request Body:**
```json
{
  "fieldId": 1,
  "preferences": {
    "maximize": "profit",
    "sustainability_weight": 0.3
  }
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "crop": "rice",
      "suitabilityScore": 0.85,
      "expectedYield": 4.2,
      "expectedProfit": 25600.0,
      "sustainabilityScore": 0.75,
      "explanation": [
        "Optimal soil pH (7.0) for rice",
        "Irrigation availability supports good yield",
        "Adequate nitrogen levels detected",
        "High suitability score: 85.0%"
      ]
    },
    {
      "crop": "wheat",
      "suitabilityScore": 0.78,
      "expectedYield": 3.8,
      "expectedProfit": 36000.0,
      "sustainabilityScore": 0.70,
      "explanation": [...]
    }
  ]
}
```

## 3. Disease Diagnosis

### POST /diagnose
Diagnose crop disease from image

**Request:** multipart/form-data
- `image`: File (image file)

**Response:**
```json
{
  "disease": "Leaf Blight",
  "confidence": 0.78,
  "treatment": "Apply fungicide containing copper-based compounds. Remove affected leaves."
}
```

## ML Service Endpoints

Base URL: `http://localhost:8000`

### GET /health
Check service health

**Response:**
```json
{
  "status": "healthy",
  "models_loaded": {
    "crop_model": true,
    "disease_model": false
  }
}
```

### POST /predict
ML prediction endpoint (called by backend)

**Request Body:**
```json
{
  "latitude": 28.6139,
  "longitude": 77.2090,
  "area": 2.5,
  "soil_ph": 7.0,
  "soil_n": 55.0,
  "soil_p": 35.0,
  "soil_k": 45.0,
  "last_crop": "wheat",
  "irrigation_available": true,
  "preferences": {}
}
```

**Response:** Same as /recommend response format

