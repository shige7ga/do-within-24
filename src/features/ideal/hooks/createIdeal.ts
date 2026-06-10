import type { Ideal, IdealContextFormData } from "../../../types/ideal";
import { mockIdeal } from "../mocks/ideal";

export const createIdeal = (idealContextData: IdealContextFormData): Ideal => {
  Object.assign(mockIdeal, idealContextData);
  return mockIdeal;
};
