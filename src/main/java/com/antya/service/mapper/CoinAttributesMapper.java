package com.antya.service.mapper;

import com.antya.domain.*;
import com.antya.service.dto.CoinAttributesDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity CoinAttributes and its DTO CoinAttributesDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CoinAttributesMapper extends EntityMapper<CoinAttributesDTO, CoinAttributes> {


    @Mapping(target = "coins", ignore = true)
    CoinAttributes toEntity(CoinAttributesDTO coinAttributesDTO);

    default CoinAttributes fromId(Long id) {
        if (id == null) {
            return null;
        }
        CoinAttributes coinAttributes = new CoinAttributes();
        coinAttributes.setId(id);
        return coinAttributes;
    }
}
