package com.board.bootcamp.domain.term.dto;

import java.time.LocalDateTime;

import com.board.bootcamp.domain.term.entity.Term;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class TermResponseDto {
	@Schema(description="번호")
	private final Long termId;
	
	@Schema(description="제목")
	private final String title;
	
	@Schema(description="장")
	private final int chapterNum;
	
	@Schema(description="내용")
	private final String content;
	
	@Schema(description="작성 일자")
	private final LocalDateTime createdDate;
	
	@Schema(description="수정 일자")
	private final LocalDateTime modifiedDate;
	
	public TermResponseDto(Term term) {
		this.termId = term.getTermId();
		this.title = term.getTitle();
		this.chapterNum = term.getChapterNum();
		this.content = term.getContent();
		this.createdDate = term.getCreatedDate();
		this.modifiedDate = term.getModifiedDate();
	}
}
