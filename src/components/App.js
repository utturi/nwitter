import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // 로그인 여부 판단
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
