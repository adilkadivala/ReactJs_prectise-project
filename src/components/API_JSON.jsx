import { useEffect, useState } from "react";

function useAPI_JSON({ url }) {
  const [data, setData] = useState([]);
  console.log(url);
  const [error, setError] = useState("");
  console.log(error);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(url);
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d.users);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("An error occurred. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
}

export { useAPI_JSON };
