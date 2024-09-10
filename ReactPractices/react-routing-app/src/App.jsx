import { useRoutes } from "react-router-dom";
import CommentsList from "./pages/comments";
import ReciepesList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import HookForm from "./pages/hook-form";
import Hooks from "./pages/hooks";
import UseMemoHook from "./pages/hooks/use-memo-example";
import UseCallbackHook from "./pages/hooks/use-callback-example";
import ReactQueryExample from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <ReciepesList /> },
        { path: "comment-list", element: <CommentsList /> },
        { path: "recipe-details/:id", element: <RecipeDetailsPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    { path: "hook-form", element: <HookForm /> },
    { path: "hooks", element: <Hooks /> },
    { path: "memo", element: <UseMemoHook /> },
    { path: "callback", element: <UseCallbackHook /> },
    { path: "react-query", element: <ReactQueryExample /> },
  ]);
  return element;
}
function App() {
  // const navigateTo = useNavigate();
  return (
    <>
      {/* <h1>React Routing</h1>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternate way to navigate recipe page
        </Link>
      </div>
      <button
        onClick={() => navigateTo("/home/comment-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Navigate to comment page
      </button>
      <button
        onClick={() => navigateTo("/home/recipe-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Navigate to recipe page
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<ReciepesList />} />
          <Route path="comment-list" element={<CommentsList />} />
          <Route path="recipe-details/:id" element={<RecipeDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </>
  );
}

export default App;

