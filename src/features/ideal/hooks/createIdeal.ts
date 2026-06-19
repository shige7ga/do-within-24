import type { Ideal } from "../../../types/ideal";
import { idealData } from "../data/ideal";

export const createIdeal = (
  data: Partial<Ideal>
): Ideal => {
  Object.assign(idealData, data);
  return idealData;
}
