package inflearn_Java_exam;
// 다형성을 사용하여 배열이나 매개변수 활용
class Person {}
class Batman extends Person {}

class Human {}
class Superman extends Human {}

public class Java100_oop_Polymorphism4 {
	public static void main(String[] args) {
		
		// 다형성 사용할 수 없는 경우
		// 배열: 동일한 타입의 데이터를 하나로 묶어서 관리하는 자료구조로 다형성이 없다면 각 객체별로 관리를 해야 한다.
		Person[] persons = new Person[10];		//--- 이건 Person 전용 --;;
		persons[0] = new Person();
		persons[1] = new Person();
		persons[2] = new Batman();
		
		Batman[] batmans = new Batman[10];	//--- 이건 Batman 전용 --;;
		batmans[0] = new Batman();
		batmans[1] = new Batman();
		// batmans[2] = new Person();			//--- Err
		
		
		// 다형성 사용
		Human[] humans = new Human[10];
		humans[0] = new Human();
		humans[1] = new Superman();
		
		
		// 매개변수의 다형성
		// 프로그래밍 언어에서 함수나 메서드를 호출할 때는 그에 맞는 적절한 파라미터를 보내줘야 한다.
		// Object는 가장 최상위 조상(단군 할아버지, 창조주)이므로 어떤 객체를 보내도 그 보다 상위 타입이 된다.
		System.out.println( new Person() );
		System.out.println( new Batman() );
		System.out.println( new Human() );
		System.out.println( new Superman() );
		
		
	}
}
