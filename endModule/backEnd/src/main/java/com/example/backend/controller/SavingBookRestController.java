package com.example.backend.controller;

import com.example.backend.dto.SavingBookDto;
import com.example.backend.model.SavingBook;
import com.example.backend.service.impl.CustomerService;
import com.example.backend.service.impl.SavingBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/savingBook")
@CrossOrigin("http://localhost:4200")
public class SavingBookRestController {
    @Autowired
    SavingBookService savingBookService;
    @GetMapping("list")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(savingBookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> fetchData(@PathVariable Long id) {
        System.out.println(id);
        return new ResponseEntity<>(savingBookService.findById(id),HttpStatus.OK);
    }
    @PostMapping("")
    ResponseEntity<SavingBookDto> saveData(@RequestBody SavingBookDto savingBookDto) {
        return  null;
    }

        @PutMapping("")
        ResponseEntity<?> editData(@RequestBody SavingBookDto savingBookDto) {
            System.out.println(savingBookDto);
            savingBookService.saveFromDTO(savingBookDto);
            return new ResponseEntity<>(HttpStatus.OK);

//            return new ResponseEntity<>(savingBookService.saveFromDTO(savingBookDto), HttpStatus.OK);
        }

        @DeleteMapping("/delete/{id}")
    public void deleteSavingBook(@PathVariable Long id) {
            savingBookService.delete(savingBookService.findById(id));
//        return  new ResponseEntity<>(), HttpStatus.OK);
        }

}
