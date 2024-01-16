package com.board.bootcamp.domain.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
