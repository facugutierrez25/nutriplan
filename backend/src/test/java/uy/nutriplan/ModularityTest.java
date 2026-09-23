package uy.nutriplan;

import org.junit.jupiter.api.Test;
import org.springframework.modulith.core.ApplicationModules;

/**
 * Falla si un módulo accede a clases internas de otro módulo
 * o si aparecen dependencias circulares entre módulos.
 */
class ModularityTest {

    @Test
    void losModulosRespetanSusLimites() {
        ApplicationModules.of(NutriplanApplication.class).verify();
    }
}
