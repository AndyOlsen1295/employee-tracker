USE employees_db;

INSERT INTO department (name)
VALUES ("HR"),
      ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Representative", 50000, 1),
      ("Engineer", 70000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Olsen", 1, null),
      ("Lebron", "James", 1, null);
