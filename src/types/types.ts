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



export default interface blog{
    article_id:string;
    headers:string;
    text:string;
    user_id:string;
}
