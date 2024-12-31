
import ContactForm from "@/components/custom/Form";
import ImageCarousel from "@/components/custom/ImageCarousel";
import Navbar from "@/components/custom/Navbar";
import Carousel from "@/components/custom/ProjectCarousel";
import { Testimonials } from "@/components/custom/Testimonials";
import { Images } from "@/lib/Images";

export default function Home() {

    return (
        <div className="overflow-hidden">
            <Navbar />
            <ImageCarousel images={Images} />
            <Carousel />
            <Testimonials />
            <ContactForm />
        </div>
    );
}


