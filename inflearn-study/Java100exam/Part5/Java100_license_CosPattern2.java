package Java100_exam_Part5;
// 홀수, 짝수 구하기 문제를 while 반복문과 continue를 사용하여 구현
public class Java100_license_CosPattern2 {

	public static void main(String[] args) {
		// 변수 선언
		int number = 1;
		
		// 반복문을 통해 홀수인지 확인
		while(number <= 30) {
			if(number % 2 != 0) {
				number++;
				continue;
			}
			System.out.println(number+"");
			number++;
		}
		System.out.println();
	}

}
