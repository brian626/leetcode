with q1_2019 as (
        select product_id
        from Sales
        where sale_date between '2019-01-01' and '2019-03-31'
    ),
    non_q1_2019 as (
        select product_id
        from Sales
        where sale_date < '2019-01-01' or sale_date > '2019-03-31'
    )
select product_id, product_name
from Product
where product_id in (select * from q1_2019)
and product_id not in (select * from non_q1_2019);
