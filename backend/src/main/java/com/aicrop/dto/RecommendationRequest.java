package com.aicrop.dto;

import lombok.Data;
import java.util.Map;

@Data
public class RecommendationRequest {
    private Long fieldId;
    private Map<String, Object> preferences;
}

