import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import NotFound from "./not-found/not-found";
import { AuthenticationGuard } from "@/guards/authentication-guard";
import Dashboard from "./dashboard/dashboard";
import Board from "./dashboard/board/board";
import AddJob from "./dashboard/board/add-job/add-job";
import Job from "./dashboard/board/job/job";
import CreateColumn from "./dashboard/board/create-column/create-column";
import MoveColumn from "./dashboard/board/move-column/move-column";

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="dashboard/board/:boardId"
        element={<AuthenticationGuard component={Board} />}
      >
        <Route
          path="create-column"
          element={<AuthenticationGuard component={CreateColumn} />}
        />
        <Route
          path="column/:columnId/change-order"
          element={<AuthenticationGuard component={MoveColumn} />}
        />
        <Route
          path="column/:columnId/job/:jobId"
          element={<AuthenticationGuard component={Job} />}
        />
        <Route
          path="column/:columnId/add-job"
          element={<AuthenticationGuard component={AddJob} />}
        />
      </Route>
      <Route
        path="dashboard"
        element={<AuthenticationGuard component={Dashboard} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
