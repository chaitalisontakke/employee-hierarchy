// src/types.ts

export type ContactInfo = {
    email: string;
    phone: string;
  };
  
  export type Employee = {
    id: string;
    name: string;
    role: string;
    summary: string;
    contactInfo: ContactInfo;
    reports: Employee[];
  };
  