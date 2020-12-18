CREATE TABLE item (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(100),
    likes INT DEFAULT 0,
    user_id INT REFERENCES "user"(id)
);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 1);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 2);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m91168164208_1.jpg?1606655301', 4500, '☆リーバイス☆LEVIS550 ブーツカットデニムパンツ　ジーンズ', 2);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m67570932924_1.jpg?1607477013', 10000, 'ダイヤモンドリング', 2);
INSERT INTO item(img_url, price, description, user_id) VALUES ('https://static.mercdn.net/c!/w=240/thumb/photos/m67570932924_1.jpg?1607477013', 10000, 'ダイヤモンドリング', 2);
