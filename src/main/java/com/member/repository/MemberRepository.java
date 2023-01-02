package com.member.repository;

import java.util.List;
import java.util.Optional;

import com.member.domain.Member;


public interface MemberRepository {
	
	// id, name 저장
	Member save(Member member);
	
	// id 검색
	Optional<Member> findById(Long id);
	
	// name 검색
	Optional<Member> findByName(String name);
	
	// 모든 유저 검색
	List<Member> findAll();
}
