package inflearn_Java_exam;
/**
 * 
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_001.java
* @author : Woojin_Jeon
* @date : 2022.01.08
* @description : 반환값이 없고 받는 인자값이 없는 메서드를 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.08  				 Woojin_Jeon			  최초 생성
 */
public class Java100_method_Exam001 {

	// 만들어 놓을 수는 있지만 메서드를 호출해서 사용하지 않았으므로 동작하지 않는다.
	public static void helloWorld() {
		System.out.println("hello, World~");
	}
	// 메서드 실행
	public static void showMenu() {
		System.out.println("ShowMenu() 메서드가 호출되었습니다.");
	}
	// 메서드 호출
	public static void main(String[] args) {
		showMenu();
		// helloWorld(); 
	}
	
}
