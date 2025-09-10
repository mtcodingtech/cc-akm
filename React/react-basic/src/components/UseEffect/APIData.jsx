import React, { useEffect, useState } from "react";

function APIData() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ddummyjson.com/products");
        console.log("res", res);
        const result = await res.json();
        console.log("result", result);
        setProductsData(result);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>
        {productsData.products[0].title}
        {/* {productsData && productsData.products
          ? productsData.products[0].title
          : null} */}
      </h2>
    </>
  );
}

export default APIData;
