package Java100_exam_Part5;

import java.util.ArrayList;
import java.util.Iterator;

public class Java100_collection_FrameworkArrayListWithIteratorWhyUse {
	public static void main(String[] args) {
		
		// 객체 생성
		ArrayList<Integer> list = new ArrayList<>();
		
		
		// 요소 추가
		list.add( 1 );
		list.add( 2 );
		list.add( 3 );
		list.add( 4 );
		
		
		// Iterator(반복자) 객체 생성
		Iterator<Integer> iter = list.iterator();
		
		
		// 출력 --> 요소 삭제 전
		for( Integer num : list )
			System.out.print( num + " " );
		System.out.println();
		
		
		// 요소 삭제 --> 반복문 없이 한 개의 요소만 삭제
		// System.out.println( list.get(1) );		
		// list.remove( 1 );						
		// System.out.println( list.get(1) );		
		
		
		// 요소 삭제 --> while 반복문 사용
		System.out.println( "---------------------------------" );		
		// for( Integer i : list ) {
			// if( i == 2 )
				// list.remove( i );
		// }
		
		while( iter.hasNext() ) {
			Integer i = iter.next();
			if( i == 3 ) {
				iter.remove();
				System.out.println( i + "번 삭제" );
			}
		}				
		System.out.println( "---------------------------------" );
		
		
		// 출력 --> 요소 삭제 후
		for( Integer num : list )
			System.out.print( num + " " );
		System.out.println();
		
	}
}