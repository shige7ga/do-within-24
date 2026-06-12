import type { Ideal } from "../../../types/ideal";
import { mockIdeal } from "../mocks/ideal";

export const createIdeal = (
  data: Partial<Ideal>
): Ideal => {
  Object.assign(mockIdeal, data);
  return mockIdeal;
}
