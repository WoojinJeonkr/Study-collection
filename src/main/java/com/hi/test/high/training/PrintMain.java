package com.hi.test.high.training;

public class PrintMain {

	public static void main(String[] args) {
		PrintClass Print = new PrintClass();
		Print.color = "black";
		Print.size = 300;
		Print.Owner = "Max";
		
		Print.scan();
		
		EpsonKorea k = new EpsonKorea();
		k.repair();
		
		EpsonUS u = new EpsonUS();
		u.repair();
	}

}
