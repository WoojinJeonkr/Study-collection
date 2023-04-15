package com.board.bootcamp.domain.question.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.board.bootcamp.domain.BaseTimeEntity;
import com.board.bootcamp.domain.answer.entity.Answer;
import com.board.bootcamp.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
public class Question extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Lob
	@Column(nullable = false)
	private String question;
	
	@Column(nullable = false)
	private String writer;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;
	
	@JsonManagedReference
	@OneToOne(mappedBy = "question")
	private Answer answer;
	
	@Builder
	public Question(String title, String question, String writer, User user) {
		this.title = title;
		this.question = question;
		this.writer = writer;
		this.user = user;
	}
}
