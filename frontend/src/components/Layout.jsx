import React from "react";
import Header from "./Header/Header";
import Button from "@mui/material/Button";
import Navbar from "./Navbar/Navbar";

function Layout() {
  //   const [theme, setTheme] = React.useState("light");
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-white">
        <Header />
        <div className="grid grid-cols-[15%_auto] h-screen w-screen">
          <div className="overflow-y-auto">
            <Navbar />
          </div>
          <div className="m-5! p-3! bg-stone-100 rounded-2xl">
            {/* <Button variant="contained">Hello World</Button> */}
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <h1 className="text-1xl text-stone-500">
              This is a testing page for this website.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
