// import { Route, Routes } from "react-router-dom";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Layout } from "./components/Layout";

import { ProductDashboard } from "./pages/ProductDashboard"

// import { Todos } from "./examples/Todos";
// import { UseReducerHook } from "./hooks/useReducerHook";

function App() {

  return (
    <>
      <h1>React App</h1>
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes> */}
      {/* <UseReducerHook /> */}
      {/* <Todos /> */}
      <ProductDashboard />
    </>
  )
}

export default App
