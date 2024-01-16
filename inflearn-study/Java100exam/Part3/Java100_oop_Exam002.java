package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_Exam002.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 객체 생성시 초깃값을 생성자 메서드에서 설정하는 클래스 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
 */
class Person {
	
	// 변수 생성
	int age; // 나이
	String name; // 이름
	
	// 생성자
	Person() {}
	Person( int age, String name ) {
		this.age = age;
		this.name = name;
	}
	
	// 메서드
	void printPerson() {
		System.out.println("나이 : "+age+", 이름 : "+name);
	}
	
}

public class Java100_oop_Exam002 {
	public static void main(String[] args) {
		
		// 객체 생성
		Person p1 = new Person(20, "홍길동");
		// System.out.println(p1);
		// System.out.println(p1.age); // 20
		// System.out.println(p1.name); // 홍길동
		p1.printPerson();
		
		Person p2 = new Person(30, "이순신");
		p2.printPerson();
		
		Person p3 = new Person(40, "을지문덕");
		p3.printPerson();
		
	}
}
