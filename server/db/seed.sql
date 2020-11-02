CREATE TABLE item
(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    "imgUrl" VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    likes INT DEFAULT 0
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

CREATE TABLE "user"(
    id BIGSERIAL PRIMARY KEY NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
);
