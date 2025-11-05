CREATE TABLE tasks
(
    id        SERIAL PRIMARY KEY,
    title     VARCHAR(255),
    done      BOOLEAN,
    createdAt TIMESTAMP DEFAULT NOW()
)
