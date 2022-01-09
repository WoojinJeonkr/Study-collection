package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_Exam002.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 클래스 만들기
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
*/
class FarmMachine {
	
	int price; // 가격
	int year; // 연식
	String color; // 색상
	
	void move() {
		System.out.println("Farm-machine is moving.");
	}
	
	void dig() {
		System.out.println("Fram-machine is digging.");
	}
	
	void grind() {
		System.out.println("Farm-machine is grinding.");
	}
	
}

public class Java100_oop_Exam001 {
	public static void main(String[] args) {
		
		// 객체 생성
		FarmMachine fm = new FarmMachine();
		System.out.println( fm ); // fm의 주소값 출력
		
		// 속성 값 입력
		fm.price = 1000000;
		fm.year = 2020;
		fm.color = "red";
		
		// 속성 값 출력
		System.out.println(fm.price); // fm.price에 저장된 값 출력
//		String fm_price = String.format( "%,d", 1000000 );
//		System.out.println( String.format( "%,d", fm.price ) );
		System.out.println(fm.year); // fm.year에 저장된 값 출력
		System.out.println(fm.color); // fm.color에 저장된 값 출력
		
		// 동작 수행
		fm.move();
		fm.dig();
		fm.grind();
 		
	}
}