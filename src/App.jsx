// import { HelmetProvider } from "react-helmet-async";
import React, { Suspense } from "react";
import Loader from "./components/Loader";
const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />;
    </Suspense>
  );
}
