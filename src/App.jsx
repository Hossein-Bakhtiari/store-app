import { Navigate, Route , Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckingoutPage from "./pages/CheckingoutPage";
import NotFoundPage from "./pages/404"
function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace/>}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:id" element={<DetailsPage />}/>
        <Route path="/checkout" element={<CheckingoutPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
      </Routes> 
  );
}

export default App;
