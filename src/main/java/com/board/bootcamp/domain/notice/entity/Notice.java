package com.board.bootcamp.domain.notice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ColumnDefault;

import com.board.bootcamp.domain.BaseTimeEntity;
import com.board.bootcamp.domain.user.entity.User;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Notice extends BaseTimeEntity {
	
	@Schema(description = "게시글 번호")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "notice_id")
	private Long id;
	
	@Schema(description = "게시글 제목")
	@Column(nullable = false)
	private String title;
	
	@Schema(description = "게시글 내용")
	@Lob
	@Column(nullable = false)
	private String content;
	
	@Schema(description = "작성자")
	@Column(nullable = false)
	private String writer;

	@Schema(description = "조회수")
	@ColumnDefault("0")
	private int viewCnt;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;
}
