package algorithm;
/**
 * 
* @packageName : algorithm
* @fileName : Java100_algorithm_MaxAlgorithm.java
* @author : Woojin_Jeon
* @date : 2022.01.11
* @description : 정수로 이루어진 배열에서 가장 큰 값/작은 값을 구하는 최댓값/최솟값 알고리즘 구현
* =========================================================================
* DATE                         AUTHOR                  NOTE
* -------------------------------------------------------------------------
* 2022.01.11   				Woojin_Jeon				  최초 생성
 */
public class Java100_algorithm_MaxMinAlgorithm {
	public static void main(String[] agrs) {
		
		// 배열 선언
		int[] ar = { 4, 13, 150, 17, -2 };
		
		// max, min 함수
		System.out.println( Math.max( 10, 4 ) ); // 10
		System.out.println( Math.min( 10, 4 ) ); // 4
		
		// 일단 배열내 첫번째 원소의 값이 제일 크다고 가정하고 초기화
		// int max = Integer.MIN_VALUE;
		int max = ar[0];
		
		/*
		 // 일단 배열내 첫번째 원소의 값이 제일 작다고 가정하고 초기화
		 // int min = Integer.MAX_VALUE;
		 int min = ar[0];
		*/
		
		// 반복문 돌면서 비교하여 출력 --> 이때, 비교는 2번째 부터 비교하면 되니깐 int i=1로 시작.
		System.out.println( "현재 배열내 가장 큰 값은 : " + max ); // 4
		//  System.out.println( "현재 배열내 가장 작은 값은 : " + min );
		
		for( int i=1; i < ar.length; i++ )
			if( max < ar[i] )
				max = ar[i];
		/*
		 for( int i=1; i < ar.length; i++ )
			if( min > ar[i] )
				min = ar[i];
		*/
		
		System.out.println( "현재 배열내 가장 큰 값은 : " + max ); // 150
		// System.out.println( "현재 배열내 가장 작은 값은 : " + min );
	}
}
