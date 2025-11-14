package com.aicrop.dto;

import lombok.Data;
import java.util.List;

@Data
public class RecommendationResponse {
    private List<RecommendationDTO> recommendations;
}

