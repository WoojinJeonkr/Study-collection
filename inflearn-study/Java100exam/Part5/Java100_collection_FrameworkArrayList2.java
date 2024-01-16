package Java100_exam_Part5;

import java.util.ArrayList;

public class Java100_collection_FrameworkArrayList2 {
	public static void main(String[] args) {
		
		// ArrayList 객체 생성
		ArrayList<String> ar = new ArrayList<String>();
				
		// 추가
		ar.add( "홍길동" );
		ar.add( "이순신" );
		ar.add( "강감찬" );
		ar.add( "을지문덕" );
		ar.add( "김유신" );
		System.out.println( ar.get(3) );  		
		String str = ar.get(0);					
		
		// 수정 --> set( 인덱스, 수정값 )
		ar.set( 3, "징키스칸" );
		System.out.println( ar.get(3) );		
		
		// 삭제
		ar.remove( 3 );
		System.out.println( "--------------------[삭제 후 출력]" );
		System.out.println( ar.get(0) );		
		System.out.println( ar.get(1) );		
		System.out.println( ar.get(2) );		
		System.out.println( ar.get(3) ); 		
		System.out.println( "--------------------[삭제 후 출력]" );
		
		// 출력1
		for( String str1 : ar )
			System.out.print( str1 + " " );
		System.out.println();
		
		// 출력2
		for( int i=0; i < ar.size(); i++ )
			System.out.printf( "%d번 학생의 이름은 %s 입니다.%n", (i+1), ar.get(i) );
			// System.out.println( ar.get(i) );
			
		// removeAll( 배열명 ): 한꺼번에 삭제
		ar.removeAll( ar );
		System.out.println( ar.size() );  		
		System.out.println( "--------------------[전체 삭제 후 출력" );
		for( String str2 : ar )
			System.out.println( str2 );
		System.out.println( "--------------------[전체 삭제 후 출력]" );
		
	}
}