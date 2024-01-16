package com.board.bootcamp.domain.answer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.bootcamp.domain.answer.entity.Answer;
import com.board.bootcamp.domain.answer.repository.AnswerRepository;
import com.board.bootcamp.domain.question.entity.Question;
import com.board.bootcamp.domain.question.repository.QuestionRepository;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {

	@Autowired
	private final UserRepository userRepository;
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;
	
	// Answer 등록
	public Answer create(Long id, String content, String writer) {
		User user = userRepository.findByNickname(writer).get();
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		Question question = questionRepository.findById(id).get();
		if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("관리자만 등록 가능합니다.");
		} else if (question == null) {
			throw new RuntimeException("질문 글이 없습니다.");
		} else {
			Answer answer = Answer.builder()
					.answer(content)
					.writer(writer)
					.user(user)
					.question(question)
					.build();
			return answerRepository.save(answer);
		}
	}
	
	// Answer 수정
	public Answer update(Long answer_id, String content, String writer) {
		User user = userRepository.findByNickname(writer).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		Answer answer = answerRepository.findById(answer_id).orElseThrow(() -> new RuntimeException("답변을 찾을 수 없습니다."));
		if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("관리자만 수정 가능합니다.");
		} else {
			answer.setAnswer(content);
			answer.setWriter(writer);
			answer.setUser(user);
			return answerRepository.saveAndFlush(answer);
		}
	}
	
	// Answer 삭제
	public void delete(Long answer_id, String nickname) {
		User user = userRepository.findByNickname(nickname).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		String auth = user.getAuthorities().iterator().next().getAuthorityName();
		if (!auth.equals("ROLE_ADMIN")) {
			throw new RuntimeException("관리자만 삭제 가능합니다.");
		} else {
			answerRepository.deleteById(answer_id);
		}
	}
}
