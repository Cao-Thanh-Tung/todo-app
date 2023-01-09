CREATE TABLE IF NOT EXISTS public.user(
    user_id SERIAL PRIMARY KEY,
	fullname varchar(30) not null,
	email varchar(50) not null unique,
	password varchar(100) not null,
	avatar varchar(500)
);

CREATE TABLE IF NOT EXISTS public.project (
	project_id SERIAL PRIMARY KEY,
	owner_id int not null,
	project_name varchar(50) not null,
	project_description varchar(1000),
	project_status int default 1,
	FOREIGN KEY (owner_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS public.user_in_project(
	id SERIAL PRIMARY KEY,
	user_id int not null,
	project_id int not null,
	FOREIGN KEY (user_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (project_id) REFERENCES public.project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS public.mission (
	mission_id SERIAL PRIMARY KEY,
	user_create_id int not null,
	mission_title varchar(100) not null,
	mission_description varchar(1000) not null,
	project_id int not null,
	mission_status int default 1,
	FOREIGN KEY (user_create_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (project_id) REFERENCES public.project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS public.user_in_mission(
	id SERIAL PRIMARY KEY,
	user_id int not null,
	mission_id int not null,
	FOREIGN KEY (user_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (mission_id) REFERENCES public.mission(mission_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS public.message(
	message_id SERIAL PRIMARY KEY,
	receive_id int,
	post_id int,
	id_info int,
	type int,
	content varchar(100),
	message_status int,
	FOREIGN KEY (receive_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (post_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
)

