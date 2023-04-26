import { useEffect, useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.slice(0, 5));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
      });
  }, []);

  return { products, isLoading, isError };
};
