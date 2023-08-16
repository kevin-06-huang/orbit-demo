import { createRoot } from "react-dom/client";
import SystemContainer from "./components/SystemContainer";

const App = () => {
  return <SystemContainer />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
