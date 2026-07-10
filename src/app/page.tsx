import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import ServicessProcess from "./home/partials/servicess-process";
import TrustedBy from "./home/partials/trusted-by";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicessProcess />
    </div>
  );
}
