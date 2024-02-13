import { Route, Routes } from "react-router-dom"

// components
import Layout from "./layout/Layout"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<ProductsPage />} />
      </Routes>
    </Layout>
  )
}

export default App