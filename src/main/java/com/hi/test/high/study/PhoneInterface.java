package com.hi.test.high.study;

public interface PhoneInterface {
	// 일반 변수는 안되고, 상수만 허용!!
	// 특정한 값을 클래스 내에서 공유할 목적으로 상수만 허용!
	// int x;
	public final String con = "전화기 협회";

	// 기능만을 정의
	// public abstract로 정의 
	// 추상메서드(불완전한 메서드)
	
	public abstract void call();
	void internet();
	void text();
}
