export type Typography = {
  display: string;
  "headline-h1": string;
  "headline-h2": string;
  "title-h1": string;
  "title-h2": string;
  "title-h3": string;
  "text-16": string;
  "text-14": string;
};

export type TypographyVariants = keyof Typography;

declare const styles: Typography;

export default styles;
