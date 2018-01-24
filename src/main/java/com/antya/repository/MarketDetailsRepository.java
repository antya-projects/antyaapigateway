package com.antya.repository;

import com.antya.domain.MarketDetails;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the MarketDetails entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MarketDetailsRepository extends JpaRepository<MarketDetails, Long> {

}
