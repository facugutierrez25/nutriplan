package uy.nutriplan.users;

public class EmailAlreadyExistsException extends RuntimeException {
    EmailAlreadyExistsException(String email) {
        super("Email already registered: " + email);
    }
}
