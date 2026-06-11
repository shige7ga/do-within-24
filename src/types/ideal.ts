export interface Ideal {
  context: string;
  benefits: string;
  drawbacks: string;
  action: string;
}

export type IdealContextFormData = Omit<Ideal, "benefits" | "drawbacks" | "action">;
export type BenefitsFormData = Omit<Ideal, "context" | "drawbacks" | "action">;
export type DrawbacksFormData = Omit<Ideal, "context" | "benefits" | "action">;
export type ActionFormData = Omit<Ideal, "context" | "benefits" | "drawbacks">;
