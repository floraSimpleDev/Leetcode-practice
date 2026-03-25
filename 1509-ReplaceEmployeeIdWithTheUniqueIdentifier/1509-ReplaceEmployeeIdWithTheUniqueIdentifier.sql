-- Last updated: 25/03/2026, 21:42:23
-- Write your PostgreSQL query statement below
select unique_id, name from Employees left join EmployeeUNI on Employees.id = EmployeeUNI.id