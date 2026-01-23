import Image from "next/image";
import Slider from "./component/slider";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Hero  from './component/hero';
import InterviewSection from "./component/left";
import Gallery from "./component/gallery";
import ImpactSection from "./component/impact";


export default function Home() {
  return (
    <div className="">
      
<Nav/>
<Slider/>
<Hero/>
<InterviewSection/>
<ImpactSection/>
<Gallery/>
<Footer/>

    </div>
  );
}
