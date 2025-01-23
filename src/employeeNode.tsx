// src/EmployeeNode.tsx

import React from 'react';
import { Employee } from './types';

type EmployeeNodeProps = {
  data: {
    employee: Employee;
    isExpanded: boolean;
    toggleNode: (id: string) => void;
  };
};

const EmployeeNode = ({ data }: EmployeeNodeProps) => {
  const { employee, isExpanded, toggleNode } = data;

  return (
    <div
      className="p-4 bg-white border rounded-lg shadow-md"
      onClick={() => toggleNode(employee.id)}
      style={{ cursor: "pointer" }}
    >
      {/* Profile Picture Placeholder */}
      <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2"></div>
      <h3 className="font-bold text-center text-sm">{employee.role}</h3>
      <p className="text-center text-xs text-gray-500">{employee.summary}</p>

      {isExpanded && (
        <div className="mt-4 text-sm">
          <p>
            <strong>Email:</strong> {employee.contactInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {employee.contactInfo.phone}
          </p>
          {employee.reports.length > 0 && (
            <div className="mt-2">
              <strong>Reports:</strong>
              <ul className="list-disc list-inside text-xs">
                {employee.reports.map((report) => (
                  <li key={report.id}>{report.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeNode;
