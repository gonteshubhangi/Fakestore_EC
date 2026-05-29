
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useState, useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Products = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state) => state.cart.items);

  //--- Search filter logic---
  const filteredProducts = productSelector.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return item.title.toLowerCase().includes(searchLower) ||
           (item.category?.name || "").toLowerCase().includes(searchLower);
  });

  return (
    <>
      {/*---- Search box ----*/}
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder=" Search a product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/*--- Product  --- */}
      <div className="pgrid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="pcard" key={item.id}>
              <img src={item.images[0]} alt={item.title} className="p-img" />
              <h2 className="p-text">{item.title}</h2>
              <p className="p-price">${item.price}</p>
              <p className="p-category">{item.category.name}</p>
              {cartSelector.find(cartItem => cartItem.id === item.id) ? (
                <button className="r-btn" onClick={() => dispatch(removeItem(item))}>Remove</button>
              ) : (
                <button className="btn" onClick={() => dispatch(addItem(item))}>Add</button>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">No products found matching "{searchTerm}"</div>
        )}
      </div>
    </>
  );
};

export default Products;