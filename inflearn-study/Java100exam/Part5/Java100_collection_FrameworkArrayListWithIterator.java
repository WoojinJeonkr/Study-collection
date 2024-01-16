package Java100_exam_Part5;

import java.util.ArrayList;
import java.util.Iterator;

public class Java100_collection_FrameworkArrayListWithIterator {
	public static void main(String[] args) {
		
		// 객체 생성
		ArrayList<String> list = new ArrayList<>();
		
		// 요소 추가
		list.add( "Alligator" );
		list.add( "Hippo" );
		list.add( "Ostrich" );
		list.add( "Donkey" );
		
		// Iterator(반복자) 객체 생성 --> 객체 생성 과정도 중요!
		// System.out.println( hasNext() );  				// Err
		// Collection 인터페이스 --> iterator() 메서드를 정의하고 있고 --> 이를 상속받는게 List, Set 인터페이스이므로,
		// List, Set 인터페이스를 상속받아 구현한 클래스들 객체를 통해서 iterator() 메서드를 사용할 수 있음.
		Iterator<String> iter = list.iterator();
		
		// Iterator(반복자) 메서드 사용 --> hasNext(), next(), remove()
		// System.out.println( iter.hasNext() );			// true
		// System.out.println( iter.next() );				// Alligator
		// System.out.println( iter.hasNext() );			// true
		// System.out.println( iter.next() );				// Hippo
		// System.out.println( iter.hasNext() );			// true
		// System.out.println( iter.next() );				// Ostrich
		// System.out.println( iter.hasNext() );			// true
		// System.out.println( iter.next() );				// Donkey
		// System.out.println( iter.hasNext() );			// false
		// System.out.println( iter.next() );				// Err
		
		// 요소 출력
		for( String s : list )
			System.out.println( s );
		
		// 요소 출력, while 반복문 사용
		System.out.println( "--------------------------------[Iterator(반복자)로 출력]" );
		while( iter.hasNext() ) {
			String str = iter.next();
			if( "Hippo".equals(str) ) {
				iter.remove();
				System.out.println( "하마 삭제" );
			}
			// System.out.println( iter.next() );
		}
		System.out.println( "--------------------------------[Iterator(반복자)로 출력]" );
		
		for( String s : list )
			System.out.println( s );
		
	}
}