import { Navigate, Route, Routes } from "react-router-dom"

// components
import Layout from "./layout/Layout"
import ProductsPage from "./pages/ProductsPage"

// context
import ProductProvider from "./context/ProductContext"

function App() {
  return (
    <ProductProvider>

      <Layout>
        <Routes>
          <Route index element={<Navigate to='/products' replace />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </ProductProvider>

  )
}

export default App