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

## DESC Products table

```
mysql> desc Products;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| idseller    | int(11)      | YES  | MUL | NULL    |                |
| idcategory  | int(11)      | YES  | MUL | NULL    |                |
| name        | varchar(255) | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
| brand       | varchar(255) | YES  |     | NULL    |                |
| description | varchar(255) | YES  |     | NULL    |                |
| image       | varchar(255) | YES  |     | NULL    |                |
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
| name         | varchar(255) | YES  |     | NULL    |                |
| createdAt    | datetime     | NO   |     | NULL    |                |
| updatedAt    | datetime     | NO   |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
```

## DESC Users table

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

## DESC Sellers table

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

## DESC Admin table

```
mysql> desc Admins;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(255) | YES  |     | NULL    |                |
| firstname | varchar(255) | YES  |     | NULL    |                |
| lastname  | varchar(255) | YES  |     | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| email     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
8 rows in set (0.00 sec)
```

## DESC Courier table

```
mysql> desc Couriers;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(255) | YES  |     | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| price     | varchar(255) | YES  |     | NULL    |                |
| phone     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

## DESC orderItem table

```
mysql> desc orderItems;
+-----------+------------+------+-----+---------+----------------+
| Field     | Type       | Null | Key | Default | Extra          |
+-----------+------------+------+-----+---------+----------------+
| id        | int(11)    | NO   | PRI | NULL    | auto_increment |
| idproduct | int(11)    | YES  | MUL | NULL    |                |
| idcourier | int(11)    | YES  | MUL | NULL    |                |
| total     | bigint(20) | NO   |     | NULL    |                |
| createdAt | datetime   | NO   |     | NULL    |                |
| updatedAt | datetime   | NO   |     | NULL    |                |
+-----------+------------+------+-----+---------+----------------+
```

## DESC Orders table

```
mysql> desc Orders;
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| id          | int(11)  | NO   | PRI | NULL    | auto_increment |
| iduser      | int(11)  | YES  | MUL | NULL    |                |
| idorderitem | int(11)  | YES  | MUL | NULL    |                |
| idcourier   | int(11)  | YES  | MUL | NULL    |                |
| createdAt   | datetime | NO   |     | NULL    |                |
| updatedAt   | datetime | NO   |     | NULL    |                |
+-------------+----------+------+-----+---------+----------------+
```


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

sequelize model:generate --name orderItem --attributes idproduct:integer,total:integer(BIGINT)


ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk0` FOREIGN KEY (`iduser`) REFERENCES `User`(`id`);

ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk1` FOREIGN KEY (`idproduct`) REFERENCES `product`(`id`);

ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk2` FOREIGN KEY (`idseller`) REFERENCES `seller`(`id`);

ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk3` FOREIGN KEY (`icourier`) REFERENCES `Courier`(`id`);

ALTER TABLE `Sellers` ADD CONSTRAINT `Sellers_fk0` FOREIGN KEY (`idproduct`) REFERENCES `Products`(`id`);


### REST API Endpoints


| Endpoint          | HTTP   | Description              |
| ------------------| ------ | -------------------------|
| `/users`          | GET    | Get all users            |
| `/users/:id`      | PUT    | update one users by id   |
| `/users/register` | POST   | Create new users         |
| `/users/login`    | POST   | users login              |
| `/userss/:id`     | DELETE | Delete one users by id   |

| Endpoint            | HTTP   | Description              |
| --------------------| ------ | -------------------------|
| `/sellers`          | GET    | Get all sellers          |
| `/sellers/:id`      | PUT    | update one sellers by id |
| `/sellers/register` | POST   | Create new sellers       |
| `/sellers/login`    | POST   | sellers login            |
| `/sellerss/:id`     | DELETE | Delete one sellers by id |

| Endpoint                       | HTTP   | Description               |
| -------------------------------| ------ | --------------------------|
| `/products`                    | GET    | Get all products          |
| `/products/`                   | POST   | Post new Product          |
| `/products/:id`                | PUT    | update one products by id |
| `/products/serach/:name`       | POST   | search products by keyword|
| `/products/category/idcategory`| POST   | Create new products       |
| `/products/login`              | POST   | products login            |
| `/productss/:id`               | DELETE | Delete one product by id  |

| Endpoint                   | HTTP   | Description                      |
| ---------------------------| ------ | ---------------------------------|
| `/productcategory/`        | GET    | Get all sellers                  |
| `/productcategory/:id`     | PUT    | update one productcategory by id |
| `/productcategory/`        | POST   | Create new productcategory       |
| `/productcategorys/:id`    | DELETE | Delete one productCategory by id |

