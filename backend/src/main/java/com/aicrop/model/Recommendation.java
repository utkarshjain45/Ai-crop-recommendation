package com.aicrop.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "recommendations")
@Data
public class Recommendation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "field_id")
    private Field field;

    private String crop;
    private Double suitabilityScore;
    private Double expectedYield; // tons/ha
    private Double expectedProfit; // per hectare
    private Double sustainabilityScore;
    private String explanation; // JSON string of explanation points

    private LocalDateTime createdAt;
    private String modelVersion;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}

