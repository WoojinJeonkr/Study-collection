package inflearn_Java_exam;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_method_ExamStatic1.java
* @author : Woojin_Jeon
* @date : 2022.01.08
* @description : 자바의 메서드 구현 시 기본적인 주의점
* 메서드란?
  1) 다른 언어에서의 함수와 마찬가지로 어떤 특정한 동작이나 처리를 하도록 만들어진 코드 단위
  2) 반복적인 작업을 처리해야 하는 경우 메서드로 만들어놓으면 이후에 필요할 때 다시 재사용할 수 있어서 아주 유용
  3) 호출 시 어떤 결과를 반환하기도 하지만, 결과를 반환하지 않는 메서드도 있음
  4) 호출 시 어떤 인자 값들을 넘겨서 호출하는 경우도 있지만, 인자값 없이 호출하는 경우도 있음
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.08  				 Woojin_Jeon			  최초 생성
*/
public class Java100_method_ExamStatic1{
	// static이 없으면 오류가 나온다.
	public static void helloWorld() {
		System.out.println("Hello, World~ ^_^");
	}
	// 메서드 호출
	public static void main(String[] args) {
		helloWorld();
	}
}
