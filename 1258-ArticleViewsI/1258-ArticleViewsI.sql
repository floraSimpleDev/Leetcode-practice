-- Last updated: 25/03/2026, 21:42:26
-- Write your PostgreSQL query statement below
select
    distinct author_id as id
from
    views
where
    author_id = viewer_id
order by
    id