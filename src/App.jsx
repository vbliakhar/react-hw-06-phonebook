import { Route, Routes } from "react-router-dom";
import Counter from "./view/Counter/Counter";
import Layout from "./hoc/Layout/Layout";
import PhoneBook from "./view/PhoneBook/PhoneBook";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="/phoneBook" element={<PhoneBook />} />
          <Route path="*" element={<h1>Not Found Route</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
