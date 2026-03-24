## Article Views I

### Table: Views

| Column Name | Type |
|------------|------|
| article_id | int  |
| author_id  | int  |
| viewer_id  | int  |
| view_date  | date |

- This table has **no primary key**, so it may contain duplicate rows.
- Each row indicates that a viewer viewed an article written by an author on a specific date.
- If `author_id = viewer_id`, it means the author viewed their own article.

---

## Problem

Write a solution to find all authors who viewed **at least one of their own articles**.

Return the result table sorted by `id` in **ascending order**.

---

## Example 1

**Input**

Views table:


+------------+-----------+-----------+------------+
| article_id | author_id | viewer_id | view_date |
+------------+-----------+-----------+------------+
| 1 | 3 | 5 | 2019-08-01 |
| 1 | 3 | 6 | 2019-08-02 |
| 2 | 7 | 7 | 2019-08-01 |
| 2 | 7 | 6 | 2019-08-02 |
| 4 | 7 | 1 | 2019-07-22 |
| 3 | 4 | 4 | 2019-07-21 |
| 3 | 4 | 4 | 2019-07-21 |
+------------+-----------+-----------+------------+


**Output**


+------+
| id |
+------+
| 4 |
| 7 |
+------+


**Explanation**

- Author `7` viewed their own article because `author_id = viewer_id = 7`
- Author `4` viewed their own article because `author_id = viewer_id = 4`
- Duplicate rows do not affect the final result
