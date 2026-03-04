/*
types.js

Exports of different types used in the project.
*/

export type ActiveSection = "overview" | "forms" | "accounting" | "energy";
export type FormsTab = "contact" | "quotes";
export type FormStatus = "Pendiente" | "Revisado" | "Respondido";
export type QuoteStatus = "Pendiente" | "En proceso" | "Completado";

export interface ContactForm {
   id: number;
   name: string;
   email: string;
   phone: string;
   topic: string;
   date: string;
   status: FormStatus;
}

export interface QuoteRequest {
   id: number;
   name: string;
   email: string;
   phone: string;
   distributor: string;
   topic: string;
   date: string;
   status: QuoteStatus;
}

export interface Transaction {
   id: number;
   description: string;
   amount: number;
   type: "income" | "expense";
   date: string;
   category: string;
}

export interface EnergyClient {
   id: number;
   name: string;
   location: string;
   systemKwp: number;
   dailyKwh: number;
   monthlyKwh: number;
   monthlySavings: number;
}

export interface SessionUser {
   id: number;
   name: string;
   surname: string;
   email: string;
   role: string;
}

export type SolarPanels = {
   id: string;
   power: number;
   label: string;
};

export type Region = {
   id: string;
   regionName: string;
   sunhours: number;
};

export type Project = {
   id: number;
   title: string;
   slug: string;
   power: number;
   metrics: string;
   imageUrl: string;
   description?: string;
};

export type Json =
   | string
   | number
   | boolean
   | null
   | { [key: string]: Json | undefined }
   | Json[];

export const Constants = {
   public: {
      Enums: {},
   },
} as const;
