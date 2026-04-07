-- Last updated: 07/04/2026, 13:29:32
-- Write your PostgreSQL query statement below
select t1.machine_id, ROUND(AVG(t2.timestamp - t1.timestamp)::numeric, 3) as processing_time 
from Activity t1, Activity t2
where t1.machine_id = t2.machine_id
and t1.process_id = t2.process_id
and t1.activity_type = 'start'
and t2.activity_type = 'end'
group by t1.machine_id