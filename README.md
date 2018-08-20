# UKMKITA

## Database name `ukmkita`

## Tables

```
+-------------------+
| Tables_in_ukmkita |
+-------------------+
| Admins            |
| Couriers          |
| Products          |
| Sellers           |
| Users             |
| adminCouriers     |
| productCategories |
+-------------------+
```

## DESC products table

```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| idseller    | int(11)      | YES  |     | NULL    |                |
| idcategory  | int(11)      | YES  |     | NULL    |                |
| name        | varchar(255) | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
| stock       | varchar(255) | YES  |     | NULL    |                |
| brand       | varchar(255) | YES  |     | NULL    |                |
| description | varchar(255) | YES  |     | NULL    |                |
| type        | varchar(255) | YES  |     | NULL    |                |
| image       | longblob     | YES  |     | NULL    |                |
| rating      | int(11)      | YES  |     | NULL    |                |
| review      | varchar(255) | YES  |     | NULL    |                |
| createdAt   | datetime     | NO   |     | NULL    |                |
| updatedAt   | datetime     | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

## DESC productCategory table

```
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int(11)      | NO   | PRI | NULL    | auto_increment |
| nameCategory | varchar(255) | YES  |     | NULL    |                |
| createdAt    | datetime     | NO   |     | NULL    |                |
| updatedAt    | datetime     | NO   |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
```

## DESC users table

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(255) | YES  |     | NULL    |                |
| firstname | varchar(255) | YES  |     | NULL    |                |
| lastname  | varchar(255) | YES  |     | NULL    |                |
| address   | varchar(255) | YES  |     | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| email     | varchar(255) | YES  |     | NULL    |                |
| phone     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

## DESC sellers table

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(255) | YES  |     | NULL    |                |
| firstname | varchar(255) | YES  |     | NULL    |                |
| lastname  | varchar(255) | YES  |     | NULL    |                |
| address   | varchar(255) | YES  |     | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| email     | varchar(255) | YES  |     | NULL    |                |
| phone     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

## DESC adminCourier table

```
+-------------------+--------------+------+-----+---------+----------------+
| Field             | Type         | Null | Key | Default | Extra          |
+-------------------+--------------+------+-----+---------+----------------+
| id                | int(11)      | NO   | PRI | NULL    | auto_increment |
| addressSeller     | varchar(255) | YES  |     | NULL    |                |
| nameProduct       | varchar(255) | YES  |     | NULL    |                |
| quantity          | varchar(255) | YES  |     | NULL    |                |
| priceProduct      | varchar(255) | YES  |     | NULL    |                |
| totalProductPrice | varchar(255) | YES  |     | NULL    |                |
| tariff            | varchar(255) | YES  |     | NULL    |                |
| grandTotal        | int(11)      | YES  |     | NULL    |                |
| iduser            | varchar(255) | YES  |     | NULL    |                |
| addressUser       | varchar(255) | YES  |     | NULL    |                |
| phone             | varchar(255) | YES  |     | NULL    |                |
| createdAt         | datetime     | NO   |     | NULL    |                |
| updatedAt         | datetime     | NO   |     | NULL    |                |
+-------------------+--------------+------+-----+---------+----------------+
```

## DESC couriers table

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(255) | YES  |     | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| price     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

## Showing product category

### Query

```sql
select products.nameProduct, productCategory.namacategory
from products, productCategory
where productCategory.idcategory = products.idcategory;
```

## Showing product by 1 category

### Query

```sql
select products.nameProduct, productCategory.namacategory
from products, productCategory
where productCategory.idcategory = products.idcategory
and producCategory.idcategory = 1;
```
