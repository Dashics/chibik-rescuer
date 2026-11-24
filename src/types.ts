export interface Situation {
  id: number;
  title: string;
  category: string;
  short: string;
  signs: string[];     // <-- Новое поле (признаки)
  steps: string[];     
  forbidden: string[]; // <-- Новое поле (чего нельзя делать)
}