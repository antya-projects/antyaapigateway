package com.antya.service.mapper;

import com.antya.domain.*;
import com.antya.service.dto.CoinDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Coin and its DTO CoinDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CoinMapper extends EntityMapper<CoinDTO, Coin> {



    default Coin fromId(Long id) {
        if (id == null) {
            return null;
        }
        Coin coin = new Coin();
        coin.setId(id);
        return coin;
    }
}
