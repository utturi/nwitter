import React from "react";
import { Route, Routes } from "react-router-dom"; /* version 6 변경사항 유의 */
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <div>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </div>
  );
};

export default AppRouter;
