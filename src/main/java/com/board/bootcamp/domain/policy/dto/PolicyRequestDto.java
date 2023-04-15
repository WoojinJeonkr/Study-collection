package com.board.bootcamp.domain.policy.dto;

import com.board.bootcamp.domain.policy.entity.Policy;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PolicyRequestDto {
	
	private String title;
	private String content;
	private int chapterNum;
	
	@Builder
	public PolicyRequestDto(String title, String content, int chapterNum) {
		this.title = title;
		this.content = content;
		this.chapterNum = chapterNum;
	}
	
	public Policy toEntity() {
		return Policy.builder().title(title)
			.content(content).chapterNum(chapterNum)
			.build();
	}
}
