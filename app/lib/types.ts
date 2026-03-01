/*
types.js

Exports of different types used in the project.
*/

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
