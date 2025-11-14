import pandas as pd
import numpy as np
from pathlib import Path

np.random.seed(42)

n_samples = 5000
data = []

crops = ['wheat', 'rice', 'maize', 'cotton', 'sugarcane', 'potato', 'tomato', 'onion']

for _ in range(n_samples):
    lat = np.random.uniform(8.0, 37.0)
    lon = np.random.uniform(68.0, 97.0)
    soil_ph = np.random.uniform(5.0, 8.5)
    soil_n = np.random.uniform(20.0, 100.0)
    soil_p = np.random.uniform(10.0, 60.0)
    soil_k = np.random.uniform(20.0, 80.0)
    area = np.random.uniform(0.5, 10.0)
    irrigation = np.random.choice([0, 1], p=[0.4, 0.6])
    
    # Rule-based crop assignment
    if soil_ph >= 6.0 and soil_ph <= 7.5 and irrigation == 1:
        if soil_n > 60:
            crop = np.random.choice(['rice', 'wheat', 'maize'], p=[0.4, 0.3, 0.3])
        else:
            crop = np.random.choice(['cotton', 'sugarcane'], p=[0.6, 0.4])
    elif soil_ph < 6.0:
        crop = np.random.choice(['potato', 'tomato'], p=[0.5, 0.5])
    elif irrigation == 0:
        crop = np.random.choice(['wheat', 'cotton'], p=[0.6, 0.4])
    else:
        crop = np.random.choice(crops)
    
    data.append({
        'latitude': lat,
        'longitude': lon,
        'area': area,
        'soil_ph': soil_ph,
        'soil_n': soil_n,
        'soil_p': soil_p,
        'soil_k': soil_k,
        'irrigation_available': irrigation,
        'crop': crop
    })

df = pd.DataFrame(data)
output_dir = Path("data")
output_dir.mkdir(exist_ok=True)
df.to_csv(output_dir / "synthetic_crop_data.csv", index=False)
print(f"Generated {len(df)} samples")
print(f"\nCrop distribution:\n{df['crop'].value_counts()}")

