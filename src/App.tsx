import Layout from "./components/templates";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const RouterWrapper = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

function App() {
  return (
      <RouterWrapper />
  );
}

export default App;
