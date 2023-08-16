import { createRoot } from "react-dom/client";
import OrbitContainer from "./components/OrbitContainer";

const App = () => {
  return <OrbitContainer />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
