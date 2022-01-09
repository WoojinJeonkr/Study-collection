package inflearn_Java_exam;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_ObjArray2.java
* @author : Woojin_Jeon
* @date : 2022.01.10
* @description :
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.10   				 Woojin_Jeon   		 	  최초 생성
*/
class Person {
	// 변수 생성
	private String name;
	private int age;
	
	// 생성자
	Person() {}
	Person( String name, int age ) {
		this.name = name;
		this.age = age;
	}
	
	// 메서드
	public String getName() { return name; }
	public void setName( String name ) { this.name = name; }
	
	public int getAge() { return age; }
	public void setAge( int age ) { this.age = age; }
}

public class Java100_oop_ObjArray2 {
	public static void main(String[] args) {
		
		// 객체 생성
		Person[] pa;				// Person 타입의 객체 배열 변수 pa 선언.
		pa = new Person[5];		// Person 객체의 참조값을 원소로 가지는 배열 공간을 5개 생성 --> 5명 객체 생성할테니 주소 저장해라.
		
		// 반복문(for)을 돌면서 Person() 객체 생성
		for( int i=0; i < pa.length; i++ ) {
			pa[i] = new Person( i+"번 후보자", i+20 );  // i만 입력하면 안되나 문자열을 붙이면 문자열로 전달.
			
			// getter, setter 메서드 사용해서 출력
			System.out.println( pa[i].getName() + " --> 나이 : " + pa[i].getAge() );
			
			// 배열 인덱스 사용해서 출력 --> 단, 이렇게 쓰려면 private 선언을 삭제하고 써야함.
			// System.out.println( pa[i].name + "의 나이는 " + pa[i].age + "살 입니다." );
			
			// printf()
			// System.out.printf( "%s의 나이는 %d살 입니다.%n", pa[i].name, pa[i].age );
		}
		
	}
}