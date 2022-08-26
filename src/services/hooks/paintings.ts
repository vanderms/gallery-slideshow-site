import data from "@/data/data.json";
import { Painting } from "@/services/models/paintings";

export const usePaintings = (): Painting[] => {
  return data;
};
