package com.aicrop.service;

import com.aicrop.model.Field;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MLService {
    private final RestTemplate restTemplate;

    @Value("${ml.service.url:http://localhost:8000}")
    private String mlServiceUrl;

    public Map<String, Object> getRecommendations(Field field, Map<String, Object> preferences) {
        Map<String, Object> request = new HashMap<>();
        request.put("latitude", field.getLatitude());
        request.put("longitude", field.getLongitude());
        request.put("area", field.getArea());
        request.put("soil_ph", field.getSoilPh());
        request.put("soil_n", field.getSoilN());
        request.put("soil_p", field.getSoilP());
        request.put("soil_k", field.getSoilK());
        request.put("last_crop", field.getLastCrop());
        request.put("irrigation_available", field.getIrrigationAvailable());
        request.put("preferences", preferences);

        return restTemplate.postForObject(
                mlServiceUrl + "/predict",
                request,
                Map.class
        );
    }

    public Map<String, Object> diagnoseDisease(byte[] imageBytes) {
        // Implementation for image upload to ML service
        // This would typically use multipart/form-data
        return restTemplate.postForObject(
                mlServiceUrl + "/diagnose",
                imageBytes,
                Map.class
        );
    }
}

