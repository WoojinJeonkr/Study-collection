package com.member.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.member.repository.MemberRepository;
import com.member.repository.MemoryMemberRepository;

@Configuration
public class SpringConfig {
	
	@Bean
	public MemberService memberService() {
		return new MemberService(memberRepository());
	}
	
	@Bean
	public MemberRepository memberRepository() {
		return new MemoryMemberRepository();
	}
}
