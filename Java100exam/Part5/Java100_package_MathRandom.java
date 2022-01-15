package Java100_exam_Part5;
// 1부터 10 사이의 숫자가 무작위로 10개 출력되는 코드를 구현, 0은 출력 x
// 예시) [ 2, 3, 9, 8, 0, 8, 5, 7, 2, 1 ]
public class Java100_package_MathRandom {
	public static void main(String[] args) {
		
		// 랜덤 숫자 생성
		// 랜덤 숫자 생성중 0을 제외하려면? --> 결과로 나오는 숫자에 1을 더해준다.
		for( int i=0; i < 10; i++ ) {
			System.out.print(((int)(Math.random() * 1000) + 1)+"\t");
		}
		System.out.println();
	}
}