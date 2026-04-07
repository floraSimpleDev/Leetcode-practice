-- Last updated: 07/04/2026, 14:34:32
-- Write your PostgreSQL query statement below
select t1.student_id, t1.student_name, t2.subject_name, COALESCE(grouped.attended_exams, 0) as attended_exams
from Students as t1
cross join Subjects as t2
left join (
    select student_id, subject_name, COUNT(*) as attended_exams
    from Examinations
    group by student_id, subject_name
) grouped
on t1.student_id = grouped.student_id 
and t2.subject_name = grouped.subject_name
order by t1.student_id, t2.subject_name