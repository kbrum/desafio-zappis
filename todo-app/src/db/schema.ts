import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

export const task = sqliteTable("task", {
    id: int().primaryKey({autoIncrement: true}),
    title: text().notNull(),
    initialDone: int({mode: "boolean"}).notNull().default(false),
    createdAt: text().notNull().default(new Date().toISOString()),
    userId: text("user_id").notNull().references(() => user.id)
});

export const user = sqliteTable("user", {
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull(),
    username: text().notNull().unique(),
    password: text().notNull(),
});

export const taskRelations = relations(task, ({one}) => ({
    author: one(user, {
        fields: [task.userId],
        references: [user.id],
    }),
}));