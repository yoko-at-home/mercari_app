CREATE TABLE "user" (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    first_name_kana VARCHAR(50) NOT NULL,
    last_name_kana VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL
);


CREATE TABLE item (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(100),
    likes INT DEFAULT 0,
    user_id INT REFERENCES "user"(id)
);

insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 2177, 'pellentesque volutpat');
insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 4296, 'tortor');
insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 5706, 'donec posuere metus vitae');
insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 1928, 'augue a suscipit');
insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 5099, 'enim sit amet');
insert into item
    ("imgUrl", price, title)
values
    ('https://static.mercdn.net/thumb/photos/m21433167160_1.jpg?1596024232', 3026, 'integer a nibh in quis justo');
