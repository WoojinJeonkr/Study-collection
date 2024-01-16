package com.board.bootcamp.domain.policy.service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.board.bootcamp.domain.policy.dto.PolicyRequestDto;
import com.board.bootcamp.domain.policy.dto.PolicyResponseDto;
import com.board.bootcamp.domain.policy.entity.Policy;
import com.board.bootcamp.domain.policy.repository.PolicyRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PolicyService {
	
	private final PolicyRepository policyRepository;
	
	// 개인정보처리방침 작성
	@Transactional
	public Policy createPolicy(PolicyRequestDto policyDto) {
		return policyRepository.save(policyDto.toEntity());
	}
	
	// 개인정보처리방침 수정
	@Transactional
	public Policy updatePolicy(Long id, PolicyRequestDto policyDto) {
		Policy policy = policyRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("개인정보처리방침이 존재하지 않습니다."));
		policy.setTitle(policyDto.getTitle());
		policy.setContent(policyDto.getContent());
		policy.setModifiedDate(LocalDateTime.now());
		return policyRepository.saveAndFlush(policy);
	}
	
	// 개인정보처리방침 전체 조회
	@Transactional(readOnly = true)
	public List<PolicyResponseDto> findPolicyList(){
		return policyRepository.findAll().stream()
				.map(PolicyResponseDto::new).collect(Collectors.toList());
	}
	
	// 개인정보처리방침 상세 조회
	@Transactional(readOnly = true)
	public PolicyResponseDto findPolicyDetail(Long id) {
		Policy policy = policyRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("개인정보처리방침이 존재하지 않습니다."));
		return new PolicyResponseDto(policy);
	}
	
	// 서비스 이용약관 chapterNum 존재 여부 확인
	@Transactional(readOnly = true)
	public List<Integer> checkPolicyChapterNum(){
		int[] defaultChapterNumList = {1, 2, 3, 4, 5};
		List<PolicyResponseDto> policyList = policyRepository.findAll().stream()
				.map(PolicyResponseDto::new).collect(Collectors.toList());
		List<Integer> entireChapterNumList = Arrays.stream(defaultChapterNumList)
                .boxed().collect(Collectors.toList());
		List<Integer> chapterNumList = policyList.stream().map(c -> c.getChapterNum()).collect(Collectors.toList());
		entireChapterNumList.removeAll(chapterNumList);
		return entireChapterNumList;
	}
	
	// 개인정보처리방침 삭제
	@Transactional
	public String deletePolicy(Long id) {
		policyRepository.deleteById(id);
		return "삭제되었습니다.";
	}
}
