

import Footer from "../Footer";
import Navbar from "../Navbar";
import '../index.css'
import Card from "../Card";



function Eng() {
    return (

        <>
        <Navbar />
        <h1>ENGLISH
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-case-sensitive-icon lucide-case-sensitive"><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M22 9v7"/><path d="M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/></svg>
        </h1>

        <Card 
            title="GST 111 INTRO - Use Of English"
            info="English language and communication"
            link="https://drive.google.com/file/d/1JAxIFlA7cCuytBhHH8LYP3CvpyywD0oH/view?usp=drive_link"
        />
        <Card 
            title="USE OF ENGLISH SUMMARY"
            info="Summary on use of english"
            link="https://drive.google.com/file/d/1J79VYmwj2EZqqCS2Y7UcMN5AOHqUrE8f/view?usp=drive_link"
        />
        <Card 
            title="USE OF ENGLISH PAST QUESTIONS"
            info="Past questions on use of english"
            link="https://drive.google.com/file/d/1JaQKXZsKSDySYopogUaO1D2fX2R1T0hV/view?usp=drive_link"
        />
        <Card 
            title="USE OF ENGLISH SUMMARY NOTES"
            info="Summary on the use of english"
            link="https://drive.google.com/file/d/1IOlT7g-6HRoAiFpws8p1UhoFGs8v3DZM/view?usp=drive_link"
        />
        <Footer />
        </>
    )
}

export default Eng;