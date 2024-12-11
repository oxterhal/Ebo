"use client";
import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const renderContent = () => {
    switch (currentPath) {
      case "/users":
        return <Users />;
      case "/products":
        return <Products />;
      case "/reviews":
        return <Reviews />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold">
              Welcome to the Admin Dashboard
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default App;
