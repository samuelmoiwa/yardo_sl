import type { Route } from "./+types/home";
import Banner from '../components/home/Banner';
import Introduction from '../components/home/Introduction';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "YARDO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return <>
    <Banner />
    <Introduction/>
  </>
}
