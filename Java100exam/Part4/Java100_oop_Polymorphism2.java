package inflearn_Java_exam;
//추상 클래스와 상속 사용
abstract class Car {
	abstract void run();
}

class Ambulance extends Car {
	void run() { System.out.println( "앰블런스 지나가요~ 삐뽀삐뽀~" ); }
}

class Cultivator extends Car {
	void run() { System.out.println( "경운기 지나가요~ 덜컹덜컹~" ); }
}

class SportsCar extends Car {
	void run() { System.out.println( "스포츠카 지나가요~ 씽~" ); }
}

public class Java100_oop_Polymorphism2 {
	public static void main(String[] args) {
		
		// [1] : 객체 생성
		Car c1 = new Ambulance();	// 정상
		Car c2 = new Cultivator();	// 정상
		Car c3 = new SportsCar();	// 정상
		
		// [2] : run() 메서드 호출
		c1.run();
		c2.run();
		c3.run();
		
	}
}