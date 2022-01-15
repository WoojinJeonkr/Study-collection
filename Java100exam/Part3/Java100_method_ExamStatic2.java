package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_ExamStatic2.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : static 선언이 없는 메서드 사용 방법
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09  				 Woojin_Jeon  			  최초 생성
 */
public class Java100_method_ExamStatic2 {

	public void helloWorld() {
		System.out.println("Hello, World~ ^_^");
	}
	
	public static void main(String[] args) {
		// 오류: 메인 메서드는 static 메서드만 호출할 수 있다.
		//helloWorld();
	
		// 객체 생성 후 메서드 호출
		Java100_method_ExamStatic2 jes = new Java100_method_ExamStatic2();
		jes.helloWorld();
	}

}
