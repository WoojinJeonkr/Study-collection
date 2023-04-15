package com.board.bootcamp.domain.user.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.board.bootcamp.domain.user.entity.User;
import com.board.bootcamp.domain.user.service.UserService;
import com.board.bootcamp.domain.user.token.TokenDto;
import com.board.bootcamp.global.jwt.JwtFilter;
import com.board.bootcamp.global.jwt.TokenProvider;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Users", description = "회원 기능 API")
@RequiredArgsConstructor
@RequestMapping("/api/user")
@RestController
public class UserController {

	private final UserService userService;
	private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
	
	@Operation(operationId = "userCreate", summary = "일반회원 회원가입", description = "일반회원 회원가입")
	@PostMapping("/user/signup")
    public User registerUser(@RequestParam String username, @RequestParam String password,
    		@RequestParam String nickname, @RequestParam String email) {
        return userService.registerUser(username, password, nickname, email);
    }
	
	@Operation(operationId = "userUpdate", summary = "일반회원 정보수정", description = "일반회원 정보수정")
	@PutMapping("/user/update")
	public User updateUser(@RequestParam String username, @RequestParam String password, 
			@RequestParam String nickname, @RequestParam String email) {
		return userService.update(username, password, nickname, email);
	}
	
	@Operation(operationId = "adminCreate", summary = "관리자 회원가입", description = "관리자 회원가입")
	@PostMapping("/admin/signup")
    public User registerAdmin(@RequestParam String username, @RequestParam String password,
    		@RequestParam String nickname, @RequestParam String email) {
        return userService.registerAdmin(username, password, nickname, email);
    }
	
	@Operation(operationId = "adminUpdate", summary = "관리자 정보수정", description = "관리자 정보수정")
	@PutMapping("/admin/update")
	public User updateAdmin(@RequestParam String username, @RequestParam String password, 
			@RequestParam String nickname, @RequestParam String email) {
		return userService.update(username, password, nickname, email);
	}
	
	@Operation(operationId = "loginUser", summary = "로그인", description = "아이디와 비밀번호로 로그인하여 토큰 부여")
	@PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestParam String username, @RequestParam String password) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(username, password);

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }

	// 현재 인증 정보의 username을 기준으로 유저 정보 및 권한 정보 리턴
	@Operation(operationId = "findUserinfo", summary = "현재 유저 정보 검색", description = "현재 유저 정보 검색")
	@GetMapping("/find/userinfo")
	public ResponseEntity<Optional<User>> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(userService.getMyUserWithAuthorities());
    }
	
	@Operation(operationId = "CheckUsername", summary = "아이디 중복 검사", description = "아이디 중복 검사")
	@GetMapping("/checkUsername")
	public String validateUsername(@RequestParam String username) {
		return userService.checkUsername(username);
	}
	
	@Operation(operationId = "CheckNickname", summary = "닉네임 중복 검사", description = "닉네임 중복 검사")
	@GetMapping("/checkNickname")
	public String validateNickname(@RequestParam String nickname) {
		return userService.checkNickname(nickname);
	}
	
	@Operation(operationId = "CheckEmail", summary = "이메일 중복 검사", description = "이메일 중복 검사")
	@GetMapping("/checkEmail")
	public String checkEmail(@RequestParam String email) {
		return userService.checkEmail(email);
	}
	
	@Operation(operationId = "findAll", summary = "전체 회원 조회", description = "전체 회원 조회")
	@GetMapping("/find/all")
    public List<User> findAll() {
        return userService.findAll();
    }
	
	@Operation(operationId = "findDetail", summary = "회원 상세 조회", description = "닉네임으로 회원 상세 조회")
	@GetMapping("/find/detail/{nickname}")
    public User findUser(@PathVariable("nickname") String nickname) {
        return userService.findUser(nickname);
    }
	
	@Operation(operationId = "changeNickname", summary = "닉네임 수정", description = "회원 관리 페이지에서 관리자가 닉네임 수정")
	@PutMapping("/change/{nickname}")
	public String changeNickname(@PathVariable String nickname, @RequestParam String newNickname) {
		return userService.changeNickname(nickname, newNickname);
	}
	
	@Operation(operationId = "deactivatedUser", summary = "회원 탈퇴", description = "닉네임을 통해 계정 비활성화(회원 탈퇴)")
	@PutMapping("/deactivate/{nickname}")
	public void deactivatedUser(@PathVariable String nickname) {
		userService.changeUserActivatedByProfile(nickname);
	}
	
	@Operation(operationId = "restoreAccount", summary = "계정 복구", description = "계정 복구")
	@PutMapping("/restore/{nickname}")
	public void restoreUser(@PathVariable String nickname) {
		userService.restoreAccount(nickname);
	}
	
	@Operation(operationId = "deleteUser", summary = "회원 삭제", description = "닉네임으로 회원 삭제")
	@DeleteMapping("/delete/{nickname}")
	public void deleteUser(@PathVariable String nickname) {
		userService.deleteUser(nickname);
	}
	
	@Operation(operationId = "modifyUserInfo", summary = "회원 정보 검색 후 변경", description = "계정 정보 분실 시 회원 정보 검색 후 비밀번호 변경")
	@PutMapping("/modifyUserInfo")
	public User modifyUser(String username, String password) {
		return userService.findUserInfo(username, password);
	}
}
