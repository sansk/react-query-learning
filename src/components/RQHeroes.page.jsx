import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "http://localhost:4000/heroes";

export const RQHeroesPage = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["heroes"],
    async () => {
      const resp = await axios.get(url);
      return resp;
    },
    {
      refetchOnWindowFocus: true
    }
  );

  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <section>
        {data?.data.map((item) => {
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
