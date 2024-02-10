import { useEffect, useState } from "react";

const Field = () => {
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getFields = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/v1/fields/`);
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          setIsLoading(false);
          console.log(data);
          setFields(data);
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getFields();
  }, [apiUrl]);
  return <div></div>;
};

export default Field;
