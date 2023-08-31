import { Tree, TreeNode } from "react-organizational-chart";

const StyledNode = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "8px 16px",
      display: "inline-block",
      textAlign: "center",
      borderRadius: 30,
      backgroundColor: "#46A5831F",
      color: "#46A583",
    }}
  >
    {children}
  </div>
);

export default function OrganizationalChart() {
  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"green"}
      lineBorderRadius={"10px"}
      label={<StyledNode>Root</StyledNode>}
    >
      <TreeNode label={<StyledNode>Child 1</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Child 2</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
          <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<StyledNode>Child 3</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
      </TreeNode>
    </Tree>
  );
}
