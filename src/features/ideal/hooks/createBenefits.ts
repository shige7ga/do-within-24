import type { Ideal, BenefitsFormData } from "../../../types/ideal";
import { mockIdeal } from "../mocks/ideal";

export const createBenefits = (benefitsData: BenefitsFormData): Ideal => {
  Object.assign(mockIdeal, benefitsData);
  return mockIdeal;
};
