select contest_id, round((count(*) * 100) / (select count(*) from Users as user_count), 2) as percentage
from Register r
group by contest_id
order by percentage desc, contest_id asc;
