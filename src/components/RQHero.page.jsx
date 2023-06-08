import { useParams } from "react-router-dom";
import { useHeroFetch } from "../hooks/useHeroFetch";

export const RQHeroPage = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useHeroFetch(id);

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <section>
        <div className="item-container">
          <h2>{data?.data.name}</h2>
          <h3>{data?.data.alterEgo}</h3>
        </div>
      </section>
    </>
  );
};
