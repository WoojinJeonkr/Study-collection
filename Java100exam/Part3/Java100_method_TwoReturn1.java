package inflearn_Java_exam;

import java.util.Arrays;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_MethodCall3.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description :
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
 */
public class Java100_method_TwoReturn1 {

	public static int[] testMethod() {
		int num1 = 100;
		int num2 = 200;
		int num3 = 300;
		return new int[] {num1, num2, num3};
	}
	public static void main(String[] args) {
		int result[] = testMethod();
		
		System.out.println(result[0]+"-"+result[1]); // 100-200 으로 각각 출력
		System.out.println(result[0]+result[1]); // 값이 더해져서 출력
		System.out.println(result); // 주소값 출력
		System.out.println(Arrays.toString(result)); // 한 번에 모든 요소 출력 (반복문x)
	}

}
