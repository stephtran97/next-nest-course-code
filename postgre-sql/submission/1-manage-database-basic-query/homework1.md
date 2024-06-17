<style>
  r {color:Red}
</style>

# Challenge 1:

## Requirements:

**Create a table called customer with the following columns:**

- customer_id (integer, primary key)
- first_name (varchar(30), NOT NULL)
- last_name (varchar(35), NOT NULL)
- email (varchar(150), NOT NULL)
- phone (varchar(20), NOT NULL)
- created (timestamps without timezone )
- updated (timestamps without timezone )

**<r>Solution:</r>**

```sql
CREATE TABLE customer
(
    customer_id integer,
    first_name varchar(30) NOT NULL,
    last_name varchar(35) NOT NULL,
    email varchar(150) NOT NULL,
    phone varchar(20) NOT NULL,
    created timestamp without time zone,
    updated timestamp without time zone,
    PRIMARY KEY (customer_id)
);
```

### Requirement-2

**Create a table called film with following columns:**

- film_id (integer, primary key)
- name (varchar(30), NOT NULL)
- is_new (bool, DEFAULT True)
- created (timestamps without timezone )
- updated (timestamps without timezone )

**<r>Solution:</r>**

```sql
CREATE TABLE film
(
    film_id integer,
    name varchar(30) NOT NULL,
    is_new boolean DEFAULT True,
    created timestamp without time zone,
    updated timestamp without time zone,
    PRIMARY KEY (film_id)
);
```

### Requirement-3

**Create a table called on_sales with following columns:**

- transaction_id (integer, primary key)
- customer_id (integer, foreign key referencing relevant table)
- film_id (integer, foreign key referencing relevant table)
- amount (decimal(5,2) NOT NULL CHECK (amount ≥ 0.00 and amount ≤ 999.99))
- promotion_code (varchar(15) DEFAULT None CHECK (length(promotion) ≤ 10))
- created (timestamps without timezone )
- updated (timestamps without timezone )

**<r>Solution:</r>**

```sql
  CREATE TABLE on_sales (
    transaction_id integer,
    customer_id integer,
    film_id integer,
    amount numeric(5, 2) NOT NULL CONSTRAINT amount_check CHECK (
      amount >= 0.00
      AND amount <= 999.99
    ),
    promotion_code varchar(15) CONSTRAINT promotion_length_check CHECK (length(promotion_code) <= 10),
    created timestamp without time zone,
    updated timestamp without time zone,
    PRIMARY KEY (transaction_id),
    CONSTRAINT customer_id_fk FOREIGN KEY (customer_id) REFERENCES customer (customer_id),
    CONSTRAINT film_id_fk FOREIGN KEY (film_id) REFERENCES film (film_id)
  );
```

### Question

**Answer question**
![Challenge 1 question](../../assets/challenge-1-20240608-question.png 'Challenge 1 question')

**<r>Answer:</r>**

1. Cannot insert `SUMMERDEAL2022` to `promotion_code` column:

- The column `promotion_code` have length constraint `length(promotion_code) <= 10`.
- Therefore cannot update `SUMMERDEAL2022` (14 char length) to `promotion_code` column

# Challenge 2:

**Create a table called songs with following columns:**

![Req 1](../../assets/challenge-1-20240608-req-1.png)

- During creation add the DEFAULT ‘Not defined’ to the genre
- After create table, add not null constaint to song_name column
- After create table, add contraint with default name to ensure the price is least 1.99
- After create table, add contraint date_check to ensure the release date is between today and 01-01-1995
- We want to add this row
  ![Req 2](../../assets/challenge-1-20240608-req-2.png)

**<r>Solution:</r>**

- Create table

```sql
  CREATE TABLE songs (
    song_id integer,
    song_name varchar(30),
    genre varchar(30) DEFAULT 'Not defined',
    price numeric(4, 2),
    release_date date,
    PRIMARY KEY (song_id)
  );
```

- Update table constraint

```sql
  ALTER TABLE songs
  ALTER COLUMN song_name SET NOT NULL;

  ALTER TABLE songs
  ADD CHECK (price >= 1.99);

  ALTER TABLE songs
  ADD CONSTRAINT date_check CHECK (release_date >= '1995-01-01' AND release_date <= current_date);
```

- Add row

```sql
  ALTER TABLE songs
  DROP CONSTRAINT songs_price_check;

  ALTER TABLE songs
  ADD CHECK (price >= 0.99);

  INSERT INTO songs (song_id,song_name,price,release_date)
  VALUES (4,'SQL song',0.99,'2022-01-07');
```

# Challenge 3:

**Our leader has some problems need your skill to resolve:**

- Select all countries

  ```sql
  SELECT country_id, country, last_update
  FROM country;
  ```

- List all unique cities

  ```sql
  SELECT DISTINCT city_id, city, country_id, last_update
  -- SELECT DISTINCT city
  FROM city;
  ```

- Count the number of customers

  ```sql
  SELECT COUNT(customer_id) AS customer_count FROM customer;
  ```

- Get the total number of cities in each country

  ```sql
  -- SELECT
  -- country.country,
  -- COUNT(DISTINCT city.city_id) as city_count
  -- FROM
  --   city JOIN country ON city.country_id = country.country_id
  -- GROUP BY (country.country);
  SELECT
    country_id,
    count(country_id) as city_count
  FROM
    city
  GROUP BY
    (country_id);
  ```

- List all addresses ordered by their district

  ```sql
  SELECT * FROM address
  ORDER BY district ASC;
  ```

- Find the top 3 countries with the most cities

  ```sql
  -- SELECT
  -- country.country,
  -- COUNT(DISTINCT city.city_id) as city_count
  -- FROM
  --   city JOIN country ON city.country_id = country.country_id
  -- GROUP BY (country.country)
  -- ORDER BY city_count DESC
  -- LIMIT 3;
  SELECT
    country_id,
    count(country_id) AS city_count
  FROM
    city
  GROUP BY
    (country_id)
  ORDER BY
    city_count DESC
  LIMIT
    3;
  ```

- Find the top 5 staff members with the most payments processed

  ```sql
  -- SELECT
  -- staff.first_name,
  -- staff.last_name,
  -- payment.amount
  -- FROM
  --   staff JOIN payment ON staff.staff_id = payment.staff_id
  -- ORDER BY payment.amount DESC
  -- LIMIT 5;
  SELECT
    staff_id, COUNT(payment_id) as payment_count  -- <=> COUNT(staff_id)
  FROM
    payment
  GROUP BY
    staff_id
  ORDER BY
    payment_count DESC
  LIMIT 5;
  ```

=> Attention to `GROUP BY`
