# Rewards App Backend

A Spring Boot REST API for managing a family reward system where parents can assign tasks to children and track their
progress.

## Table of Contents

<!-- TOC -->

* [Features](#features)
* [Technology Stack](#technology-stack)
* [Quick Start](#quick-start)
    * [Prerequisites](#prerequisites)
    * [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Documentation](#documentation)
    * [API Documentation](#api-documentation)
    * [Testing Documentation](#testing-documentation)

<!-- TOC -->

## Features

- JWT-based authentication
- Role-based access control (Parent/Child roles)
- Task creation, assignment, and approval workflow
- Points tracking system
- Parent-child user relationship management

## Technology Stack

- **Spring Boot 4**
- **Spring Security** with JWT authentication
- **Spring Data JPA**
- **MySQL database**
- **Maven**
- **Mockito**
- **JUnit**
- **Mapstruct**

## Quick Start

### Prerequisites

- Java 21+
- Maven 3.6+

### Running the Application

```bash
mvn spring-boot:run
```

Application runs on `http://localhost:8080`

## Project Structure

```
src/
├── main/
│   ├── java/com/fredande/rewardsappbackend/
│   │   ├── config/                 # Configuration
│   │   ├── controller/             # REST controllers
│   │   ├── dto/                    # Data transfer objects
│   │   ├── enums/                  # Enumerations
│   │   ├── exceptionhandler/       # Exception handling
│   │   ├── mapper/                 # Mappers
│   │   ├── model/                  # Entity models
│   │   ├── repository/             # Data access layer
│   │   ├── security/               # Security configuration
│   │   └── service/                # Business logic
│   └── resources/
│       └── application.properties      # Configuration for production environment
│       └── application-test.properties # Configuration for testing environment
└── test/
    └── java/com/fredande/rewardsappbackend/
        ├── controller/      # Controller integration tests
        ├── service/         # Service unit tests
        └── testUtils/       # Helper classes for testing
```

## Documentation

### [API Documentation](docs/API.md)

### [Testing Documentation](docs/TESTS.md)
