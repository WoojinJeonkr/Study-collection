package inflearn_Java_exam;
// 다형성의 관계에서 부모, 자식 클래스 자원 사용
class Person {
	String str1 = "난 부모 클래스";
	void method1() { System.out.println("에이에이에이"); }
	void ppp() { System.out.println("ppp"); }
}

class Student extends Person {
	String str2 = "난 자식 클래스";
	void method1() { System.out.println("오버라이딩 - AAA"); }
	void sss() { System.out.println("sss"); }
	void x() {
		method1();
		super.method1();
	}
}

public class Java100_oop_Polymorphism1 {
	public static void main(String[] args) {
		
		// 객체 생성
		// 자식 클래스에서 오버라이딩된 부모 클래스의 원본 메서드를 호출하고 싶다면? super 사용.
		Student s1 = new Student();
		System.out.println("------------------------[super 사용]");
		s1.x();
		System.out.println("------------------------[super 사용]");

		// 객체 생성 
		// 자식의 메서드를 바로 호출하고 싶다면? 캐스트 필요.
		Person s2 = new Student();
		System.out.println("------------------------[캐스트 사용]");
		((Student) s2).sss();
		System.out.println("------------------------[캐스트 사용]");
		
	}
}
