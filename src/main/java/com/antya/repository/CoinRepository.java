package com.antya.repository;

import com.antya.domain.Coin;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Coin entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CoinRepository extends JpaRepository<Coin, Long> {

}
