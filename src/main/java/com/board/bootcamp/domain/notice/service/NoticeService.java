package com.board.bootcamp.domain.notice.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.board.bootcamp.domain.notice.entity.Notice;
import com.board.bootcamp.domain.notice.repository.NoticeRepository;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class NoticeService {
	
	@Autowired
	private final UserRepository userRepository;
	
	@Autowired
	private final NoticeRepository noticeRepository;
	
	// 게시글 작성
	public Notice createNotice(String title, String content, String writer) {
		User user = userRepository.findByNickname(writer).get();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (auth == null || auth == "anonymousUser") {
			throw new RuntimeException("회원이 아닙니다.");
		} else if (!auth.equals("ROLE_ADMIN")){
			throw new RuntimeException("작성 권한이 없습니다.");
		} else {
			Notice notice = Notice.builder().title(title).content(content)
					.writer(writer).user(user).build();
			return noticeRepository.save(notice);
		}
	}
	
	// 게시글 수정
	public Notice updateNotice(Long id, String title, String content, String writer) {
		Notice notice = noticeRepository.findById(id).orElseThrow(() -> {
			return new RuntimeException("존재하지 않는 게시글입니다.");
		});
		User user = userRepository.findByNickname(writer).get();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (auth == null || auth == "anonymousUser") {
			throw new RuntimeException("회원이 아닙니다.");
		} else if (!auth.equals("ROLE_ADMIN")){
			throw new RuntimeException("수정 권한이 없습니다.");
		} else {
			notice.setTitle(title);
			notice.setContent(content);
			notice.setWriter(writer);
			notice.setUser(user);
			notice.setModifiedDate(LocalDateTime.now());
			
			return noticeRepository.saveAndFlush(notice);
		}
	}
	
	// 게시글 조회 (목록)
	public List<Notice> findList(){
		return noticeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}
	
	// 최근 작성된 글 5개 조회
	public List<Notice> findRecentNoticeList() {
		List<Notice> noticeList = noticeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
		return noticeList.stream().filter(c -> c.getId() < 6).collect(Collectors.toList());
	}
		
	// 게시글 조회 (상세)
	public Notice noticeDetail(Long id) {
		Notice notice = noticeRepository.findById(id).orElseThrow(() -> {
			return new RuntimeException("게시글이 존재하지 않습니다.");
		});
		int viewCnt = notice.getViewCnt();
		notice.setViewCnt(viewCnt + 1);
		noticeRepository.flush();
		return notice;
	}
	
	// 게시글 삭제
	public void deleteNotice(Long id, String nickname) {
		User user = userRepository.findByNickname(nickname).get();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		Notice notice = noticeRepository.findById(id).orElseThrow(()->{
			throw new RuntimeException("존재하지 않는 게시글입니다.");
		});
		if (nickname.equals(notice.getWriter()) || auth.equals("ROLE_ADMIN")) {
			noticeRepository.deleteById(id);
		} else if (nickname.equals(notice.getWriter())) {
			throw new RuntimeException("작성자가 다릅니다.");
		} else if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("삭제 권한이 없습니다.");
		}
	}
}
