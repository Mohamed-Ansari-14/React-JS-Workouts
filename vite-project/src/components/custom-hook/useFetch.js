import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchAPI = async () => {
      //promise state is pending that's why we have to use "await".
      try {
        //let response = await fetch(url); //This will return promise that's why we using "await"

        let response = await axios.get(url); //This also return promise.
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAPI();
  }, []);

  return { products, error, isLoading, setProducts };
}

export default useFetch;
