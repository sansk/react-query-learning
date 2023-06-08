import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "http://localhost:4000/heroes";

export const useHeroesFetch = () => {
  return useQuery(
    ["heroes"],
    async () => {
      const resp = await axios.get(url);
      return resp;
    },
    {
      //   refetchOnWindowFocus: true,
      //   enabled: false,
    }
  );
};
