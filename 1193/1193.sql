select DATE_FORMAT(trans_date, '%Y-%m') as month,
       t.country,
       trans_count,
       coalesce(approved_count, 0) as approved_count,
       trans_total_amount,
       coalesce(approved_total_amount, 0) as approved_total_amount
from Transactions t
left join (
    select DATE_FORMAT(trans_date, '%Y-%m') as month,
           country,
           count(*) as approved_count,
           sum(amount) as approved_total_amount
    from Transactions
    where state = 'approved'
    group by 1, 2
) a on DATE_FORMAT(t.trans_date, '%Y-%m') = a.month
join (
    select DATE_FORMAT(trans_date, '%Y-%m') as month,
           country,
           count(*) as trans_count,
           sum(amount) as trans_total_amount
    from Transactions
    group by 1, 2
) b on DATE_FORMAT(t.trans_date, '%Y-%m') = b.month
group by 1, 2
