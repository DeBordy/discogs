import { IPaginationUrls } from './pagination-url.interface';

export interface IPagination {
  items: number;
  page: number;
  pages: number;
  per_page: number;
  urls: IPaginationUrls;
}
