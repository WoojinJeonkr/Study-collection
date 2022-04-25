package com.hi.test.high.training;

public class PrintClass implements PrintInterface {

	String color;
	int size;
	String Owner;
	
	@Override
	public void scan() {
		System.out.println("스캔 완료되었다!!");
	}

	@Override
	public void copy() {
		System.out.println("복사..되었습니다");
	}

}
