-- Primera tabla del modelo: usuarios de la aplicación.
-- La columna "version" habilita el bloqueo optimista (@Version en JPA).
create table app_user (
    id            bigint generated always as identity primary key,
    email         varchar(255) not null unique,
    password_hash varchar(255) not null,
    role          varchar(20)  not null check (role in ('PATIENT', 'NUTRITIONIST', 'ADMIN')),
    created_at    timestamptz  not null default now(),
    version       bigint       not null default 0
);
