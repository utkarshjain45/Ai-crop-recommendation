package com.aicrop.controller;

import com.aicrop.dto.FieldDTO;
import com.aicrop.model.Field;
import com.aicrop.service.FieldService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/fields")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FieldController {
    private final FieldService fieldService;

    @PostMapping
    public ResponseEntity<Field> createField(@RequestBody FieldDTO dto) {
        // For MVP, using default user ID 1
        Field field = fieldService.createField(dto, 1L);
        return ResponseEntity.ok(field);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Field> getField(@PathVariable Long id) {
        Field field = fieldService.getField(id);
        return ResponseEntity.ok(field);
    }
}

