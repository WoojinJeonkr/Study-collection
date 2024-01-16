package Java100_exam_Part5;

class Person {
	
	public Object obj;
	
	Person( Object obj ) { this.obj = obj; }
}

class Student {
	
	public int grade;

	Student( int grade ) { this.grade = grade; }
}

class Teacher {}

public class Java100_collection_Generic2 {
	public static void main(String[] args) {
		
		Person p1 = new Person( new Student(1) );
		// System.out.println( p1.obj );
		
		Teacher t1 = (Teacher)p1.obj;  // 이 부분은 컴파일 단계에서는 에러가 안나고, 실행하는 단계에서 ClassCast 오류가 발생한다.
				
	}
}
