package com.example.backend.service.impl;

import com.example.backend.dto.SavingBookDto;
import com.example.backend.model.SavingBook;
import com.example.backend.repository.CustomerRepository;
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
    @Autowired
    CustomerService customerService;
    @Override
    public List<SavingBook> findAll() {
        return savingBookRepository.findAll();
    }

    @Override
    public void save(SavingBook savingBook) {


    }
    public  void saveFromDTO(SavingBookDto savingBookDto) {
        SavingBook savingBook = new SavingBook();
        if (savingBookDto.getId() != null) {
            savingBook.setId(savingBookDto.getId());
        }
        savingBook.setDeposit(savingBookDto.getDeposit());
        savingBook.setInterestRate(savingBookDto.getInterestRate());
        savingBook.setPeriod(savingBookDto.getPeriod());
        savingBook.setReference(savingBookDto.getReference());
        savingBook.setOpeningDay(savingBookDto.getOpeningDay());
        savingBook.setStartDay(savingBookDto.getStartDay());
        savingBook.setCustomer(customerService.findById(savingBookDto.getCustomerId()));
        savingBookRepository.save(savingBook);
    }

    @Override
    public void delete(SavingBook savingBook) {
        savingBookRepository.delete(savingBook);
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
