package uy.nutriplan.users;

import jakarta.persistence.*;

import java.time.OffsetDateTime;

@Entity
@Table(name = "users")
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Rol role;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime creadoEn;

    @Version
    private Long version;

    enum Rol { PATIENT, NUTRITIONIST, ADMIN }
}
