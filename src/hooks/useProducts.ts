import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Filters, Product } from '@/interfaces/products';

export const useProducts: () => {
  filteredProducts: Product[];
  isLoading: boolean;
  isError: boolean;
  setFilter: Dispatch<SetStateAction<Filters>>;
  filter: Filters;
  points: number;
} = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filters>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
      .then((response) => response.json())
      .then((json: Product[]) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
      });
  }, []);

  useEffect(() => {
    let newProducts: Product[] = [];
    if (!filter) {
      newProducts = products;
    } else if (filter === 'earned') {
      newProducts = products.filter((product) => !product.is_redemption);
    } else {
      newProducts = products.filter((product) => product.is_redemption);
    }
    setFilteredProducts(newProducts.slice(0, 5));
    setPoints(newProducts.slice(0, 5).reduce(calculatePoints, 0));
  }, [filter, products, setFilteredProducts]);

  return {
    filteredProducts,
    isLoading,
    isError,
    setFilter,
    filter,
    points,
  };
};

const calculatePoints: (totalPoints: number, product: Product) => number = (totalPoints: number, product: Product) => {
  const pointsToAddOrSubtract = product.is_redemption ? -product.points : product.points;
  return totalPoints + pointsToAddOrSubtract;
};
