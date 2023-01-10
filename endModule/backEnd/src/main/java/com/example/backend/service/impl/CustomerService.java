package com.example.backend.service.impl;

import com.example.backend.model.Customer;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService implements ICrudService<Customer> {
    @Autowired
    CustomerRepository customerRepository;
    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public void save(Customer customer) {

    }

    @Override
    public void delete(Customer customer) {

    }

    @Override
    public Customer findById(Long id) {
        return null;
    }

    @Override
    public Page<Customer> getAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Customer> getAllWithSearch(Pageable pageable, String valueSearch, Long id) {
        return null;
    }
}
