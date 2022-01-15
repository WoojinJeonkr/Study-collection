package inflearn_Java_exam;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_Overriding.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 클래스 상속에서 메서드 오버라이딩 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
*/
class Person {
	// 변수
	int gender;
	int power;
	
	// 생성자
	Person() {
		this.gender = 1; // 1: 남성, 2: 여성
		this.power = 100; // 기본파워
	}
	
	// 메서드
	void walk() {
		System.out.println( "걸어가고 있어요~" );
	}
}

class Hero extends Person {
	// 변수
	String name;
	int age;
	
	// 생성자
	Hero() {}
	Hero( String name, int age ) {
		super();
		this.name = name;
		this.age = age;
	}
	
	// 메서드
	void walk() {
		System.out.println( "2배로 빨리 걸어가고 있어요~" );
	}
	
	void eat() {
		System.out.println( "밥먹고 있어요~" );
	}
	
	void displayPerson() {
		System.out.println( "이름 : " + name  + ", 나이 : " + age + ", 성별 : " + gender + ", 파워 : " + power );
	}
}

class Villain {}

public class Java100_oop_Overriding {
	public static void main(String[] args) {
		
		// 객체 생성
		Person p1 = new Person();
		p1.walk();
		// p1.eat(); // Err
		
		// 상속을 통한 슈퍼맨 객체 생성
		Hero h1 = new Hero( "슈퍼맨", 20 );
		System.out.println( h1.name );
		System.out.println( h1.age );
		System.out.println( h1.gender );	 
		System.out.println( h1.power );	 
		h1.walk(); // 메서드 오버라이딩
		h1.eat();
		h1.displayPerson();
		
		// 원더우먼 객체 생성
	 	Hero h2 = new Hero( "원더우먼", 30 );
		h2.displayPerson();
		h2.gender = 2;
		h2.power = 300;
		h2.displayPerson();
		h2.walk();
		
	}
}
