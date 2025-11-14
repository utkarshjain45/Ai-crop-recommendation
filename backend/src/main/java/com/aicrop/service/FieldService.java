package com.aicrop.service;

import com.aicrop.dto.FieldDTO;
import com.aicrop.model.Field;
import com.aicrop.model.User;
import com.aicrop.repository.FieldRepository;
import com.aicrop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class FieldService {
    private final FieldRepository fieldRepository;
    private final UserRepository userRepository;

    @Transactional
    public Field createField(FieldDTO dto, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Field field = new Field();
        field.setUser(user);
        field.setLatitude(dto.getLatitude());
        field.setLongitude(dto.getLongitude());
        field.setArea(dto.getArea());
        field.setSoilPh(dto.getSoilPh());
        field.setSoilN(dto.getSoilN());
        field.setSoilP(dto.getSoilP());
        field.setSoilK(dto.getSoilK());
        field.setLastCrop(dto.getLastCrop());
        field.setIrrigationAvailable(dto.getIrrigationAvailable());

        return fieldRepository.save(field);
    }

    public Field getField(Long id) {
        return fieldRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Field not found"));
    }
}

