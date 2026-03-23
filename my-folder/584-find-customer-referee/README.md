## Customers Who Are Not Referred by ID = 2

### Table: Customer

| Column Name | Type    |
|------------|---------|
| id         | int     |
| name       | varchar |
| referee_id | int     |

- `id` is the primary key.
- Each row contains:
  - the customer's id
  - their name
  - the id of the customer who referred them

---

## Problem

Find the names of customers who are:

- **referred by a customer with `id != 2`**, or
- **not referred by any customer** (i.e., `referee_id` is `NULL`)

Return the result table in **any order**.

---

## Example 1

**Input**

Customer table:


+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1 | Will | null |
| 2 | Jane | null |
| 3 | Alex | 2 |
| 4 | Bill | null |
| 5 | Zack | 1 |
| 6 | Mark | 2 |
+----+------+------------+


**Output**


+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+


**Explanation**

- `Will`, `Jane`, and `Bill` have `referee_id = null` → included
- `Zack` is referred by `id = 1` → included
- `Alex` and `Mark` are referred by `id = 2` → excluded
