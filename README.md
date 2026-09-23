# NutriPlan

> Nombre provisorio.

App web para **cumplir el plan de tu nutricionista en el día a día**: registrar lo que comés,
saber qué comer ahora, armar el menú semanal y generar la lista de compras con precios de
supermercados de Uruguay.

## Stack

| Capa | Tecnología |
| --- | --- |
| Backend | Java 21, Spring Boot 4.1, Spring Security, Spring Modulith |
| Base de datos | PostgreSQL 17 + Flyway |
| Frontend | React 19 + TypeScript + Vite |
| Tests | JUnit 5 + Testcontainers, Vitest + Testing Library |
| CI | GitHub Actions |

Arquitectura: monolito modular ([ADR 0001](docs/adr/0001-monolito-modular.md)).

## Estructura

```
backend/    API REST (Spring Boot)
frontend/   App web (React + TypeScript)
docs/adr/   Decisiones de arquitectura
docker-compose.yml   Entorno local
```

## Correrlo en local

Requisitos: **Java 21**, **Maven 3.9+**, **Node 22** y **Docker Desktop** (Windows o Mac).

```bash
# 1. Base de datos
docker compose up -d db

# 2. Backend  →  http://localhost:8080/api/v1/status
cd backend
mvn spring-boot:run

# 3. Frontend  →  http://localhost:5173
cd frontend
npm install
npm run dev
```

Alternativa: `docker compose up -d --build` levanta base + backend juntos.

## Tests

```bash
cd backend && mvn verify        # necesita Docker corriendo (Testcontainers)
cd frontend && npm test
```

## Variables de entorno (backend)

| Variable | Por defecto | Uso |
| --- | --- | --- |
| `DB_URL` | `jdbc:postgresql://localhost:5432/nutriplan` | Conexión JDBC |
| `DB_USER` / `DB_PASSWORD` | `nutriplan` | Credenciales de la base |
| `DB_POOL_SIZE` | `10` | Tamaño del pool de conexiones |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:5173` | Orígenes permitidos para el frontend |
| `PORT` | `8080` | Puerto HTTP |

En el frontend, `VITE_API_URL` apunta al backend desplegado (en local queda vacío y Vite usa su proxy).

## Roadmap

- [x] **v0 — Fundaciones:** esqueleto, Docker Compose, CI, endpoint de estado de punta a punta
- [ ] v0 — Registro y login de usuarios, primer deploy
- [ ] v1 — Plan y registro diario
- [ ] v2 — Menú semanal, recetas y lista de compras
- [ ] v3 — Precios de supermercados de Uruguay (datos abiertos SIPC)
- [ ] v4 — Importar PDF del plan, patrones y rol nutricionista
