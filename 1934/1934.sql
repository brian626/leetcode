select s.user_id, coalesce(round(coalesce(confirmations, 0) / coalesce(actions, 0), 2), 0) as confirmation_rate
from Signups s
left join (
    select user_id, count(*) as actions
    from Confirmations
    group by 1
) a on s.user_id = a.user_id
left join (
    select user_id, count(action) as confirmations
    from Confirmations
    where action = 'confirmed'
    group by 1
) c on s.user_id = c.user_id
group by 1;
