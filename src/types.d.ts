export interface QuoteInt {
  id:string;
  author:string;
  category:string;
  text:string;
}
export interface QuotesList{
  [id:string]:QuoteInt
}