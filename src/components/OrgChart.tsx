import React, { useRef, useState } from "react";
import OrganizationChart from "@dabeng/react-orgchart";

const ds = {
  id: "n1",
  name: "Lao Lao",
  title: "general manager",
  children: [
    { id: "n2", name: "Bo Miao", title: "department manager" },
    {
      id: "n3",
      name: "Su Miao",
      title: "department manager",
      children: [
        { id: "n4", name: "Tie Hua", title: "senior engineer" },
        {
          id: "n5",
          name: "Hei Hei",
          title: "senior engineer",
          children: [
            { id: "n6", name: "Dan Dan", title: "engineer" },
            { id: "n7", name: "Xiang Xiang", title: "engineer" },
          ],
        },
        { id: "n8", name: "Pang Pang", title: "senior engineer" },
      ],
    },
    { id: "n9", name: "Hong Miao", title: "department manager" },
    {
      id: "n10",
      name: "Chun Miao",
      title: "department manager",
      children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }],
    },
  ],
};

const NodeTemplate = ({ nodeData }: { nodeData: object }) => {
  return (
    <span
      style={{
        textTransform: "capitalize",
        padding: "8px 16px",
        display: "inline-block",
        textAlign: "center",
        borderRadius: 30,
        backgroundColor: "#46A5831F",
        color: "#46A583",
      }}
    >
      {nodeData.title}
    </span>
  );
};

export default function OrgChart() {
  return (
    <>
      <OrganizationChart
        datasource={ds}
        chartClass="myChart"
        NodeTemplate={NodeTemplate}
      />
    </>
  );
}
