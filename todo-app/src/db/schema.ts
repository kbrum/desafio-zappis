import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const task = sqliteTable("task", {
    id: int().primaryKey({autoIncrement: true}),
    title: text().notNull(),
    initialDone: int({mode: "boolean"}).notNull().default(false),
    createdAt: text().notNull().default(new Date().toISOString()),
});


