package com.board.bootcamp.domain.notice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.notice.entity.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

}
