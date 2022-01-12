package Java100_exam_Part5;
// 배열 내 숫자들의 각 빈도 수를 출력하는 코드 구현
public class Java100_license_CosPattern1 {

	public static void main(String[] args) {
		// 배열 선언
		int[] target = {1, 3, 3, 2, 1, 1, 3, 0, 1, 2};
		int[] ar = new int[4];
		
		for(int i=0; i < target.length; i++)
			ar[target[i]]++;
		
		// 출력
		for(int i=0; i < ar.length; i++)
			System.out.println(i+"번 숫자 -->"+ar[i]+"회");
		System.out.println();
	}

}
