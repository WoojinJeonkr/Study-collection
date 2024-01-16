package com.board.bootcamp.domain.board.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.board.bootcamp.domain.board.entity.Board;
import com.board.bootcamp.domain.board.respository.BoardRepository;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardService {
	
	private final UserRepository userRepository;
	private final BoardRepository boardRepository;
	
	// 게시글 등록
	public Board createPost(String title, String content, String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		Board board = Board.builder()
				.title(title)
				.content(content)
				.writer(writer)
				.user(user)
				.build();
		return boardRepository.save(board);	
	}
	
	// 게시글 조회(단일): 조회할 때마다 조회 수(viewCnt) 증가, 수정 시간 갱신 x
	public Board findPost(Long id) {
		Board board = boardRepository.findById(id).orElseThrow(()->{
			throw new RuntimeException("존재하지 않는 게시글입니다.");
		});
		int viewCnt = board.getViewCnt();
		board.setViewCnt(++viewCnt);
		boardRepository.flush();
		return board;
	}
	
	// 사용자가 작성한 최신글 불러오기
	public Board findByPostOrderByWriter(String writer) {
		List<Board> boardList = boardRepository.findByWriterOrderByIdDesc(writer);
		Board board = boardList.get(0);
		return board;
	}
	
	// 최근 작성된 글 5개 조회
	public List<Board> findRecentBoardList() {
		List<Board> boardList = boardRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
		return boardList.stream().filter(c -> c.getId() < 6).collect(Collectors.toList());
	}
	
	// 게시글 수정: 수정 시 제목 / 내용 / 수정시간 최신화, 조회 수 증가 x
	public Board updatePost(Long id, String title, String content, String writer) {
		User user = userRepository.findByNickname(writer).get();
		Board board = boardRepository.findById(id).orElseThrow(()->{
			throw new RuntimeException("존재하지 않는 게시글입니다.");
		});
		if (user == null) {
			throw new RuntimeException("회원이 아닙니다.");
		} else if (!writer.equals(board.getWriter())) {
			throw new RuntimeException("작성자가 아닙니다.");
		} else {
			board.setTitle(title);
			board.setContent(content);
			board.setModifiedDate(LocalDateTime.now());
			return boardRepository.saveAndFlush(board);
		}	
	}
	
	// 게시글 삭제
	public void deletePost(Long id, String nickname) {
		String auth = userRepository.findByNickname(nickname).get()
				.getAuthorities().iterator().next().getAuthorityName();
		Board board = boardRepository.findById(id).orElseThrow(()->{
			throw new IllegalArgumentException("존재하지 않는 게시글입니다.");
		});
		if (!nickname.equals(board.getWriter())) {
			throw new RuntimeException("작성자가 다릅니다.");
		} else if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("삭제 권한이 없습니다.");
		}else {
			boardRepository.deleteById(id);
		}
	}
}
