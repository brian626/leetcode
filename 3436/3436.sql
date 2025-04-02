select *
from Users
where (
    email like '%@%' and
    email not like '%@@%' and
    email like '%.com' and
    substring_index(email, '@', 1) regexp '^[A-Za-z0-9_]+$' and
    substring_index(substring_index(email, '@', -1), '.', 1) regexp '^[A-Za-z]+$'
)
order by user_id asc;
