package com.board.bootcamp.domain.faq.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.board.bootcamp.domain.faq.dto.FaqRequestDto;
import com.board.bootcamp.domain.faq.dto.FaqResponseDto;
import com.board.bootcamp.domain.faq.entity.Faq;
import com.board.bootcamp.domain.faq.repository.FaqRepository;
import com.board.bootcamp.domain.user.entity.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FaqService {
	
	private FaqRepository faqRepository;
	
	// Question & Answer 등록
	@Transactional
	public Faq create(FaqRequestDto faqDto) {
		User user = faqDto.getUser();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("등록 권한이 없습니다.");
		} else {
			return faqRepository.save(faqDto.toEntity());
		}
	}
	
	// Question & Answer 수정
	@Transactional
	public Long update(Long id, FaqRequestDto faqDto) {
		Faq faq = faqRepository.findById(id).orElseThrow(()->{
			return new IllegalArgumentException("해당하는 Faq를 찾을 수 없습니다.");
		});
		User user = faqDto.getUser();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("등록 권한이 없습니다.");
		} else {
			faq.setQuestion(faqDto.getQuestion());
			faq.setAnswer(faqDto.getAnswer());
			faq.setUser(user);
			return id;
		}
	}
	
	// faq 조회
	@Transactional(readOnly = true)
	public List<FaqResponseDto> findAll(){
		return faqRepository.findAll(Sort.by(Sort.Direction.ASC, "id")).stream()
				.map(FaqResponseDto::new)
				.collect(Collectors.toList());
	}
	
	// 최신 faq 5개 조회
	@Transactional(readOnly = true)
	public List<FaqResponseDto> findRecentFaqList(){
		List<FaqResponseDto> FaqList = faqRepository.findAll(Sort.by(Sort.Direction.DESC, "id"))
				.stream().map(FaqResponseDto::new).collect(Collectors.toList());
		return FaqList.stream().filter(c -> c.getId() < 6).collect(Collectors.toList());
	}
	
	// faq 삭제
	@Transactional
	public String delete(Long id) {
		faqRepository.deleteById(id);
		return "삭제되었습니다.";
	}
}
