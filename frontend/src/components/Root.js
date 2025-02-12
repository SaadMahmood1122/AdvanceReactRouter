// Outlet having child components on different routes in our application
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && (
          <p>Loading Date from backend.....</p>
        )}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
