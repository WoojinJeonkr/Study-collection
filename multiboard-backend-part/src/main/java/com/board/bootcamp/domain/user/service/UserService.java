package com.board.bootcamp.domain.user.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.board.bootcamp.domain.user.entity.Authority;
import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.repository.UserRepository;
import com.board.bootcamp.global.util.SecurityUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	
	// 일반회원 회원가입
	@Transactional
	public User registerUser(String username, String password, String nickname, String email) {
		if(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }
		
		Authority authority = Authority.builder()
				.authorityName("ROLE_USER")
				.build();
		
		User user = User.builder()
				.username(username)
				.password(passwordEncoder.encode(password))
				.nickname(nickname)
				.email(email)
				.authorities(Collections.singleton(authority))
				.activated(true)
				.build();
		return userRepository.save(user);
	}
	
	// 관리자 회원가입
	@Transactional
	public User registerAdmin(String username, String password, String nickname, String email) {
		if(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }
		
		Authority authority = Authority.builder()
				.authorityName("ROLE_ADMIN")
				.build();
		
		User user = User.builder()
				.username(username)
				.password(passwordEncoder.encode(password))
				.nickname(nickname)
				.email(email)
				.authorities(Collections.singleton(authority))
				.activated(true)
				.build();
		return userRepository.save(user);
	}
		
	@Transactional(readOnly = true)
    public User getUserWithAuthorities(String username) {
        return userRepository.findOneWithAuthoritiesByUsername(username).orElse(null);
    }
	
	// 현재 접속하고 있는 유저 정보 조회
	@Transactional(readOnly = true)
    public Optional<User> getMyUserWithAuthorities() {
        return SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername);
    }

	// 회원 정보 수정
	public User update(String username, String password,
			String nickname, String email) {
		User user = userRepository.findByUsername(username).get();
		user.setPassword(passwordEncoder.encode(password));	
		user.setNickname(nickname);
		user.setEmail(email);
		user.setModifiedDate(LocalDateTime.now());
		return userRepository.saveAndFlush(user);
	}
	
	// 아이디 중복 검사
	public String checkUsername(String username) {
		if (userRepository.findByUsername(username).isPresent()) {
			return "이미 존재하는 아이디입니다.";
		} else {
			return "사용 가능한 아이디입니다.";
		}
	}
	
	// 닉네임 중복 검사
	public String checkNickname(String nickname) {
		if (userRepository.findByNickname(nickname).isPresent()) {
			return "이미 존재하는 닉네임입니다.";
		} else {
			return "사용 가능한 닉네임입니다.";
		}
	}
	
	// 이메일 중복 검사
	public String checkEmail(String email) {
		if (userRepository.findByEmail(email).isPresent()) {
			return "이미 존재하는 이메일입니다.";
		} else {
			return "사용 가능한 이메일입니다.";
		}
	}
	
	// 닉네임 수정
	public String changeNickname(String nickname, String newNickname) {
		User user = userRepository.findByNickname(nickname).get();
		user.setNickname(newNickname);
		userRepository.saveAndFlush(user);
		return "닉네임이 수정되었습니다.";
	}
	
	// 전체 조회
	public List<User> findAll(){
		return userRepository.findAll();
	}
	
	// 상세 조회
	public User findUser(String nickname) {
		return userRepository.findByNickname(nickname).orElseThrow(() -> {
			return new IllegalArgumentException("회원 정보가 없습니다.");
		});
	}
	
	// 계정 비활성화 (profile)
	public User changeUserActivatedByProfile(String nickname) {
		User user = userRepository.findByNickname(nickname).orElseThrow(() -> new RuntimeException("회원이 아닙니다."));
		user.setActivated(false);
		user.setWithdrawDate(LocalDateTime.now());
		return userRepository.saveAndFlush(user);
	}
	
	// 계정 복구
	public User restoreAccount(String nickname) {
		User user = userRepository.findByNickname(nickname).orElseThrow(() -> new RuntimeException("계정 정보가 없습니다."));
		user.setActivated(true);
		user.setRestoreDate(LocalDateTime.now());
		return userRepository.saveAndFlush(user);
	}
	
	// 회원 탈퇴 (회원 관리)
	public void deleteUser(String nickname) {
		userRepository.deleteByNickname(nickname);
	}
	
	// 회원 정보 분실 시 회원 정보 변경
	public User findUserInfo(String username, String password) {
		User user = userRepository.findByUsername(username).orElseThrow(() -> new IllegalArgumentException("계정 정보가 없습니다."));
		user.setPassword(passwordEncoder.encode(password));
		user.setModifiedDate(LocalDateTime.now());
		return user;
	}
}
