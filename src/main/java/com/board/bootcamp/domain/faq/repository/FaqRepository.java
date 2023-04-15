package com.board.bootcamp.domain.faq.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.faq.entity.Faq;

public interface FaqRepository extends JpaRepository<Faq, Long> {

}
