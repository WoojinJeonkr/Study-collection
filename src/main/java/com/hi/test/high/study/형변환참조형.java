package com.hi.test.high.study;

public class 형변환참조형 {

	public static void main(String[] args) {
		// 주소가 들어가 있음
		// 상속관계에 있는 클래스들만 형변환이 가능

		// byte[] a = {1,2,3};
		// int[] b = a;

		// 부모클래스(크다)
		PhoneClass p = new PhoneClass();
		// 자식클래스(작다)
		PhoneClass a = new AppleKorea();
		PhoneInterface u = new AppleUSA();
		
		p = a; // 자동 형변환(큰 <-- 작, 업캐스팅)
		
		a = (AppleKorea) p; // 강제 형변환(작 <-- 큰, 다운캐스팅)
		u = (AppleUSA) p; // 강제 형변환(작 <-- 큰, 다운캐스팅)

	}

}
