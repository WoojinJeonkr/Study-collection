package com.board.bootcamp.domain.comment.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.bootcamp.domain.board.entity.Board;
import com.board.bootcamp.domain.board.respository.BoardRepository;
import com.board.bootcamp.domain.comment.entity.Comment;
import com.board.bootcamp.domain.comment.repository.CommentRepository;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentService {

	@Autowired
	private UserRepository userRepository;
	private BoardRepository boardRepository;
	private CommentRepository commentRepository;
	
	// 댓글 등록
	public Comment create(Long board_id, String content, String writer) {
		User user = userRepository.findByNickname(writer).get();
		Board board = boardRepository.findById(board_id).orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
		List<Comment> commentList = board.getComments();
		if (commentList.size() == 0) {
			int groupNum = 0;
			Comment comment = Comment.builder()
					.comments(content)
					.user(user)
					.board(board)
					.groupNum(groupNum)
					.isParent(true)
					.build();
			return commentRepository.save(comment);
		} else {
			int groupNum = commentList.get(0).getGroupNum() + 1;
			Comment comment = Comment.builder()
					.comments(content)
					.user(user)
					.board(board)
					.groupNum(groupNum)
					.isParent(true)
					.build();
			return commentRepository.save(comment);
		}
	}
	
	// 댓글 수정
	public Comment update(Long board_id, String content, String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		Board board = boardRepository.findById(board_id).orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
		List<Comment> commentList = board.getComments();
		Comment parent = commentList.stream()
			.filter(c -> c.isParent() == true && c.getUser().getNickname() == user.getNickname())
				.collect(Collectors.toList()).get(0);
		parent.setComments(content);
		return commentRepository.saveAndFlush(parent);
	}
	
	// 답글 등록
	public Comment createAnswer(Long board_id, String nickname, String content) {
		User user = userRepository.findByNickname(nickname).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		Board board = boardRepository.findById(board_id).orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
		List<Comment> commentList = board.getComments();
		Comment parent = commentList.stream().filter(c -> c.isParent() == true && c.getUser().getNickname().equals(nickname))
				.collect(Collectors.toList()).get(0);
		int groupNum = parent.getGroupNum();
		Comment comment = Comment.builder()
				.comments(content).user(user).board(board).groupNum(groupNum)
				.isParent(false).build();
		return commentRepository.save(comment);
	}
	
	// 답글 수정
	public Comment updateAnswer(Long board_id, String nickname, String content) {
		User user = userRepository.findByNickname(nickname).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		Board board = boardRepository.findById(board_id).orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
		List<Comment> commentList = board.getComments();
		Comment parent = commentList.stream().filter(c -> c.isParent() == true && c.getUser().getNickname().equals(nickname))
				.collect(Collectors.toList()).get(0);
		int groupNum = parent.getGroupNum();
		Comment comment = commentList.stream().filter(c -> c.getGroupNum() == groupNum && c.getUser().getNickname() == nickname && c.isParent() == false)
				.collect(Collectors.toList()).get(0);
		comment.setComments(content);
		comment.setUser(user);
		return commentRepository.saveAndFlush(comment);
	}
}
