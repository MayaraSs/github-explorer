import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/usuario'>Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
