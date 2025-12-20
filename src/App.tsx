import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
// import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
