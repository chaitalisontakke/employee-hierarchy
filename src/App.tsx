// import React from "react";
// import "./App.css";
// import OrganizationChart from "./components/organizationChart";

// const App: React.FC = () => (
//   <div className="App">
//     <OrganizationChart />
//   </div>
// );

// export default App;
// src/App.tsx
// src/App.tsx
// import React, { useState, useMemo } from "react";
// import ReactFlow, { Node, Edge, Background, Controls } from "react-flow-renderer";
// import "tailwindcss/tailwind.css";

// type ContactInfo = {
//   email: string;
//   phone: string;
// };

// type Employee = {
//   id: string;
//   name: string;
//   role: string;
//   summary: string;
//   contactInfo: ContactInfo;
//   reports: Employee[];
// };

// const orgData: Employee = {
//   id: "1",
//   name: "Alice Johnson",
//   role: "CEO",
//   summary: "Oversees the organization",
//   contactInfo: {
//     email: "alice@example.com",
//     phone: "123-456-7890",
//   },
//   reports: [
//     {
//       id: "2",
//       name: "Bob Smith",
//       role: "CTO",
//       summary: "Leads the tech team",
//       contactInfo: {
//         email: "bob@example.com",
//         phone: "234-567-8901",
//       },
//       reports: [
//         {
//           id: "3",
//           name: "Charlie Brown",
//           role: "Lead Developer",
//           summary: "Handles software development",
//           contactInfo: {
//             email: "charlie@example.com",
//             phone: "345-678-9012",
//           },
//           reports: [],
//         },
//       ],
//     },
//     {
//       id: "4",
//       name: "Diana Green",
//       role: "CFO",
//       summary: "Manages company finances",
//       contactInfo: {
//         email: "diana@example.com",
//         phone: "456-789-0123",
//       },
//       reports: [],
//     },
//   ],
// };

// // Recursive function to generate nodes and edges
// const generateNodesAndEdges = (
//   employee: Employee,
//   x: number,
//   y: number,
//   expandedNodes: Set<string>,
//   toggleNode: (id: string) => void
// ): [Node[], Edge[]] => {
//   const isExpanded = expandedNodes.has(employee.id);

//   const nodes: Node[] = [
//     {
//       id: employee.id,
//       position: { x, y },
//       data: {
//         employee,
//         isExpanded,
//         toggleNode,
//       },
//       type: "custom",
//     },
//   ];

//   const edges: Edge[] = [];

//   if (isExpanded) {
//     employee.reports.forEach((report, index) => {
//       const childX = x + index * 200 - 100;
//       const childY = y + 150;

//       edges.push({
//         id: `e${employee.id}-${report.id}`,
//         source: employee.id,
//         target: report.id,
//         type: "smoothstep",
//       });

//       const [childNodes, childEdges] = generateNodesAndEdges(
//         report,
//         childX,
//         childY,
//         expandedNodes,
//         toggleNode
//       );
//       nodes.push(...childNodes);
//       edges.push(...childEdges);
//     });
//   }

//   return [nodes, edges];
// };

// const EmployeeNode = ({ data }: any) => {
//   const { employee, isExpanded, toggleNode } = data;

//   return (
//     <div
//       className="p-4 bg-white border rounded-lg shadow-md"
//       onClick={() => toggleNode(employee.id)}
//       style={{ cursor: "pointer" }}
//     >
//       {/* Profile Picture Placeholder */}
//       <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2"></div>
//       <h3 className="font-bold text-center text-sm">{employee.role}</h3>
//       <p className="text-center text-xs text-gray-500">{employee.summary}</p>

//       {isExpanded && (
//         <div className="mt-4 text-sm">
//           <p>
//             <strong>Email:</strong> {employee.contactInfo.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {employee.contactInfo.phone}
//           </p>
//           {employee.reports.length > 0 && (
//             <div className="mt-2">
//               <strong>Reports:</strong>
//               <ul className="list-disc list-inside text-xs">
//                 {employee.reports.map((report:Employee) => (
//                   <li key={report.id}>{report.name}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

//   const toggleNode = (id: string) => {
//     setExpandedNodes((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(id)) {
//         newSet.delete(id);
//       } else {
//         newSet.add(id);
//       }
//       return newSet;
//     });
//   };

//   const [nodes, edges] = useMemo(() => {
//     return generateNodesAndEdges(orgData, 0, 0, expandedNodes, toggleNode);
//   }, [expandedNodes]);

//   return (
//     <div className="h-screen bg-gray-50">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         fitView
//         nodeTypes={{ custom: EmployeeNode }}
//       >
//         <Background color="#aaa" gap={16} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default App;

// src/App.tsx

import React, { useState, useMemo } from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import "tailwindcss/tailwind.css";
import { generateNodesAndEdges } from "./utils";
import EmployeeNode from "./employeeNode";
import { orgData } from "./data/orgData";  // Import orgData

const App: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const [nodes, edges] = useMemo(() => {
    return generateNodesAndEdges(orgData, 0, 0, expandedNodes, toggleNode);
  }, [expandedNodes]);

  return (
    <div className="h-screen bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodeTypes={{ custom: EmployeeNode }}
      >
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;

