import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        System.out.println("*********Aplicacion Calculadora****");
        // Mostramos el menu
        System.out.print("""
                1. Suma
                2. resta
                3. Multiplicacion
                4. division 
                5. SALIR 
                """);
        System.out.println("operacion a realizar");
        var operacion = Integer.parseInt(entrada.nextLine());

        if(operacion <= 1  && operacion <= 4){
            System.out.print("dijite el valor para el operador");
            var operando1 = Integer.parseInt(entrada.nextLine());// codigo duro cuando lo ingresamos nosotros


            System.out.print("dijite el valor del operando2 : ");
            var operando2 = Integer.parseInt(entrada.nextLine());
            var resultado = operando1 + operando2;
            System.out.println("resultado  : " + resultado);
        }

    }
}
