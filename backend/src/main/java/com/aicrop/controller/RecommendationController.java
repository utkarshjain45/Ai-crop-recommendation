package com.aicrop.controller;

import com.aicrop.dto.RecommendationRequest;
import com.aicrop.dto.RecommendationResponse;
import com.aicrop.dto.RecommendationDTO;
import com.aicrop.model.Field;
import com.aicrop.model.Recommendation;
import com.aicrop.repository.FieldRepository;
import com.aicrop.repository.RecommendationRepository;
import com.aicrop.service.MLService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RecommendationController {
    private final MLService mlService;
    private final FieldRepository fieldRepository;
    private final RecommendationRepository recommendationRepository;
    private final ObjectMapper objectMapper;

    @PostMapping("/recommend")
    public ResponseEntity<RecommendationResponse> getRecommendations(
            @RequestBody RecommendationRequest request) {
        Field field = fieldRepository.findById(request.getFieldId())
                .orElseThrow(() -> new RuntimeException("Field not found"));

        Map<String, Object> mlResponse = mlService.getRecommendations(
                field, request.getPreferences());

        RecommendationResponse response = new RecommendationResponse();
        List<RecommendationDTO> recommendations = new ArrayList<>();

        @SuppressWarnings("unchecked")
        List<Map<String, Object>> recs = (List<Map<String, Object>>) mlResponse.get("recommendations");

        for (Map<String, Object> rec : recs) {
            RecommendationDTO dto = new RecommendationDTO();
            dto.setCrop((String) rec.get("crop"));
            dto.setSuitabilityScore(((Number) rec.get("suitability_score")).doubleValue());
            dto.setExpectedYield(((Number) rec.get("expected_yield")).doubleValue());
            dto.setExpectedProfit(((Number) rec.get("expected_profit")).doubleValue());
            dto.setSustainabilityScore(((Number) rec.get("sustainability_score")).doubleValue());
            dto.setExplanation((List<String>) rec.get("explanation"));

            // Save to database
            Recommendation recommendation = new Recommendation();
            recommendation.setField(field);
            recommendation.setCrop(dto.getCrop());
            recommendation.setSuitabilityScore(dto.getSuitabilityScore());
            recommendation.setExpectedYield(dto.getExpectedYield());
            recommendation.setExpectedProfit(dto.getExpectedProfit());
            recommendation.setSustainabilityScore(dto.getSustainabilityScore());
            try {
                recommendation.setExplanation(objectMapper.writeValueAsString(dto.getExplanation()));
            } catch (Exception e) {
                recommendation.setExplanation("[]");
            }
            recommendationRepository.save(recommendation);

            recommendations.add(dto);
        }

        response.setRecommendations(recommendations);
        return ResponseEntity.ok(response);
    }
}

