package inflearn_Java_exam;
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
class TestNumber{
	int num;
	TestNumber(int num){this.num = num;} // this: 클래스의 객체가 생성될 때의 객체를 의미 
}
public class Java100_method_MethodCall3 {

	public static void sum(TestNumber a) {
		System.out.println("sum()이라는 메서드 안에서의 a값: "+a); // a값(TestNumber 주소) 출력
		System.out.println(a.num); // 100
		a.num = a.num + 400; // a.num = 100 + 400
		System.out.println(a.num); // 500
	}
	public static void main(String[] args) {
		// 객체 변수 선언
		TestNumber a = new TestNumber(100);
		sum(a);
		System.out.println("---");
		System.out.println(a.num); // 처음에는 100이었지만 추후 500으로 변경

	}

}
