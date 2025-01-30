select employee_id
from Employees
where salary < 30000
and manager_id not in (
    select employee_id
    from Employees
)
order by 1;
