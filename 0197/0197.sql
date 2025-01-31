select id as Id from (
    select a.id, a.temperature - b.temperature as delta
    from Weather a
    join Weather b on a.recordDate = DATE_ADD(b.recordDate, INTERVAL 1 DAY)
) t
where t.delta > 0;
