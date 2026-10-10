package uy.morso;

import org.junit.jupiter.api.Test;
import org.springframework.modulith.core.ApplicationModules;
class ModularityTest {

    @Test
    void modulesShouldRespectTheirBoundaries() {
        ApplicationModules.of(MorsoApplication.class).verify();
    }
}
