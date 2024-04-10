import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/Globalstyles";

function App() {
  return (
    <>
    <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
