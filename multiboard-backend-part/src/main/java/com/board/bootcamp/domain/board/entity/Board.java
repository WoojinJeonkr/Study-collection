package com.board.bootcamp.domain.board.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;

import org.hibernate.annotations.ColumnDefault;

import com.board.bootcamp.domain.BaseTimeEntity;
import com.board.bootcamp.domain.comment.entity.Comment;
import com.board.bootcamp.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Board extends BaseTimeEntity {
	
	@Schema(description = "게시글 번호")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "board_id")
	private Long id;
	
	@Schema(description = "게시글 제목")
	@Column(nullable = false, length = 30)
	private String title;
	
	@Lob // 일반적인 데이터베이스에서 저장하는 길이인 255개 이상의 문자를 저장하고 싶은 경우 사용
	@Schema(description = "게시글 내용")
	@Column(nullable = false)
	private String content;
	
	@Schema(description = "작성자")
	@Column(nullable = false)
	private String writer;
	
	@Schema(description = "조회 수")
	@ColumnDefault("0")
	private int viewCnt;
	
	@Schema(description = "추천 수")
	@ColumnDefault("0")
	private int goodCnt;
	
	@Schema(description = "비추천 수")
	@ColumnDefault("0")
	private int badCnt;
	
	@Schema(description = "전체 추천 수")
	private int totalCnt;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "board")
	@OrderBy("id desc")
	private List<Comment> comments = new ArrayList<>();
	
	@Builder
	public Board(String title, String content, String writer,
			int viewCnt, int goodCnt, int badCnt, User user) {
		this.title = title;
		this.content = content;
		this.writer = writer;
		this.viewCnt = viewCnt;
		this.goodCnt = goodCnt;
		this.badCnt = badCnt;
		this.totalCnt = goodCnt - badCnt;
		this.user = user;
	}
}
