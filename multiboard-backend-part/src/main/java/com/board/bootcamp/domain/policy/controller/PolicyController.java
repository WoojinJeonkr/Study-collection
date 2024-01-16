package com.board.bootcamp.domain.policy.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.policy.dto.PolicyRequestDto;
import com.board.bootcamp.domain.policy.dto.PolicyResponseDto;
import com.board.bootcamp.domain.policy.entity.Policy;
import com.board.bootcamp.domain.policy.service.PolicyService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Policy", description = "개인정보처리방침 기능 API")
@RequiredArgsConstructor
@RequestMapping("/api/policy")
@RestController
public class PolicyController {
	
	private final PolicyService policyService;
	
	// 서비스 이용약관 chapterNum 존재 여부 확인
	@Operation(operationId = "findChapterNumber", summary = "chapterNumber 존재 여부 확인", 
			description = "chapterNumber 조회 후 존재하지 않는 chapterNumber 반환")
	@GetMapping("/findChapterNumList")
	public List<Integer> getChapterNumberList(){
		return policyService.checkPolicyChapterNum();
	}
	
	@Operation(operationId = "createPolicy", summary = "개인정보처리방침 등록", description = "개인정보처리방침 등록")
	@PostMapping("/create")
	public Policy create(@RequestParam String title, @RequestParam String content, @RequestParam int chapterNum) {
		PolicyRequestDto policy = PolicyRequestDto.builder().title(title).content(content).chapterNum(chapterNum).build();
		return policyService.createPolicy(policy);
	}
	
	@Operation(operationId = "findPolicyList", summary = "개인정보처리방침 전체 조회", description = "개인정보처리방침 전체 조회")
	@GetMapping("/find")
	public List<PolicyResponseDto> findPolicyList(){
		return policyService.findPolicyList();
	}
	
	@Operation(operationId = "findPolicyDetail", summary = "개인정보처리방침 상세 조회", description = " 개인정보처리방침 상세 조회")
	@GetMapping("/find/{id}")
	public PolicyResponseDto findPolicyDetail(@PathVariable Long id) {
		return policyService.findPolicyDetail(id);
	}
	
	@Operation(operationId = "updatePolicy", summary = "개인정보처리방침 수정", description = "개인정보처리방침 수정")
	@PutMapping("/update/{id}")
	public Policy updatePolicy(@PathVariable Long id, @RequestParam String title, 
			@RequestParam String content, @RequestParam int chapterNum) {
		PolicyRequestDto policy = PolicyRequestDto.builder().title(title).content(content)
				.chapterNum(chapterNum).build();
		return policyService.updatePolicy(id, policy);
	}
	
	@Operation(operationId = "deletePolicy", summary = "개인정보처리방침 삭제", description = "개인정보처리방침 삭제")
	@DeleteMapping("/delete/{id}")
	public String deletePolicy(@PathVariable Long id) {
		return policyService.deletePolicy(id);
	}
}
