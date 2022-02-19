import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { AuthProvider } from "./context/auth-context";
import { Login } from "./pages/auth/login";
import { Home } from "./pages/home";
import { AppProvider } from "./providers/app-provider";

export const MainApp = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </AuthProvider>
    </AppProvider>
  );
};
