select *
from products
where description regexp 'SN[0-9]{4}-[0-9]{4}[^0-9]|SN[0-9]{4}-[0-9]{4}$';
