# --- Etapa 1: compilar ---
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -B -q dependency:go-offline
COPY src ./src
RUN mvn -B -q package -DskipTests

# --- Etapa 2: imagen liviana para correr ---
FROM eclipse-temurin:21-jre
WORKDIR /app
RUN useradd --system --uid 1001 app
USER app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
# La JVM usa como máximo el 75% de la memoria del contenedor (clave en planes de 512 MB).
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75", "-jar", "app.jar"]
