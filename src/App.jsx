import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";

export default function App() {
  return (
    <HelmetProvider>
      <div>
        <Home />
      </div>
    </HelmetProvider>
  );
}
