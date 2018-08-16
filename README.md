# UKMKITA

## Database name `ukmkita`

## Tables

![Screenshot](./assets/showtables.png)

## DESC products table

![Screenshot](./assets/descproducts.png)

## DESC productCategory table

![Screenshot](./assets/descproductCategory.png)

## DESC user table

![Screenshot](./assets/descuser.png)

## Showing product category

```sql
select products.nameProduct, productCategory.namacategory
from products, productCategory
where productCategory.idcategory = products.idcategory;
```

![Screenshot](./assets/productcategory.png)

## Showing user's product

```sql
select user.firstnameUser , products.nameProduct
from user, products
where products.idseller = user.iduser;
```

![Screenshot](./assets/userproduct.png)

```
mysql> desc user;
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| iduser        | int(11)     | NO   | PRI | NULL    | auto_increment |
| firstnameUser | varchar(20) | NO   |     | NULL    |                |
| lastnameUser  | varchar(20) | NO   |     | NULL    |                |
| emailUser     | varchar(20) | NO   |     | NULL    |                |
| addressUser   | text        | NO   |     | NULL    |                |
| phoneUser     | int(11)     | NO   |     | NULL    |                |
| createdAt     | varchar(60) | NO   |     | NULL    |                |
| updatedAt     | varchar(60) | NO   |     | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+
8 rows in set (0.01 sec)
```
