package com.board.bootcamp.domain.board.respository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.board.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

	Optional<Board> findById(Long id);
	
	void save(Optional<Board> board);

	List<Board> findByWriterOrderByIdDesc(String writer);
}
