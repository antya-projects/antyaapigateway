package com.antya.repository;

import com.antya.domain.CoinAttributes;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CoinAttributes entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CoinAttributesRepository extends JpaRepository<CoinAttributes, Long> {

}
