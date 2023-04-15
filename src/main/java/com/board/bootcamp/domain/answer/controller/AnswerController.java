package com.board.bootcamp.domain.answer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.answer.entity.Answer;
import com.board.bootcamp.domain.answer.service.AnswerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

@Tag(name = "Answers", description = "QnA 기능 API - Answer")
@AllArgsConstructor
@RequestMapping("/api/answer")
@RestController
public class AnswerController {

	@Autowired
	private final AnswerService answerService;
	
	// Answer 등록
	@Operation(operationId = "createAnswer", summary = "Answer 등록", description = "Answer 등록")
	@PostMapping("/create/{id}")
	public Answer create(@PathVariable Long id, @RequestParam String content, @RequestParam String writer) {
		return answerService.create(id, content, writer);
	}
	
	// Answer 수정
	@Operation(operationId = "updateAnswer", summary = "Answer 수정", description = "Answer 수정")
	@PutMapping("/update/{id}")
	public Answer update(@PathVariable Long id, @RequestParam String content, @RequestParam String writer) {
		return answerService.update(id, content, writer);
	}
	
	// Answer 삭제
	@Operation(operationId = "deleteAnswer", summary = "Answer 삭제", description = "Answer 삭제")
	@DeleteMapping("/delete/{answer_id}")
	public void delete(@PathVariable Long answer_id, @RequestParam String nickname) {
		answerService.delete(answer_id, nickname);
	}
}
