# UKMKITA

## Database name `ukmkita`

## Tables

```
mysql> show tables;
+-------------------+
| Tables_in_ukmkita |
+-------------------+
| Admins            |
| Couriers          |
| orderItems        |
| Orders            |
| productCategories |
| Products          |
| Sellers           |
| SequelizeMeta     |
| Users             |
+-------------------+
```

## db Design

![dbdesign](./dbdesign.png)

## Showing product category

### Query

```sql
mysql> select Products.name, productCategories.nameCategory
from Products, productCategories
where Products.idcategory = productCategories.id;
```

```
+-------------------+--------------+
| name              | nameCategory |
+-------------------+--------------+
| Tempe             | cemilan      |
| Melayu Tea        | minuman      |
| Tenun Motif Batam | kerajinan    |
+-------------------+--------------+
3 rows in set (0.00 sec)
```

## Showing product by 1 category

### Query

```sql
mysql> select Products.name, productCategories.nameCategory
    -> from Products, productCategories
    -> where productCategories.id = Products.idcategory
    -> and productCategories.id = 5;
```

```
+-------+--------------+
| name  | nameCategory |
+-------+--------------+
| Tempe | cemilan      |
+-------+--------------+
1 row in set (0.00 sec)
```

### REST API Endpoints

User routes

| Endpoint          | HTTP   | Description              |
| ------------------| ------ | -------------------------|
| `/users`          | GET    | Get all users            |
| `/users/register` | POST   | Create new users         |
| `/users/login`    | POST   | users login              |


## Create view tables

```
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `indr`@`localhost` 
    SQL SECURITY DEFINER
VIEW `view_order` AS
    SELECT 
        `a`.`id` AS `idOrder`,
        `d`.`username` AS `username`,
        SUM((`c`.`price` * `b`.`qty`)) AS `total`
    FROM
        (((`orders` `a`
        LEFT JOIN `orderitems` `b` ON ((`a`.`id` = `b`.`idorder`)))
        LEFT JOIN `products` `c` ON ((`c`.`id` = `b`.`idproduct`)))
        LEFT JOIN `users` `d` ON ((`d`.`id` = `a`.`iduser`)))
    GROUP BY `a`.`id` , `d`.`username`
```

```
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `indr`@`localhost` 
    SQL SECURITY DEFINER
VIEW `view_orderitem` AS
    SELECT 
        `b`.`idorder` AS `idorder`,
        `c`.`name` AS `name`,
        `c`.`price` AS `price`,
        `b`.`qty` AS `qty`,
        (`c`.`price` * `b`.`qty`) AS `total`
    FROM
        (`orderitems` `b`
        LEFT JOIN `products` `c` ON ((`c`.`id` = `b`.`idproduct`)))
```