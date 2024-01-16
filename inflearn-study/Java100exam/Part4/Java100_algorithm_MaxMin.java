package algorithm;
/**
 * 
* @packageName : algorithm
* @fileName : Java100_algorithm_MaxMin.java
* @author : Woojin_Jeon
* @date : 2022.01.11
* @description : 랜덤으로 정수 10개의 값을 갖는 배열을 만들어 최댓값과 최솟값을 같이 출력
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.11   				Woojin_Jeon				  최초 생성
 */
public class Java100_algorithm_MaxMin {
	public static void main(String[] agrs) {
		
		// 정수 배열 선언
		int[] ar = new int[10];
		
		// 반복문을 돌면서 랜덤으로 10개 정수 값을 셋팅
		for( int i=0; i < ar.length; i++ ) {
			ar[i] = (int)(Math.random() * 100); // 무작위로 숫자(double type)를 반환
			System.out.print( ar[i] + " " ); // Math.random()에 의해 난수의 정수 값들이 세팅되므로 실행할 때마다 값이 바뀐다. 
			// System.out.println( (int)(Math.random() * 10) );
		}
		System.out.println();
		
		// 최댓값, 최솟값 변수 초기화
		int max = ar[0], min = ar[0];
		
		// 반복문을 돌면서 최댓값, 최솟값 비교
		for( int i=0; i < ar.length; i++ ) {
			if( max < ar[i] ) max = ar[i];
			if( min > ar[i] ) min = ar[i];
		}
		
		// 출력
		System.out.println( "--------------------------" );
		System.out.println( "ar 배열내 최댓값 : " + max );
		System.out.println( "ar 배열내 최솟값 : " + min );
		System.out.println( "--------------------------" );
		
	}
}
