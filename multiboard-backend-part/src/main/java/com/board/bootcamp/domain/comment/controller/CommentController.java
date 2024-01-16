package com.board.bootcamp.domain.comment.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.comment.entity.Comment;
import com.board.bootcamp.domain.comment.service.CommentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Comments", description = "댓글 기능 API")
@RestController
@RequestMapping("/api/comment")
@RequiredArgsConstructor
public class CommentController {

	private final CommentService commentService;
	
	// 댓글 등록
	@Operation(operationId = "createComment", summary = "댓글 등록", description = "댓글 등록")
	@PostMapping("/create/{board_id}")
	public Comment create(@PathVariable Long board_id, @RequestParam String content, @RequestParam String writer) {
		return commentService.create(board_id, content, writer);
	}
	
	// 댓글 수정
	@Operation(operationId = "updateComment", summary = "댓글 수정", description = "댓글 수정")
	@PutMapping("/update/{board_id}")
	public Comment update(@PathVariable Long board_id, @RequestParam String content, @RequestParam String writer) {
		return commentService.update(board_id, content, writer);
	}
	
	// 답글 등록
	@Operation(operationId = "createReply", summary = "답글 등록", description = "게시글 번호와 닉네임을 통해 답글 등록")
	@PostMapping("/createReply/{board_id}")
	public Comment createReply(@PathVariable Long board_id, @RequestParam String nickname, @RequestParam String content){
		return commentService.createAnswer(board_id, nickname, content);
	}
	
	// 답글 수정
	@Operation(operationId = "updateReply", summary = "답글 수정", description = "게시글 번호와 닉네임을 통해 답글 수정")
	@PutMapping("/updateReply/{board_id}")
	public Comment updateReply(@PathVariable Long board_id, @RequestParam String nickname, @RequestParam String content) {
		return commentService.updateAnswer(board_id, nickname, content);
	}
}
