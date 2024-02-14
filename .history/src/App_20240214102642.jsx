import { Navigate, Route, Routes } from "react-router-dom"

// components
import Layout from "./layout/Layout"
import ProductsPage from "./pages/ProductsPage"
import ProductDetails from "./pages/ProductDetails"

// context
import ProductProvider from "./context/ProductContext"

function App() {
  return (
    <ProductProvider>
      <Layout>
        <Routes>
          <Route index element={<Navigate to='/products' replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </ProductProvider>

  )
}

export default App