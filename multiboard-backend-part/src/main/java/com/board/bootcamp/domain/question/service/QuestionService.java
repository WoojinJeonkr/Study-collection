package com.board.bootcamp.domain.question.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.board.bootcamp.domain.question.entity.Question;
import com.board.bootcamp.domain.question.repository.QuestionRepository;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {

	@Autowired
	private final UserRepository userRepository;
	private final QuestionRepository questionRepository;
	
	// Question 등록: 회원만 등록 가능, 비회원 / 관리자 등록 불가능
	public Question create(String title, String content, String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (!auth.equals("ROLE_USER")) {
			throw new RuntimeException("일반 회원만 등록이 가능합니다.");
		} else {
			Question question = Question.builder()
					.title(title)
					.question(content)
					.writer(writer)
					.user(user)
					.build();
			return questionRepository.save(question);
		}
	}
	
	// Question 수정
	public Question update(Long question_id, String title, String content, String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		Question question = questionRepository.findById(question_id).orElseThrow(() -> 
				new RuntimeException("질문글이 존재하지 않습니다."));
		if(!question.getWriter().equals(writer)) {
			throw new RuntimeException("작성자가 아닙니다.");
		} else {
			question.setTitle(title);
			question.setQuestion(content);
			question.setWriter(writer);
			question.setUser(user);
			question.setModifiedDate(LocalDateTime.now());
			return questionRepository.saveAndFlush(question);
		}
	}
	
	// Question 전체 조회
	@Transactional
	public List<Question> findAll() {
		return questionRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}

	// 최신 Question 5개 조회
	public List<Question> findFiveRecentQuestion() {
		List<Question> questionList = questionRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
		return questionList.stream().filter(c -> c.getId() < 6).collect(Collectors.toList());
	}
	
	// Question 상세 조회
	public Question find(Long question_id) {
		return questionRepository.findById(question_id).orElseThrow(() -> new RuntimeException("질문 글이 존재하지 않습니다."));
	}
	
	// 사용자가 작성한 가장 최근 question 조회
	public Question findByQuestionOrderByWriter(String writer) {
		List<Question> questionList = questionRepository.findByWriterOrderByIdDesc(writer);
		if (questionList.isEmpty()) {
			throw new RuntimeException("작성하신 질문이 없습니다.");
		} else {
			Question question = questionList.get(0);
			return question;
		}
	}
	
	// Question 삭제
	public void delete(Long question_id) {
		questionRepository.deleteById(question_id);
	}
}
