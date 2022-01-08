package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_Exam004.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : 반환값이 있고 인자값이 있는 대문자 출력 메서드
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				  Woojin_Jeon 			   최초 생성
 */
public class Java100_method_Exam004 {

	public static String capitalMethod(String str) {
		// 소문자 출력
//		String ret = str;// 문자열 변수 선언
//		return ret; // ret를 반환
		
		// 대문자 출력
		String ret = str.toUpperCase();// 문자열 변수 선언, str.toUpperCase(): str을 대문자로 변환
		return ret; // ret를 반환
	}
	
	public static void main(String[] args) {
		
		// 문자열 변수 선언
		String rst; // 문자열 rst 선언
		rst = capitalMethod("korea"); // capitalMethod("korea")의 값을 rst에 저장
		
		// 출력
		System.out.println("입력한 소문자의 대문자는 = "+ rst);

	}

}
