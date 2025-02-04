import type { Route } from "./+types/home";
import Banner from '../components/home/Banner';
import Introduction from '../components/home/Introduction';
import OurImpactNumbers from '../components/home/OurImpactNumbers';

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
    <OurImpactNumbers/>
  </>
}
