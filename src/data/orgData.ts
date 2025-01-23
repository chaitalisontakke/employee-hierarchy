// src/data/orgData.ts

import { Employee } from "../types";

export const orgData: Employee = {
  id: "1",
  name: "Alice Johnson",
  role: "CEO",
  summary: "Oversees the organization",
  contactInfo: {
    email: "alice@example.com",
    phone: "123-456-7890",
  },
  reports: [
    {
      id: "2",
      name: "Bob Smith",
      role: "CTO",
      summary: "Leads the tech team",
      contactInfo: {
        email: "bob@example.com",
        phone: "234-567-8901",
      },
      reports: [
        {
          id: "3",
          name: "Charlie Brown",
          role: "Lead Developer",
          summary: "Handles software development",
          contactInfo: {
            email: "charlie@example.com",
            phone: "345-678-9012",
          },
          reports: [],
        },
      ],
    },
    {
      id: "4",
      name: "Diana Green",
      role: "CFO",
      summary: "Manages company finances",
      contactInfo: {
        email: "diana@example.com",
        phone: "456-789-0123",
      },
      reports: [],
    },
  ],
};
