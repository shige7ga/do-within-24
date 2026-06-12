export interface Ideal {
  context: string;
  benefits: string;
  drawbacks: string;
  action: string;
}

export type IdealContextFormData = Pick<Ideal, "context">;
export type BenefitsFormData = Pick<Ideal, "benefits">;
export type DrawbacksFormData = Pick<Ideal, "drawbacks">;
export type ActionFormData = Pick<Ideal, "action">;
