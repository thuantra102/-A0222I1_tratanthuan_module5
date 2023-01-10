package com.example.backend.repository;

import com.example.backend.model.SavingBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingBookRepository extends JpaRepository<SavingBook,Long> {
}
