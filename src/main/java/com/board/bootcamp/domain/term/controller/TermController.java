package com.board.bootcamp.domain.term.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.term.dto.TermRequestDto;
import com.board.bootcamp.domain.term.dto.TermResponseDto;
import com.board.bootcamp.domain.term.entity.Term;
import com.board.bootcamp.domain.term.service.TermService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Term", description = "서비스 이용약관 기능 API")
@RequiredArgsConstructor
@RequestMapping("/api/term")
@RestController
public class TermController {

	private final TermService termService;
	
	// 서비스 이용약관 chapterNum 존재 여부 확인
	@Operation(operationId = "findChapterNumber", summary = "chapterNumber 존재 여부 확인", 
			description = "chapterNumber 조회 후 존재하지 않는 chapterNumber 반환")
	@GetMapping("/findChapterNumList")
	public List<Integer> getChapterNumberList(){
		return termService.checkTermChapterNum();
	}
	
	// 이용약관 작성
	@Operation(operationId = "createTerm", summary = "이용약관 작성", description = "이용약관 작성")
	@PostMapping("/create")
	public Term createTerm(@RequestParam String title, @RequestParam int chapterNum, @RequestParam String content) {
		TermRequestDto term = TermRequestDto.builder()
				.title(title)
				.chapterNum(chapterNum)
				.content(content).build();
		return termService.create(term);
	}
	
	// 이용약관 수정
	@Operation(operationId = "updateTerm", summary = "이용약관 수정", description = "이용약관 수정")
	@PutMapping("/update/{id}")
	public Long updateTerm(@PathVariable Long id, @RequestParam String title, @RequestParam int chapterNum,
			@RequestParam String content) {
		TermRequestDto termDto = TermRequestDto.builder()
				.title(title).chapterNum(chapterNum)
				.content(content).build();
		return termService.update(id, termDto);
	}
	
	// 이용약관 전체 조회
	@Operation(operationId = "findTermList", summary = "이용약관 전체 조회", description = "이용약관 전체 조회")
	@GetMapping("/find")
	public List<TermResponseDto> findTermList(){
		return termService.findAllTerm();
	}
	
	// 이용약관 상세 조회
	@Operation(operationId = "findTermDetail", summary = "이용약관 상세 조회", description = "이용약관 상세 조회")
	@GetMapping("/find/{id}")
	public TermResponseDto findTermDetail(@PathVariable Long id) {
		return termService.findOne(id);
	}
	
	// 이용약관 삭제
	@Operation(operationId = "deleteTerm", summary = "이용약관 삭제", description = "이용약관 삭제")
	@DeleteMapping("/delete/{id}")
	public String deleteTerm(@PathVariable Long id) {
		termService.delete(id);
		return "삭제되었습니다.";
	}
}
