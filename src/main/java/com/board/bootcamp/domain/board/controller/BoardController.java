package com.board.bootcamp.domain.board.controller;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.board.entity.Board;
import com.board.bootcamp.domain.board.respository.BoardRepository;
import com.board.bootcamp.domain.board.service.BoardService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Boards", description = "자유게시판 기능 API")
@RequiredArgsConstructor
@RequestMapping("/api/board")
@RestController
public class BoardController {
	
	private final BoardRepository boardRepository;
	private final BoardService boardService;
	
	// 게시글 등록
	@Operation(operationId = "boardCreate", summary = "게시글 등록", description = "게시글 등록")
	@PostMapping("/create")
	public Board create(@RequestParam String title, @RequestParam String content, @RequestParam String writer) {
		return boardService.createPost(title, content, writer);
	}
	
	// 게시글 수정
	@Operation(operationId = "boardUpdate", summary = "게시글 수정", description = "게시글 수정")
	@PutMapping("/update/{id}")
	public Board update(@PathVariable Long id, @RequestParam String title,
			@RequestParam String content, @RequestParam String writer) {
		return boardService.updatePost(id, title, content, writer);
	}
	
	// 게시글 조회 (목록)
	@Operation(operationId = "boardList", summary = "전체 게시글 조회 (내림차순)", description = "게시글 번호를 기준으로 전체 게시글 조회 (내림차순 정렬)")
	@Transactional
	@GetMapping("/find/newList")
	public List<Board> boardListDesc(){
		return boardRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}
	
	// 게시글 조회 (목록)
	@Operation(operationId = "boardList", summary = "전체 게시글 조회 (오름차순)", description = "게시글 번호를 기준으로 전체 게시글 조회 (오름차순 정렬)")
	@GetMapping("/find/oldList")
	public List<Board> boardListAsc(){
		return boardRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
	}
	
	// 게시글 조회 (단일)
	@Operation(operationId = "boardFindOne", summary = "게시글 상세 보기", description = "게시글 번호를 이용하여 게시글 조회")
	@GetMapping("/find/{id}")
	public Board detail(@PathVariable Long id) {
		Board board = boardService.findPost(id);
		return board;
	}
	
	// 사용자가 작성한 최신글 불러오기
	@Operation(operationId = "boardFindTopFirst", summary = "최신글 조회", description = "가장 최근에 작성한 글 조회")
	@Transactional
	@GetMapping("/find/first")
	public Board findTopRecentBoard(@RequestParam String writer) {
		return boardService.findByPostOrderByWriter(writer);
	}
	
	// 가장 최근에 작성된 글 5개 조회
	@Operation(operationId = "boardRecentFive", summary = "최신글 5개 조회", description = "최신글 5개 조회")
	@GetMapping("/find/five")
	public List<Board> findFiveBoard() {
		return boardService.findRecentBoardList();
	}
	
	// 게시글 삭제
	@Operation(operationId = "boardDelete", summary = "게시글 삭제", description = "게시글 번호를 통해 게시글 삭제")
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id, @RequestParam String nickname) {
		boardService.deletePost(id, nickname);
		return "게시글이 삭제되었습니다.";
	}
}
