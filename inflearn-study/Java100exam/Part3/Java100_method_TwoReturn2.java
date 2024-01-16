package inflearn_Java_exam;

import java.util.Arrays;

/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_TwoReturn2.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 반환값이 2개 있는 메서드 구성
- 메서드는 ("korea","USA") 입력시 소문자는 대문자로 대문자는 소문자로 출력되도록 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
*/
public class Java100_method_TwoReturn2 {

	public static String[] capitalMethod(String a, String b) {
		// 변수 대문자로, 소문자로 변환
		String a_ = a.toUpperCase(); // a_를 대문자로 변환
		String b_ = b.toLowerCase(); // b_를 소문자로 변환
		
		// 리턴 값 2개를 저장할 배열 변수 선언
		String [] ret = {a_,b_};
		return ret;
	}
	public static void main(String[] args) {
		// 변수 result를 문자형 배열 capitalMethod("korea","USA")로 선언
		String[] result = capitalMethod("korea","USA");
		// 출력
//		System.out.println(result); // 주소값 출력
		System.out.println(result[0]); // 배열의 첫번째 값 출력, KOREA
		System.out.println(result[1]); // 배열의 두번째 값 출력, usa
		System.out.println(result[0]+"-"+result[1]); // KOREA-usa로 출력
		System.out.println(Arrays.toString(result)); // 배열 한 눈에 보기
	}

}
