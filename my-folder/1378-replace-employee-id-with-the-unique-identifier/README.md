## Replace Employee ID With The Unique Identifier

### Table: Employees

| Column Name | Type    |
|------------|---------|
| id         | int     |
| name       | varchar |

- `id` is the primary key (unique values).
- Each row contains the id and name of an employee.

---

### Table: EmployeeUNI

| Column Name | Type |
|------------|------|
| id         | int  |
| unique_id  | int  |

- `(id, unique_id)` is the primary key.
- Each row maps an employee `id` to a `unique_id`.

---

## Problem

Write a solution to show the **unique ID of each user**.

- If a user does not have a unique ID, return `null` instead.
- Return the result table in **any order**.

---

## Example 1

**Input**

Employees table:


+----+----------+
| id | name |
+----+----------+
| 1 | Alice |
| 7 | Bob |
| 11 | Meir |
| 90 | Winston |
| 3 | Jonathan |
+----+----------+


EmployeeUNI table:


+----+-----------+
| id | unique_id |
+----+-----------+
| 3 | 1 |
| 11 | 2 |
| 90 | 3 |
+----+-----------+


**Output**


+-----------+----------+
| unique_id | name |
+-----------+----------+
| null | Alice |
| null | Bob |
| 2 | Meir |
| 3 | Winston |
| 1 | Jonathan |
+-----------+----------+


**Explanation**

- `Alice` and `Bob` do not have a unique ID → `null`
- `Meir` → unique ID is `2`
- `Winston` → unique ID is `3`
- `Jonathan` → unique ID is `1`
