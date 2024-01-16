package inflearn_Java_exam;
// 문자열을 숫자로 변환시 진수를 지정해서 출력
public class Java100_oop_parseInt {
	public static void main(String[] args) {
		
		// 숫자끼리의 연산
		int a = 1;
		int b = 2;
		int c = a + b;
		System.out.println("a + b = " + c); // 3
		
		// 문자열끼리의 연산
		String a1 = "1";
		String b1 = "2";
		String c1 = a1 + b1;
		System.out.println("a1 + b1 = " + c1); // 12
		System.out.println(c1.getClass().getName());
		
		// 문자열은 숫자로 변환 후 연산
		int a2 = Integer.parseInt(a1);
		int b2 = Integer.parseInt(b1);
		System.out.println(a2 + b2); // 3
		
		// 진수 지정
		System.out.println( "-----------------------------[진수 지정]" );
		
		System.out.println(Integer.parseInt("2022"));		// 2022
		System.out.println(Integer.parseInt("2022", 10));	// 2022
		System.out.println(Integer.parseInt("1", 2));		// 1
		System.out.println(Integer.parseInt("1001", 2));	// 9
		System.out.println(Integer.parseInt("1004", 8));	// 516
		System.out.println(Integer.parseInt("A", 16));		// 10
		System.out.println(Integer.parseInt("D", 16));		// 13
		System.out.println(Integer.parseInt("FF", 16));		// 255
		
		System.out.println( "-----------------------------[진수 지정]" );
		
	}
}
