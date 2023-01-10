package com.example.backend.service.impl;

import com.example.backend.model.SavingBook;
import com.example.backend.repository.SavingBookRepository;
import com.example.backend.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SavingBookService implements ICrudService<SavingBook> {
    @Autowired
    SavingBookRepository savingBookRepository;
    @Override
    public List<SavingBook> findAll() {
        return savingBookRepository.findAll();
    }

    @Override
    public void save(SavingBook savingBook) {

    }

    @Override
    public void delete(SavingBook savingBook) {

    }

    @Override
    public SavingBook findById(Long id) {
        return savingBookRepository.findById(id).orElse(null);
    }

    @Override
    public Page<SavingBook> getAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<SavingBook> getAllWithSearch(Pageable pageable, String valueSearch, Long id) {
        return null;
    }
}
