# UKMKITA

## Database name `ukmkita`

## Tables

```
+-------------------+
| Tables_in_ukmkita |
+-------------------+
| adminCourier      |
| couriers          |
| productCategory   |
| products          |
| sellers           |
| users             |
+-------------------+
```

## DESC products table

```
+--------------------+--------------+------+-----+---------+----------------+
| Field              | Type         | Null | Key | Default | Extra          |
+--------------------+--------------+------+-----+---------+----------------+
| idproduct          | int(11)      | NO   | PRI | NULL    | auto_increment |
| idseller           | int(11)      | NO   |     | NULL    |                |
| idcategory         | int(11)      | NO   |     | NULL    |                |
| nameProduct        | varchar(100) | NO   |     | NULL    |                |
| priceProduct       | mediumtext   | NO   |     | NULL    |                |
| stockProduct       | int(11)      | NO   |     | NULL    |                |
| brandProduct       | varchar(45)  | NO   |     | NULL    |                |
| descriptionProduct | text         | NO   |     | NULL    |                |
| typeProduct        | varchar(45)  | NO   |     | NULL    |                |
| imageProduct       | varchar(255) | NO   |     | NULL    |                |
| ratingProduct      | int(11)      | NO   |     | NULL    |                |
| reviewProduct      | text         | NO   |     | NULL    |                |
| createdAt          | varchar(45)  | NO   |     | NULL    |                |
| updatedAt          | varchar(45)  | NO   |     | NULL    |                |
+--------------------+--------------+------+-----+---------+----------------+
```

## DESC productCategory table

```
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| idcategory   | int(11)     | NO   | PRI | NULL    | auto_increment |
| nameCategory | varchar(45) | NO   |     | NULL    |                |
| createdAt    | varchar(60) | NO   |     | NULL    |                |
| updatedAt    | varchar(60) | NO   |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
```

## DESC users table

```
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| iduser        | int(11)     | NO   | PRI | NULL    | auto_increment |
| firstnameUser | varchar(20) | NO   |     | NULL    |                |
| lastnameUser  | varchar(20) | NO   |     | NULL    |                |
| addressUser   | text        | NO   |     | NULL    |                |
| emailUser     | varchar(45) | NO   |     | NULL    |                |
| phoneUser     | varchar(15) | NO   |     | NULL    |                |
| createdAt     | varchar(60) | NO   |     | NULL    |                |
| updatedAt     | varchar(60) | NO   |     | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+
```

## DESC sellers table

```
+-----------------+-------------+------+-----+---------+----------------+
| Field           | Type        | Null | Key | Default | Extra          |
+-----------------+-------------+------+-----+---------+----------------+
| idseller        | int(11)     | NO   | PRI | NULL    | auto_increment |
| firstnameSeller | varchar(45) | NO   |     | NULL    |                |
| lastnameSeller  | varchar(45) | NO   |     | NULL    |                |
| addressSeller   | text        | NO   |     | NULL    |                |
| emailSeller     | varchar(45) | NO   |     | NULL    |                |
| phoneSeller     | varchar(15) | NO   |     | NULL    |                |
| createdAt       | varchar(60) | NO   |     | NULL    |                |
| updatedAt       | varchar(60) | NO   |     | NULL    |                |
+-----------------+-------------+------+-----+---------+----------------+
```

## DESC adminCourier table

```
+-------------------+-------------+------+-----+---------+----------------+
| Field             | Type        | Null | Key | Default | Extra          |
+-------------------+-------------+------+-----+---------+----------------+
| idadmin           | int(11)     | NO   | PRI | NULL    | auto_increment |
| addressSeller     | text        | NO   |     | NULL    |                |
| nameProduct       | varchar(45) | NO   |     | NULL    |                |
| quantity          | int(11)     | NO   |     | NULL    |                |
| priceProduct      | mediumtext  | NO   |     | NULL    |                |
| totalproductPrice | mediumtext  | NO   |     | NULL    |                |
| courierTariff     | mediumtext  | NO   |     | NULL    |                |
| totalPrice        | mediumtext  | NO   |     | NULL    |                |
| iduser            | int(11)     | NO   |     | NULL    |                |
| addressUser       | text        | NO   |     | NULL    |                |
| phoneUser         | varchar(15) | NO   |     | NULL    |                |
| createdAt         | varchar(60) | NO   |     | NULL    |                |
| updatedAt         | varchar(60) | NO   |     | NULL    |                |
+-------------------+-------------+------+-----+---------+----------------+
```

## DESC couriers table

```
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| idcourier    | int(11)     | NO   | PRI | NULL    | auto_increment |
| nameCourier  | varchar(45) | NO   |     | NULL    |                |
| priceCourier | mediumtext  | NO   |     | NULL    |                |
| createdAt    | varchar(60) | NO   |     | NULL    |                |
| updatedAt    | varchar(60) | NO   |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
```

## Showing product category

### Query

```sql
select products.nameProduct, productCategory.namacategory
from products, productCategory
where productCategory.idcategory = products.idcategory;
```

### Result

![Screenshot](./assets/productcategory.png)

## Showing user's product

### Query

```sql
select user.firstnameUser , products.nameProduct
from user, products
where products.idseller = user.iduser;
```

### Result

![Screenshot](./assets/userproduct.png)
