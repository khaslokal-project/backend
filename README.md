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

```````sql
select user.firstnameUser , products.nameProduct
from us``` ukmkita `````` ukmkita ```er, products
where products.idseller = user.iduser;
```````

![Screenshot](./assets/userproduct.png)
