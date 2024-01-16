package com.board.bootcamp.domain.policy.dto;

import java.time.LocalDateTime;

import com.board.bootcamp.domain.policy.entity.Policy;

import lombok.Getter;

@Getter
public class PolicyResponseDto {
	
	private Long id;
	private String title;
	private String content;
	private int chapterNum;
	private LocalDateTime createdDate;
	private LocalDateTime modifiedDate;
	
	public PolicyResponseDto(Policy policy) {
		this.id = policy.getId();
		this.title = policy.getTitle();
		this.content = policy.getContent();
		this.chapterNum = policy.getChapterNum();
		this.createdDate = policy.getCreatedDate();
		this.modifiedDate = policy.getModifiedDate();
	}
}
