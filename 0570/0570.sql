select name
from Employee
where id in (
    select managerId as id
    from Employee
    group by managerId
    having count(managerId) >= 5
);
