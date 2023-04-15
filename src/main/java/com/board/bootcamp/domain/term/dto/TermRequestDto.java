package com.board.bootcamp.domain.term.dto;

import com.board.bootcamp.domain.term.entity.Term;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TermRequestDto {

	private String title;
	private int chapterNum;
	private String content;
	
	@Builder
	public TermRequestDto(String title, int chapterNum, String content) {
		this.title= title;
		this.chapterNum = chapterNum;
		this.content = content;
	}
	
	public Term toEntity() {
		return Term.builder()
				.title(title)
				.chapterNum(chapterNum)
				.content(content)
				.build();
	}
}
