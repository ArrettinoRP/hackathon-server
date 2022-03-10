CREATE TABLE hackathon  (
    id SERIAL PRIMARY KEY,
    hackathon_name varchar(1000) not null,
    place varchar(1000) not null,
    hackathon_date TIMESTAMP
);


CREATE TABLE user_account  (
    id SERIAL PRIMARY KEY,
    username varchar(1000) not null,
    first_name varchar(1000) not null,
    last_name varchar(1000) not null,
    country varchar(1000) not null,
    profile_picture varchar(1000)
);

CREATE TABLE hackathon_ranking  (
    id SERIAL PRIMARY KEY,
    hackathon_id INT,
    user_account_id INT,
    ranking INT,
    CONSTRAINT fk_hackathon
      FOREIGN KEY(hackathon_id) 
	  REFERENCES hackathon(id),
    CONSTRAINT fk_user_account
      FOREIGN KEY(user_account_id) 
	  REFERENCES user_account(id)
);