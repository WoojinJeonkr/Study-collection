package com.board.bootcamp.domain.comment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import com.board.bootcamp.domain.BaseTimeEntity;
import com.board.bootcamp.domain.board.entity.Board;
import com.board.bootcamp.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Table(name = "comments")
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
	private Long id;
	
	@Column(nullable = false)
	private String comments;
	
	@ColumnDefault("0")
	private int groupNum;
	
	private boolean isParent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "board_id")
	@JsonBackReference
	private Board board;
	
	@Builder
	public Comment(String comments, int groupNum, boolean isParent, User user, Board board) {
		this.comments = comments;
		this.groupNum = groupNum;
		this.isParent = isParent;
		this.user = user;
		this.board = board;
	}
}
