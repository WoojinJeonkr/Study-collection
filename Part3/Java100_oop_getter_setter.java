package inflearn_Java_exam;
/**
* @packageName : inflearn_Java_exam
* @fileName : Java100_oop_getter_setter.java
* @author : Woojin_Jeon
* @date : 2022.01.09
* @description : getter, setter가 포함된 클래스의 상속을 코드로 구현
* ===============================================================
* DATE                         AUTHOR                  NOTE
* ---------------------------------------------------------------
* 2022.01.09   				 Woojin_Jeon   		 	  최초 생성
*/
class Person {
	// 변수
	private String name;
	private int age;
	private int height;
	private int weight;
	
	// 생성자
	Person() {}
	Person( String name, int age, int height, int weight ) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}
	
	// 메서드
	public String getName() { return name; }
	public void setName( String name ) { this.name = name; }
	
	public int getAge() { return age; }
	public void setAge( int age ) { this.age = age; }
	
	public int getHeight() { return height; }
	public void setHeight( int height ) { this.height = height; }
	
	public int getWeight() { return weight; }
	public void setWeight( int weight ) { this.weight = weight; }
	
	public void move() {
		System.out.println( "이동중.." );
	}
}

class Villain extends Person {
	// 변수
	private String unique_key;
	private int weapon;			// 1~9 숫자로 무기 분류 --> 1: 창, 2: 방패, 3: 총..
	private double power;
	
	// 생성자
	Villain() {}
	Villain( String name, int age, int height, int weight, String unique_key, int weapon, double power ) {
		super( name, age, height, weight );
		this.unique_key = unique_key;
		this.weapon = weapon;
		this.power = power;
	}
	
	// 메서드
	public String getUnique_key() { return unique_key; }
	public void setUnique_key( String unique_key ) { this.unique_key = unique_key; }
	
	public int getWeapon() { return weapon; }
	public void setWeapon( int weapon ) { this.weapon = weapon; }
	
	public double getPower() { return power; }
	public void setPower( double power ) { this.power = power; }
	
	// printPerson()
	public void printPerson() {
		System.out.println( "---------------------------------" );
		System.out.println( "악당 이름 : " + getName() );
		System.out.println( "악당 나이 : " + getAge() );
		System.out.println( "악당의 키 : " + getHeight() );
		System.out.println( "악당 체중 : " + getWeight() );
		System.out.println( "악당 넘버 : " + getUnique_key() );
		System.out.println( "악당 무기 : " + getWeaponName( getWeapon() ) );  // 숫자(1~9) --> 1: 창, 2: 방패, 3: 총..
		System.out.println( "악당 파워 : " + getPower() );
		System.out.println( "---------------------------------" );
	}
	
	// getWeaponName()
	public String getWeaponName( int a ) {
		String weapon;
		switch( a ) {
			case 1: 
				weapon = "창";
				break;
			case 2:
				weapon = "방패";
				break;
			case 3:
				weapon = "총";
				break;
			default:
				weapon = "---";
				break;
		}
		return weapon;
	}
}

class Hero extends Person {}

public class Java100_oop_getter_setter {
	public static void main(String[] args) {
		
		// 객체 생성
		Villain v1 = new Villain( "좀비", 20, 180, 80, "15001231", 2, 99.5 );
		v1.printPerson();
		System.out.print( v1.getName() + " " );
		v1.move();  // 부모 클래스의 move() 메서드를 호출.
		
		// 객체 생성
		Villain v2 = new Villain( "도깨비", 30, 175, 70, "11001121", 1, 77.5 );
		v2.printPerson();
		System.out.print( v2.getName() + " " );
		v2.move();

		// 객체 생성
		Villain v3 = new Villain( "몽달귀신", 40, 150, 40, "10001010", 3, 27.5 );
		v3.printPerson();
		System.out.print( v3.getName() + " " );
		v3.move();
		
	}
}