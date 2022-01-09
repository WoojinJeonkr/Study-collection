package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_MethodCall1.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 자바의 기본형 타입과 참조형 타입의 다양한 메서드 호출 방식
- Call by value: 값에 의해서 메서드 호출
- 메서드로 인자값을 넘길 때 해당 값을 복사하여 넘기는 방식
- 즉, sum() 메서드 내부에서는 복사된 값으로 처리
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
 */
public class Java100_method_MethodCall1 {

	// 값에 의한 호출
	public static void sum(int a) {
		a = a+400;
		System.out.println(a); // a = 500
	}
	public static void main(String[] args) {
		// 변수 선언 및 메서드 호출
		int a = 100;
		sum(a);
		
		// 출력
		System.out.println(a); // a = 100
	}

}
