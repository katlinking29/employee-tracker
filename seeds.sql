DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 70000.00, 1); 

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id,)
VALUES ("Adam", "Anderson", 1); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Betty", "Benson", 2, 1); 

INSERT INTO employee (first_name, last_name, role_id,)
VALUES ("Carl", "Clifton", 3); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Debbie", "Denton", 4, 3); 

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Edward", "Ewok", 5); 

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Fran", "Fredricks", 6); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gus", "Georges", 7, 6); 