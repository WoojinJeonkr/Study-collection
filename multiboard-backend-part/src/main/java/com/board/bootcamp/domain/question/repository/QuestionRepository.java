package com.board.bootcamp.domain.question.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	List<Question> findByWriterOrderByIdDesc(String writer);
}
