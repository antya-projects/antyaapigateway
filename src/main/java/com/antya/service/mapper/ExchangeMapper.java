package com.antya.service.mapper;

import com.antya.domain.*;
import com.antya.service.dto.ExchangeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Exchange and its DTO ExchangeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ExchangeMapper extends EntityMapper<ExchangeDTO, Exchange> {



    default Exchange fromId(Long id) {
        if (id == null) {
            return null;
        }
        Exchange exchange = new Exchange();
        exchange.setId(id);
        return exchange;
    }
}
