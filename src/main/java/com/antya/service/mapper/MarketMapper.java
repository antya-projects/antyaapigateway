package com.antya.service.mapper;

import com.antya.domain.*;
import com.antya.service.dto.MarketDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Market and its DTO MarketDTO.
 */
@Mapper(componentModel = "spring", uses = {CoinMapper.class, ExchangeMapper.class})
public interface MarketMapper extends EntityMapper<MarketDTO, Market> {

    @Mapping(source = "coin.id", target = "coinId")
    @Mapping(source = "exchange.id", target = "exchangeId")
    MarketDTO toDto(Market market);

    @Mapping(source = "coinId", target = "coin")
    @Mapping(source = "exchangeId", target = "exchange")
    Market toEntity(MarketDTO marketDTO);

    default Market fromId(Long id) {
        if (id == null) {
            return null;
        }
        Market market = new Market();
        market.setId(id);
        return market;
    }
}
