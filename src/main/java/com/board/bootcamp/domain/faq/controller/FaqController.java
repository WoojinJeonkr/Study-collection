package com.board.bootcamp.domain.faq.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.faq.dto.FaqRequestDto;
import com.board.bootcamp.domain.faq.dto.FaqResponseDto;
import com.board.bootcamp.domain.faq.entity.Faq;
import com.board.bootcamp.domain.faq.service.FaqService;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "FAQ", description = "FAQ 기능 API")
@RequiredArgsConstructor
@RequestMapping("/api/faq")
@RestController
public class FaqController {

	private final UserRepository userRepository;
	private final FaqService faqService;
	
	// faq 등록
	@Operation(operationId = "createFaq", summary = "FAQ 등록", description = "Question과 Answer 등록")
	@PostMapping("/create")
	public Faq create(@RequestParam String question, @RequestParam String answer, @RequestParam String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new IllegalArgumentException("회원이 아닙니다."));
		FaqRequestDto faqDto = FaqRequestDto.builder().question(question)
								.answer(answer).user(user).build();
		return faqService.create(faqDto);
	}
	
	// faq 수정
	@Operation(operationId = "updateFaq", summary = "FAQ 수정", description = "Question과 Answer 수정")
	@PutMapping("/update/{id}")
	public Long update(@PathVariable Long id, @RequestParam String question,
			@RequestParam String answer, @RequestParam String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new IllegalArgumentException("회원이 아닙니다."));
		FaqRequestDto faqDto = FaqRequestDto.builder().question(question)
				.answer(answer).user(user).build();
		return faqService.update(id, faqDto);
	}
	
	// faq 조회
	@Operation(operationId = "findFaq", summary = "FAQ 조회", description = "FAQ 목록 오름차순 조회")
	@GetMapping("/find")
	public List<FaqResponseDto> find(){
		return faqService.findAll();
	}
	
	// 최신 faq 5개 조회
	@Operation(operationId = "findRecentFaq", summary = "FAQ 5개 조회", description = "FAQ 5개 조회")
	@GetMapping("/find/five")
	public List<FaqResponseDto> findRecentFive(){
		return faqService.findRecentFaqList();
	}
	
	// faq 삭제
	@Operation(operationId = "deleteFaq", summary = "FAQ 삭제", description = "번호 조회를 통한 FAQ 삭제")
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id) {
		return faqService.delete(id);
	}
}
