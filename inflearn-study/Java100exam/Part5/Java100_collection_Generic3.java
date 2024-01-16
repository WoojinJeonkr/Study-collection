package Java100_exam_Part5;

class Sample<T> {
	private T obj;
	Sample( T x ) { this.obj = x; }
	T getObj() { return obj; }
	void printInfo() { System.out.println( obj.getClass().getName() ); }
}

public class Java100_collection_Generic3 {
	public static void main(String[] args) {

		Sample<String> s1 = new Sample<String>( "안녕하세요~" );
		System.out.println( s1.getObj() );
		s1.printInfo();
		System.out.println( "-------------------------------" );
		
		Sample<Integer> s2 = new Sample<Integer>(100);
		System.out.println( s2.getObj() );
		s2.printInfo();
		System.out.println( "-------------------------------" );

		// String str = s1.getObj();
		// System.out.println( str.length() );  			
		System.out.println( s1.getObj().length() );  		
		System.out.println( s2.getObj() + 100 );			
		
	}
}
