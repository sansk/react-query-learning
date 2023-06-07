import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:4000/heroes";

export const HeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get(url);
    setData(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section>
        {data.map((item) => {
          return (
            <div className="item-container" key={item.id}>
              <h4>{item.name}</h4>
              <h5>{item.alterEgo}</h5>
            </div>
          );
        })}
      </section>
    </>
  );
};
