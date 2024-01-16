package Java100_exam_Part5;
/**
 * 2차원 배열 구현
 * 이때, Shape은 5x5 구조로 생성하여 값을 입력하고 출력
 * 특정 좌표에는 "★"을 입력
 */
public class Java100_license_CosPattern4 {

	public static void main(String[] args) {
		// 2차원 배열의 행과 열 선언
		int R = 5, C = 5;
		
		// char 2차원 배열 선언 및 요소 값 입력
		char[][] ar = new char[][] {
			{'□', '□', '□', '□', '□'},
			{'□', '□', '□', '□', '□'},
			{'□', '□', '★', '□', '□'},
			{'□', '□', '□', '□', '□'},
			{'□', '□', '□', '□', '□'},
		};
		
		// 2차원 배열에 들어있는 요소 값들 출력
		System.out.println("----------");
		for(int i=0; i < R; i++) {
			for(int j=0; j < C; j++) {
				System.out.print(ar[i][j]);
			}
			System.out.println();
		}
		System.out.println("---------");
	}
}
