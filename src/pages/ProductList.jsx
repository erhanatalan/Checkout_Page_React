
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";


const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorState, setErrorState] = useState(false)
  const url = process.env.REACT_APP_API_URL; //env dosyasi ana dizinde olacak
  // console.log("url",url);

  const getProducts = async ()=>{
    try{
      const {data} = await axios(url)
      setProducts(data)
      setLoading(false)
      setErrorState(false)
    }catch(error){
      console.log(error);
      setLoading(false)
      setErrorState(true)
    }
  }
  // console.log(products);
  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? <p className="text-center text-danger w-100">Loading....</p> 
        : products.length>0 ? 
        <>
          <article id="product-panel" className="col-md-5">
            {products.map((item)=>{
              return(
                <ProductCard item={item} key={item.id} url={url} getProducts={getProducts}/>
              )
            }) }
          </article>
          <article className="col-md-5 m-3">
            <CardTotal products={products}/>
          </article>
        </>
        : 
        ( !errorState && <p className="text-center text-danger w-100">No data...</p>)}


        {errorState && (<p className="text-center text-danger w-100">No products data...</p>)}
      </div>
    </div>
  );
};

export default ProductList;
