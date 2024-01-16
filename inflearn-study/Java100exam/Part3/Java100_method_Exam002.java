package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_Exam002.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 반환값이 없고 받는 인자값이 2개 있는 덧셈 메서드 구현
- 메서드가 받는 인자값이 있다는 것은 호출부에서 파라미터 값을 넘긴다는 뜻
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				Woojin_Jeon				  최초 생성
 */
public class Java100_method_Exam002 {
	public static void plusMethod(int a, int b) { // 변수 a, b를 정수로 받음
		// 단순 출력
		System.out.printf("인자로 넘겨받은 2개의 값은 %d과 %d입니다.",a,b);
		// System.out.printf("인자로 넘겨받은 2개의 값은 "+a+"과 "+b+"입니다.");
	
		// 연산 출력
		int rst = a+b;
		System.out.println("두 수를 더한 값은 ="+rst);
	}
	public static void main(String[] args) {
		int a = 100, b =200; // 변수 2개 선언
		plusMethod(a,b); // plusMethod 호출 시 a, b를 넘겨줌
	}
}
