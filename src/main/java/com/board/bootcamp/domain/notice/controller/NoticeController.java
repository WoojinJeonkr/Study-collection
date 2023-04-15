package com.board.bootcamp.domain.notice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.notice.entity.Notice;
import com.board.bootcamp.domain.notice.service.NoticeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

@Tag(name = "Notices", description = "공지사항 기능 API")
@AllArgsConstructor
@RequestMapping("/api/notice")
@RestController
public class NoticeController {
	
	@Autowired
	private final NoticeService noticeService;
	
	// 게시글 등록
	@Operation(operationId = "createNotice", summary = "공지사항 등록", description = "공지사항 등록")
	@PostMapping("/create")
	public Notice create(@RequestParam String title, @RequestParam String content, @RequestParam String writer) {
		return noticeService.createNotice(title, content, writer);
	}
	
	// 게시글 수정
	@Operation(operationId = "updateNotice", summary = "공지사항 수정", description = "글 번호로 공지사항 조회 후 공지사항 제목과 내용 수정")
	@PutMapping("/update/{id}")
	public Notice update(@PathVariable Long id, @RequestParam String title, @RequestParam String content, @RequestParam String writer) {
		return noticeService.updateNotice(id, title, content, writer);
	}
	
	// 게시글 조회 (내림차순)
	@Operation(operationId = "findNoticeList", summary = "전체 공지사항 조회", description = "내림차순으로 전체 공지사항 조회")
	@GetMapping("/find")
	public List<Notice> findAll(){
		return noticeService.findList();
	}
	
	// 가장 최근에 작성된 글 5개 조회
	@Operation(operationId = "noticeRecentFive", summary = "최신글 5개 조회", description = "최신글 5개 조회")
	@GetMapping("/find/five")
	public List<Notice> findFiveNotice() {
		return noticeService.findRecentNoticeList();
	}
	
	// 게시글 조회 (상세)
	@Operation(operationId = "findNotice", summary = "공지사항 상세보기", description = "글 번호로 공지사항 조회")
	@GetMapping("/find/{id}")
	public Notice find(@PathVariable Long id) {
		return noticeService.noticeDetail(id);
	}
	
	// 게시글 삭제
	@Operation(operationId = "deleteNotice", summary = "공지사항 삭제", description = "글 번호로 공지사항 삭제")
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id, @RequestParam String nickname) {
		noticeService.deleteNotice(id, nickname);
		return "게시글이 삭제되었습니다.";
	}
	
}
