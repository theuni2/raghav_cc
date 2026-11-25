import Image from "next/image";
import Slider from "./component/slider";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Hero  from './component/hero';
import BookSection from "./component/book";
import KarmaveerAward from "./component/award";
import LeadershipSection from "./component/leadership";
import SmilesAcrossMiles from "./component/smiles";
import ImpactSection from "./component/impact";
import MediaCoverage from "./component/media";
import InterviewSection from "./component/left";
import Gallery from "./component/gallery";

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Slider/>
      <Hero/>
      <BookSection/>
      <KarmaveerAward/>
      <LeadershipSection/>
      <SmilesAcrossMiles/>
      <ImpactSection/>
      <MediaCoverage/>
      <InterviewSection/>
      <Gallery/>
      <Footer/>
    </div>
  );
}
