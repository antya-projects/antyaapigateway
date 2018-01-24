package com.antya.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A CoinAttributes.
 */
@Entity
@Table(name = "coin_attributes")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CoinAttributes implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "min_confirmation")
    private Integer minConfirmation;

    @Column(name = "txn_fees", precision=10, scale=2)
    private BigDecimal txnFees;

    @OneToMany(mappedBy = "coinAttributes")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Coin> coins = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getMinConfirmation() {
        return minConfirmation;
    }

    public CoinAttributes minConfirmation(Integer minConfirmation) {
        this.minConfirmation = minConfirmation;
        return this;
    }

    public void setMinConfirmation(Integer minConfirmation) {
        this.minConfirmation = minConfirmation;
    }

    public BigDecimal getTxnFees() {
        return txnFees;
    }

    public CoinAttributes txnFees(BigDecimal txnFees) {
        this.txnFees = txnFees;
        return this;
    }

    public void setTxnFees(BigDecimal txnFees) {
        this.txnFees = txnFees;
    }

    public Set<Coin> getCoins() {
        return coins;
    }

    public CoinAttributes coins(Set<Coin> coins) {
        this.coins = coins;
        return this;
    }

    public CoinAttributes addCoin(Coin coin) {
        this.coins.add(coin);
        coin.setCoinAttributes(this);
        return this;
    }

    public CoinAttributes removeCoin(Coin coin) {
        this.coins.remove(coin);
        coin.setCoinAttributes(null);
        return this;
    }

    public void setCoins(Set<Coin> coins) {
        this.coins = coins;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CoinAttributes coinAttributes = (CoinAttributes) o;
        if (coinAttributes.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), coinAttributes.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CoinAttributes{" +
            "id=" + getId() +
            ", minConfirmation=" + getMinConfirmation() +
            ", txnFees=" + getTxnFees() +
            "}";
    }
}
