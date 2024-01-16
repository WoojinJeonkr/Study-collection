package com.board.bootcamp.domain.policy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.board.bootcamp.domain.policy.entity.Policy;

public interface PolicyRepository extends JpaRepository<Policy, Long> {

}
