export interface Ideal {
  context: string;
  benefits: string;
  drawbacks: string;
  action: string;
}

export type IdealContextFormData = Omit<Ideal, "benefits" | "drawbacks" | "action">;
