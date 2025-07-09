import { HomeLayout, HomeLayoutEmpty } from './home-layout';

export function HomePage() {
  return <HomeLayout empty={<HomeLayoutEmpty />} />;
}
