package com.aicrop.dto;

import lombok.Data;

@Data
public class FieldDTO {
    private Double latitude;
    private Double longitude;
    private Double area;
    private Double soilPh;
    private Double soilN;
    private Double soilP;
    private Double soilK;
    private String lastCrop;
    private Boolean irrigationAvailable;
}

