-- Last updated: 07/04/2026, 13:42:24
-- Write your PostgreSQL query statement below
select Employee.name, Bonus.bonus 
from Employee left join Bonus
on Employee.empId = Bonus.empId
where bonus is null or bonus < 1000