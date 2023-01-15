package com.example.backend.dto;

import com.example.backend.model.Customer;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;

public class SavingBookDto {
    private Long id;

    private Date openingDay;
    private Date startDay;
    private Integer period;
    private Integer deposit;
    private String reference;
    private Integer interestRate;
    private Long customerId;

    public SavingBookDto() {
    }

    public SavingBookDto(Long id, Date openingDay, Date startDay, Integer period, Integer deposit, String reference, Integer interestRate, Long customerId) {
        this.id = id;
        this.openingDay = openingDay;
        this.startDay = startDay;
        this.period = period;
        this.deposit = deposit;
        this.reference = reference;
        this.interestRate = interestRate;
        this.customerId = customerId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOpeningDay() {
        return openingDay;
    }

    public void setOpeningDay(Date openingDay) {
        this.openingDay = openingDay;
    }

    public Date getStartDay() {
        return startDay;
    }

    public void setStartDay(Date startDay) {
        this.startDay = startDay;
    }

    public Integer getPeriod() {
        return period;
    }

    public void setPeriod(Integer period) {
        this.period = period;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public void setDeposit(Integer deposit) {
        this.deposit = deposit;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Integer getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Integer interestRate) {
        this.interestRate = interestRate;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}
