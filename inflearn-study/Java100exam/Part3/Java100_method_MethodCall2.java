package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_MethodCall2.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 메인 메서드에서 100을 보냈을 때 값이 수정되게끔
 				 Call by reference 방식으로 코드 수정
- Wrapper 클래스의 Integer 클래스 타입으로 변수 a 설정
- new로 객체를 생성하여 해당 주소 값을 메서드로 보냄
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
 */
public class Java100_method_MethodCall2 {

	public static void sum(int[] a) {
		System.out.println(a);
	}
	public static void main(String[] args) {
		// 변수 선언 및 호출
		int[] a = new int[100];
		sum(a);
		
		// 출력
		System.out.println(a);
	}

}
