export type FormData = {
    username: string;
    password: string;
  };

export type responseType={
    name: string;
    company: string;
    category: string;
    info: string;
    promo: string;
    url: string;
    deadline: string
  }
export type Data = {
    login: string;
  };

export default interface jsonData{
  img: string;
  logo: string;
  company: string;
  category: string;
  deadline: string;
  name: string;
  promo_id: number;
}