package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_Exam003.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 반환값이 있고 받는 인자값이 없는 메서드 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09  				 Woojin_Jeon  			   최초 생성
 */
public class Java100_method_Exam003 {

	public static int returnMethod() {
		int ret = 100;
		ret *= 100; // int = int * 100 = 100 * 100
		return ret; // return되는 값은 10000
	}
	
	public static void main(String[] args) {
		
		// 변수 선언
		int rst; // rst라는 변수를 정수형으로 선언
		rst = returnMethod(); // returnMethod()의 결과값을 rst가 저장
		
		// 출력
		System.out.println("메서드 호출에 따른 리턴된 값은="+rst);
	}

}
