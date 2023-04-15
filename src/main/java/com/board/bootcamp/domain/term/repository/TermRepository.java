package com.board.bootcamp.domain.term.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.term.entity.Term;

public interface TermRepository extends JpaRepository<Term, Long> {

}
