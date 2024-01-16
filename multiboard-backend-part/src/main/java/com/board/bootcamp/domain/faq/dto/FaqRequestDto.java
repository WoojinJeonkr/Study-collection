package com.board.bootcamp.domain.faq.dto;

import com.board.bootcamp.domain.faq.entity.Faq;
import com.board.bootcamp.domain.user.entity.User;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FaqRequestDto {
	
	private String question;
	private String answer;
	private User user;
	
	@Builder
	public FaqRequestDto(String question, String answer, User user) {
		this.question = question;
		this.answer = answer;
		this.user = user;
	}
	
	public Faq toEntity() {
		return Faq.builder()
				.question(question)
				.answer(answer)
				.user(user)
				.build();
	}
}
