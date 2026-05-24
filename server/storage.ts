import { type User, type InsertUser, type Lead, type InsertLead } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  subscribeNewsletter(email: string): Promise<{ duplicate: boolean }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private newsletterEmails: Set<string>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.newsletterEmails = new Set();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = {
      ...insertLead,
      id,
      source: insertLead.source ?? "website",
      createdAt: new Date(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async subscribeNewsletter(email: string): Promise<{ duplicate: boolean }> {
    const key = email.trim().toLowerCase();
    const duplicate = this.newsletterEmails.has(key);
    this.newsletterEmails.add(key);
    return { duplicate };
  }
}

export const storage = new MemStorage();
