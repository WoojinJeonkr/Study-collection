package Java100_exam_Part5;

import java.util.ArrayList;

public class Java100_collection_FrameworkArrayListTwoArr {
	public static void main(String[] args) {
		
		// 객체 생성
		ArrayList<Integer[]> arr =  new ArrayList<Integer[]>();
		
		// 요소 추가 --> add()
		arr.add( new Integer[]{ 11, 12, 13, 14 } );
		arr.add( new Integer[]{ 21, 22, 23, 24 } );
		arr.add( new Integer[]{ 31, 32, 33, 34 } );
		
		// 요소 출력
		for( int i=0; i < arr.size(); i++ )
		System.out.println( arr.get(i)[0] ); 
				
		// System.out.println( arr.get(0).size() );		// Error, 컬렉션 프레임워크 타입의 길이를 알고 싶을 때 사용.
		// System.out.println( arr.get(0).length() );		//Error, 문자열의 길이를 알고 싶을 때 사용.
		// System.out.println( arr.get(0).length );		// 배열( int[], Integer[], String[] )의 길이를 알고 싶을 때 사용.
				
		// 전체 요소 출력
		System.out.println( "-------------------------------[전체 요소 출력]" );
		for( int i=0; i < arr.size(); i++ ) {
		for( int j=0; j < arr.get(i).length; j++ )
		System.out.print( arr.get(i)[j] + " " );
		System.out.println();
		}			
		System.out.println( "-------------------------------[전체 요소 출력]" );			
	}
}

