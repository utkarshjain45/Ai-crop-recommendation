package com.aicrop.dto;

import lombok.Data;
import java.util.List;

@Data
public class RecommendationDTO {
    private String crop;
    private Double suitabilityScore;
    private Double expectedYield;
    private Double expectedProfit;
    private Double sustainabilityScore;
    private List<String> explanation;
}

