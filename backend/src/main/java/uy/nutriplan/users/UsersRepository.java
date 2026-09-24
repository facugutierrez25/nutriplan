package uy.nutriplan.users;

import org.springframework.data.jpa.repository.JpaRepository;

interface UsersRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
}
