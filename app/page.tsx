import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "./../section/index";
import { Header, Footer } from "./../components/index";

const Page = ({}) => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Page;
