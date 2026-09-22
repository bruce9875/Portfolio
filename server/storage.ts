import { db } from "./db";
import { messages, type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: InsertMessage): Promise<Message> {
    if (!db) {
      throw new Error("Database is not configured.");
    }

    const [created] = await db.insert(messages).values(message).returning();
    return created;
  }
}

export class MemoryStorage implements IStorage {
  private messages: Message[] = [];

  async createMessage(message: InsertMessage): Promise<Message> {
    const created: Message = {
      id: this.messages.length + 1,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: new Date(),
    };

    this.messages.push(created);
    return created;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemoryStorage();
