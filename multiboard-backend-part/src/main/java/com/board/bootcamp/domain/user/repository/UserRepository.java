package com.board.bootcamp.domain.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	void deleteByNickname(String nickname);
	
	@EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByUsername(String username);
	Optional<User> findByNickname(String nickname);
	Optional<User> findByEmail(String email);
	Object findByUsername(Optional<String> currentUsername);
}
