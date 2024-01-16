package com.hi.test.high.study;

public abstract class AppleClass extends PhoneClass {
	// 일반 메서드 3개를 이미 가지고 시작
	// call(), internet(), text()

	// 한국과 미국의 구체적인 구현이 달라질 예정이고
	// 기능에 대한 정의는 꼭 필요한 경우.
	// pay() 기능이 꼭 있어야 함을 명시..!!
	// 추상 메서드 ==> 불완전한 메서드
	// 추상 메서드를 하나라도 가지고 있는 클래스면
	// 이 클래스는 불완전하다고 판단 ==> 객체 생성 불가!!
	// 추상 메서드를 하나라도 포함한 클래스 = 불완전한 클래스 = 추상 클래스
	// 인터페이스가 아닌 클래스 내에서 추상 메서드를 쓰는 경우에는
	// public abstract를 생략할 수 없다
public abstract void pay();
}