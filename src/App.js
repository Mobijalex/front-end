import { Suspense } from "react";
import "./App.css";

import Pages from "./pages/Pages";
import Layout from "./components/Layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Properties from "./components/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Pages />} />
              <Route path="/Properties" element={<Properties />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
