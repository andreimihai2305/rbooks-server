export interface User {
  id?: string;
  username: string;
  password: string;
  isAdmin?: boolean | undefined | null;
  savedBooks?: Book[];
  readBooks?: Book[];
  currentlyReading?: Book[];
}

export interface Author {
  id?: string;
  name: string;
  birthYear: number;
  yearOfDeath?: number | undefined | null;
  writtenBooks?: Book[];
}

export interface Book {
  id?: number;
  title: string;
  subtitle?: string | undefined | null;
  yearPublished: number;
  Author?: Author;
}
