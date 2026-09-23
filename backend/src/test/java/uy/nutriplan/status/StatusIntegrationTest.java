package uy.nutriplan.status;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;

/**
 * Levanta la aplicación completa contra un PostgreSQL real (Testcontainers)
 * y comprueba que las migraciones de Flyway se aplicaron y que el endpoint responde.
 */
@SpringBootTest
@ActiveProfiles("test")
class StatusIntegrationTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private StatusController statusController;

    @Test
    void flywayCreaLaTablaDeUsuarios() {
        Integer tablas = jdbcTemplate.queryForObject(
            "select count(*) from information_schema.tables where table_name = 'app_user'",
            Integer.class);

        assertThat(tablas).isEqualTo(1);
    }

    @Test
    void statusRespondeConLaBaseConectada() {
        var response = statusController.status();

        assertThat(response.app()).isEqualTo("nutriplan-backend");
        assertThat(response.database()).isEqualTo("OK");
        assertThat(response.serverTime()).isNotNull();
    }
}
