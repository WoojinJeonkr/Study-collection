package com.board.bootcamp.domain.term.service;


import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.board.bootcamp.domain.term.dto.TermRequestDto;
import com.board.bootcamp.domain.term.dto.TermResponseDto;
import com.board.bootcamp.domain.term.entity.Term;
import com.board.bootcamp.domain.term.repository.TermRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TermService {
	
	private final TermRepository termRepository;
	
	// 서비스 이용약관 작성
	@Transactional
	public Term create(TermRequestDto termDto) {
		return termRepository.save(termDto.toEntity()); 
	}
	
	// 서비스 이용약관 조회
	@Transactional(readOnly = true)
	public TermResponseDto findOne(Long id) {
		Term term = termRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("해당하는 서비스 이용약관을 찾을 수 없습니다."));
		return new TermResponseDto(term);
	}
	
	// 서비스 이용약관 전체 조회
	@Transactional(readOnly=true)
	public List<TermResponseDto> findAllTerm(){
		return termRepository.findAll()
				.stream()
				.map(TermResponseDto::new)
				.collect(Collectors.toList());
	}

	// 서비스 이용약관 chapterNum 존재 여부 확인
	@Transactional(readOnly = true)
	public List<Integer> checkTermChapterNum(){
		int[] defaultChapterNumList = {1, 2, 3, 4, 5, 6, 7};
		List<TermResponseDto> termList = termRepository.findAll().stream()
				.map(TermResponseDto::new).collect(Collectors.toList());
		List<Integer> entireChapterNumList = Arrays.stream(defaultChapterNumList)
                .boxed().collect(Collectors.toList());
		List<Integer> chapterNumList = termList.stream().map(c -> c.getChapterNum()).collect(Collectors.toList());
		entireChapterNumList.removeAll(chapterNumList);
		return entireChapterNumList;
	}
	
	
	// 서비스 이용약관 수정
	@Transactional
	public Long update(Long id, TermRequestDto termDto) {
		Term term = termRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당하는 서비스 이용약관을 찾을 수 없습니다."));
		term.setTitle(termDto.getTitle());
		term.setChapterNum(termDto.getChapterNum());
		term.setContent(termDto.getContent());
		term.setModifiedDate(LocalDateTime.now());
		return id;
	}
	
	// 서비스 이용약관 삭제
	@Transactional
	public void delete(Long id) {
		termRepository.deleteById(id);
	}
	
	
	
	
	
}
