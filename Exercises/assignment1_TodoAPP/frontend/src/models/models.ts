export type EventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface Book {
  _id: string;
  title: string;
  author: string;
  ISBN: number;
  genre: string;
  publicationYear: number;
  image: string;
}

export interface IInitialState {
  title: string;
  author: string;
  ISBN: number;
  publicationYear: number;
  genre: string;
  image: string;
}
