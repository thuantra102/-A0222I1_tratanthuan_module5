package com.example.backend.controller;

import com.example.backend.service.impl.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerRestController {
    @Autowired
    CustomerService customerService;
    @GetMapping("list")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(customerService.findAll(), HttpStatus.OK);
    }



}
