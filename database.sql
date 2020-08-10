CREATE TABLE "todo" (
"id" serial PRIMARY KEY,
"task_name" VARCHAR(255) NOT NULL,
"task_type" VARCHAR(255) NOT NULL,
"task_due" DATE,
"task_notes" VARCHAR(255),
"task_status" VARCHAR (80) DEFAULT 'Not done.'

);

INSERT INTO "todo" ("task_name", "task_type", "task_due")
VALUES ('Laundry', 'Home', '08/10/2020'), ('Clean the litter box', 'Home', '08/13/2020'), ('Call Mom', 'Family', '08/15/2020');

INSERT INTO "todo" ("task_name", "task_type", "task_due", "task_notes")
VALUES ('Go for a run', 'Health', '08/10/2020', 'Meeting at the Stonearch Bridge!');