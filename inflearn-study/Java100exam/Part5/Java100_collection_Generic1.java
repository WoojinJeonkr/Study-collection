package Java100_exam_Part5;

class Sample {
	
	private Object obj;
	
	Sample( Object x ) { 
		this.obj = x;
	}
	
	public Object getObj() {
		return obj;
	}
	
	void printInfo() {
		System.out.println( obj.getClass().getName() );  // 객체가 속하는 클래스의 정보를 출력하는 메서드
	}
}

public class Java100_collection_Generic1 {
	public static void main(String[] args) {
		
		Sample s1 = new Sample( "안녕하세요~" );
		System.out.println( s1.getObj() );
		s1.printInfo();
		System.out.println( "----------------------------" );
		
		Sample s2 = new Sample(100);
		System.out.println( s2.getObj() );  
		s2.printInfo();
		System.out.println( "----------------------------" );
		
		Sample s3 = new Sample( new Object() );
		System.out.println( s3.getObj() );
		s3.printInfo();
		System.out.println( "----------------------------" );
		
		// Object str = s1.getObj();  					// 리턴시 반환 타입이 Object 이다.
		// System.out.println( str.length() );  		// Err
		String str = (String)s1.getObj();				
		System.out.println( str.length() );  			
		
		// Object num = s2.getObj();
		// System.out.println( num + 100 );			// Err
		int num = (int)s2.getObj();					
		System.out.println( num + 100 );						
				
	}
}