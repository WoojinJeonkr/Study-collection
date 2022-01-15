package inflearn_Java_exam;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_ObjArray.java
* @author : Woojin_Jeon
* @date : 2022.01.10
* @description :
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.10   				 Woojin_Jeon   		 	  최초 생성
 */
class Person {
	
	private String name;
	private int age;
	
	Person() {}
	Person( String name, int age ) {
		this.name = name;
		this.age = age;
	}
	
	public String getName() { return name; }
	public void setName( String name ) { this.name = name; }
	
	public int getAge() { return age; }
	public void setAge( int age ) { this.age = age; }
}

public class Java100_oop_ObjArray {
	public static void main(String[] args) {
		
		// 객체 생성
		int[] ar1 = { 1, 2, 3, 4, 5 };
		char[] ar2 = { 'A', 'B', 'C', 'D', 'E' };	
		Person[] pa = new Person[5];
		pa[0] = new Person( "홍길동", 20 );
		pa[1] = new Person( "박길동", 21 );
		pa[2] = new Person( "김길동", 22 );
		pa[3] = new Person( "장길동", 23 );
		pa[4] = new Person( "고길동", 24 );		
		
		// 출력
		for( int i=0; i < pa.length; i++ ) {
			// System.out.print( pa[i].name + "\t\t" );
			System.out.print( pa[i].getAge() + "\t\t" );
		}
		System.out.println();
		
	}
}
