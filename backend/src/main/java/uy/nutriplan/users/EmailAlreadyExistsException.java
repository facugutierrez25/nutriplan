package uy.nutriplan.users;

class EmailAlreadyExistsException extends RuntimeException {
    EmailAlreadyExistsException(String email) {
        super("Email already registered: " + email);
    }
}
