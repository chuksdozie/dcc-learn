import Footer from "@/components/nav/Footer";
import NavBar from "@/components/nav/NavBar";
import Sidebar from "@/components/nav/SideBar";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const maintenance = process.env.NEXT_PUBLIC_MODE === "maintenance"; //
  if (maintenance) return <>{children}</>;
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="w-full overflow-scroll  pt-3">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
