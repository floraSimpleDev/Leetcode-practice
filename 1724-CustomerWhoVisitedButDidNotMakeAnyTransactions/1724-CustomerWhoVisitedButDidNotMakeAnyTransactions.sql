-- Last updated: 31/03/2026, 23:29:24
-- Write your PostgreSQL query statement below
select customer_id, count(*) as count_no_trans 
from Visits as v 
left join Transactions as t 
on v.visit_id = t.visit_id
where t.visit_id is null
group by
customer_id