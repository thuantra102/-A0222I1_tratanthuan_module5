package com.example.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
public class SavingBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date openingDay;
    private Date startDay;
    private Integer period;
    private Integer deposit;
    private String reference;
    private Integer interestRate;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
