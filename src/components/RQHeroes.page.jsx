import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "http://localhost:4000/heroes";

export const RQHeroesPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["heroes"],
    queryFn: async () => {
      const resp = await axios.get(url);
      return resp;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
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
