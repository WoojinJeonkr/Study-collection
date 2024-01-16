package com.board.bootcamp.domain.question.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.question.entity.Question;
import com.board.bootcamp.domain.question.service.QuestionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

@Tag(name = "Questions", description = "QnA 기능 API - Question")
@AllArgsConstructor
@RequestMapping("/api/question")
@RestController
public class QuestionController {

	@Autowired
	private final QuestionService questionService;
	
	// Question 등록
	@Operation(operationId = "createQuestion", summary = "Question 등록", description = "Question 등록")
	@PostMapping("/create")
	public Question create(@RequestParam String title, @RequestParam String content, @RequestParam String writer) {
		return questionService.create(title, content, writer);
	}
	
	// Question 수정
	@Operation(operationId = "updateQuestion", summary = "Question 수정", description = "Question 수정")
	@PutMapping("/update/{question_id}")
	public Question update(@PathVariable Long question_id, @RequestParam String title, @RequestParam String content, @RequestParam String writer) {
		return questionService.update(question_id, title, content, writer);
	}
	
	// Question 전체 조회
	@Operation(operationId = "findQuestionList", summary = "Question 전체 조회", description = "Question 전체 조회")
	@GetMapping("/findList")
	public List<Question> findAll(){
		return questionService.findAll();
	}
	
	// 최신 Question 5개 조회
	@Operation(operationId = "findFiveRecentList", summary = "최근 Question 조회", description = "최근 작성된 Question 5개 조회")
	@GetMapping("/find/five")
	public List<Question> findRecentList(){
		return questionService.findFiveRecentQuestion();
	}
	
	// Question 상세 조회
	@Operation(operationId = "findQuestion", summary = "Question 상세 조회", description = "Question 상세 조회")
	@GetMapping("/find/{question_id}")
	public Question find(@PathVariable Long question_id) {
		return questionService.find(question_id);
	}
	
	// 사용자가 작성한 가장 최근의 Question 조회
	@Operation(operationId = "findRecentlyQuestion", summary = "가장 최근 Question 조회", description = "가장 최근에 작성한 Question 조회")
	@GetMapping("/find/first")
	public Question findRecentlyQuestion(String writer){
		return questionService.findByQuestionOrderByWriter(writer);
	}
	
	// Question 삭제
	@Operation(operationId = "deleteQuestion", summary = "Question 삭제", description = "Question 삭제")
	@DeleteMapping("/delete/{question_id}")
	public String delete(@PathVariable Long question_id) {
		questionService.delete(question_id);
		return "질문 글이 삭제되었습니다.";
	}
}
