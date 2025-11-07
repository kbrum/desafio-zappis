import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const task = sqliteTable("task", {
    id: int().primaryKey({autoIncrement: true}),
    tittle: text().notNull(),
    initialDone: int().notNull().default(0),
});


