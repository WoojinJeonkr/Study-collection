package Java100_exam_Part5;

import java.util.ArrayList;

class Person {}

public class Java100_collection_FrameworkArrayList1 {
	public static void main(String[] args) {
		
		// ArrayList를  Object 타입으로 사용하는 경우.
		ArrayList list1 = new ArrayList();
		
		// 데이터 추가하기 
		list1.add("홍길동");					
		list1.add(20);						
		list1.add("이순신");
		list1.add(20);						
		list1.add(new Person());
		
		// 데이터 가져오기 이때, 해당 데이터 자료형으로 형변환하여 사용
		String str = (String)list1.get(0);
		int num = (int)list1.get(1);
		System.out.println(str.length());	
		System.out.println(num + 100);
		
		// 출력
		System.out.println(list1.size());  // 5
		for(int i=0; i < list1.size(); i++) 
			System.out.println(list1.get(i) + " ");
		
	}
}