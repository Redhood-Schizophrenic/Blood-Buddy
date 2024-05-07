import Navbar from "../common/navbar";
import { Footer } from "../common/footer";
import DonateBackground from "../components/donate/background";
import Donate_Main from "../components/donate/content";

export default function Donate()
{
    return (
        <>
			<main className=" flex flex-col scroll-smooth">
            <DonateBackground/>

                {/* Navbar */}
                <section id="navbar" className="h-[20dvh] z-10">
                    <Navbar/>
                </section>

                <section id="content">
                    <Donate_Main/>
                </section>

                {/* Footer */}
                <section id="footer">
                    <Footer/>
                </section>
            </main>
        
        </>
        
    );
}