export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChatSeriesData = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
