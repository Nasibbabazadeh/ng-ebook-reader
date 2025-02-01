export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export interface Format {
  [mimeType: string]: string;
}

export interface IBook {
  id: number;
  title: string;
  authors: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
  summaries: string[];
}

export interface IBookResponse {
  count?: number;
  next?: string | null;
  previos?: string | null;
  results: IBook[];
}
