import { Link } from "react-router-dom";
import { useHeroesFetch } from "../hooks/useHeroesFetch";

export const RQHeroesPage = () => {
  const { isLoading, error, data, isFetching } = useHeroesFetch();
  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {/* <button onClick={refetch}>Fetch Heroes</button> */}
      <section>
        {data?.data.map((item) => {
          return (
            <div className="item-container" key={item.id}>
              <Link to={`/rq-heroes/${item.id}`}>
                {item.id} - {item.name}
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};
