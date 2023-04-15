package com.board.bootcamp.domain.faq.dto;

import com.board.bootcamp.domain.faq.entity.Faq;
import com.board.bootcamp.domain.user.entity.User;

import lombok.Getter;

@Getter
public class FaqResponseDto {
	
	private final Long id;
	private final String question;
	private final String answer;
	private final User user;
	
	public FaqResponseDto(Faq faq) {
		this.id = faq.getId();
		this.question = faq.getQuestion();
		this.answer = faq.getAnswer();
		this.user = faq.getUser();
	}
}
