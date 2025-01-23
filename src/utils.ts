// src/utils.ts

import { Employee } from './types';
import { Node, Edge } from 'react-flow-renderer';

export const generateNodesAndEdges = (
  employee: Employee,
  x: number,
  y: number,
  expandedNodes: Set<string>,
  toggleNode: (id: string) => void
): [Node[], Edge[]] => {
  const isExpanded = expandedNodes.has(employee.id);

  const nodes: Node[] = [
    {
      id: employee.id,
      position: { x, y },
      data: {
        employee,
        isExpanded,
        toggleNode,
      },
      type: "custom",
    },
  ];

  const edges: Edge[] = [];

  if (isExpanded) {
    employee.reports.forEach((report, index) => {
      const childX = x + (index * 200) - 100;
      const childY = y + 150;

      edges.push({
        id: `e${employee.id}-${report.id}`,
        source: employee.id,
        target: report.id,
        type: "smoothstep",
      });

      const [childNodes, childEdges] = generateNodesAndEdges(
        report,
        childX,
        childY,
        expandedNodes,
        toggleNode
      );
      nodes.push(...childNodes);
      edges.push(...childEdges);
    });
  }

  return [nodes, edges];
};
