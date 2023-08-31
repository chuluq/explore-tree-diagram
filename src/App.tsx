import OrgChart from "./components/OrgChart";
import OrganizationalChart from "./components/OrganizationalChart";

export default function App() {
  return (
    <div className="container">
      <div className="chartContainer">
        <h3>react-organizational-chart</h3>
        <OrganizationalChart />
      </div>
      <div className="chartContainer">
        <h3>@dabeng/react-orgchart</h3>
        <OrgChart />
      </div>
    </div>
  );
}
