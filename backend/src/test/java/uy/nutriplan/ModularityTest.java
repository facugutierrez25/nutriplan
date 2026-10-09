package uy.nutriplan;

import org.junit.jupiter.api.Test;
import org.springframework.modulith.core.ApplicationModules;
class ModularityTest {

    @Test
    void modulesShouldRespectTheirBoundaries() {
        ApplicationModules.of(NutriplanApplication.class).verify();
    }
}
