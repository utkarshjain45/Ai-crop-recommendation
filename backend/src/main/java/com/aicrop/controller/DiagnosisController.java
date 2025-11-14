package com.aicrop.controller;

import com.aicrop.service.MLService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DiagnosisController {
    private final MLService mlService;

    @PostMapping("/diagnose")
    public ResponseEntity<Map<String, Object>> diagnoseDisease(
            @RequestParam("image") MultipartFile file) throws IOException {
        Map<String, Object> result = mlService.diagnoseDisease(file.getBytes());
        return ResponseEntity.ok(result);
    }
}

