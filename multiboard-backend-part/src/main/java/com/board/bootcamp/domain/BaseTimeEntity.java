package com.board.bootcamp.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {
	
	@Schema(description = "가입일자")
	@CreatedDate
	@Column(updatable = false, nullable = false)
	private LocalDateTime createdDate;
	
	@Schema(description = "수정일자")
	@Column(nullable = false)
	@CreatedDate
	private LocalDateTime modifiedDate;
}
