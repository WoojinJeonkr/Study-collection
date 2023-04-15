package com.board.bootcamp.domain.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
