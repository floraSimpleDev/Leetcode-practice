-- Last updated: 30/03/2026, 21:14:13
-- Write your PostgreSQL query statement below
select product_name, year, price from Sales s join Product p on s.product_id = p.product_id;