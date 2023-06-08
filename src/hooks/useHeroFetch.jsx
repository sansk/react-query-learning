import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useHeroFetch = (id) => {
  return useQuery(["hero", id], async () => {
    const resp = await axios.get(`http://localhost:4000/heroes/${id}`);
    return resp;
  });
};
