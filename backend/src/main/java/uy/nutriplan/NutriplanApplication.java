package uy.nutriplan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Punto de entrada del monolito modular.
 * <p>
 * Cada subpaquete directo de {@code uy.nutriplan} es un módulo (status, y más adelante
 * usuarios, plan, registro, menu, recetas, compras, precios). Spring Modulith verifica
 * en los tests que ningún módulo use clases internas de otro.
 */
@SpringBootApplication
public class NutriplanApplication {

    public static void main(String[] args) {
        SpringApplication.run(NutriplanApplication.class, args);
    }
}
