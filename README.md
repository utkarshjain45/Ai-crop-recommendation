# AI Crop Recommendation System

An ML-powered crop recommendation system for farmers with disease detection capabilities.

## Project Structure

```
AI Crop/
├── frontend/          # React + Tailwind + shadcn/ui
├── backend/           # Spring Boot + JPA
├── ml-service/        # Python FastAPI ML service
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- Java 17+
- Python 3.9+
- PostgreSQL 14+
- Maven 3.8+

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173

### 2. Backend Setup

1. Create PostgreSQL database:
```sql
CREATE DATABASE aicrop;
```

2. Update `backend/src/main/resources/application.properties` with your DB credentials

3. Run backend:
```bash
cd backend
mvn spring-boot:run
```

Backend runs on http://localhost:8080

### 3. ML Service Setup

1. Create virtual environment:
```bash
cd ml-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Generate synthetic data:
```bash
python data/generate_synthetic_data.py
```

4. Train the model (run Jupyter notebook):
```bash
# Open notebooks/train_crop_recommender.ipynb in Jupyter
# Or run the cells to train and save the model
```

5. Run ML service:
```bash
python main.py
```

ML service runs on http://localhost:8000

## Running the Complete System

1. Start PostgreSQL
2. Start ML service: `cd ml-service && python main.py`
3. Start backend: `cd backend && mvn spring-boot:run`
4. Start frontend: `cd frontend && npm run dev`

## API Documentation

See `API_DOCUMENTATION.md` for detailed API endpoints.

## Features

- 🌱 Crop recommendation based on soil, weather, and field conditions
- 🔬 Disease detection from crop images
- 📊 Yield and profit forecasting
- 🌍 Multilingual support (English, Hindi)
- 📱 Responsive web interface

## Technology Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Router
- i18next for internationalization

### Backend
- Spring Boot 3.2
- Spring Data JPA
- PostgreSQL
- Lombok

### ML Service
- FastAPI
- XGBoost
- scikit-learn
- NumPy/Pandas

## Development Notes

- The ML service will use rule-based recommendations if the trained model is not available
- Make sure to train the model using the Jupyter notebook before using ML predictions
- The backend creates a default user (ID: 1) for MVP testing
- Update database credentials in `application.properties` before running

