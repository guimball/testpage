import java.util.Scanner;

public class Main {

  public static boolean ehPrimo(int numero) {
    for(int i = 2; i < numero; i++) {
      if(numero % i == 0) return false;
    }
    return numero > 1;
  }

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int number = scanner.nextInt();

    boolean isPrime = ehPrimo(number);

    if(isPrime) {
      System.out.println(number + " is prime");
    } else {  
      System.out.println(number + " is not prime");
    }

    scanner.close();

  }

}
