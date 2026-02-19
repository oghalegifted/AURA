
import Footer from "../Footer";
import Navbar from "../Navbar";
import '../index.css'
import Card from "../Card";

function Mth() {
    return (

        <>
        <Navbar />
        <h1>MATHEMATICS
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pi-icon lucide-pi"><line x1="9" x2="9" y1="4" y2="20"/><path d="M4 7c0-1.7 1.3-3 3-3h13"/><path d="M18 20c-1.7 0-3-1.3-3-3V4"/></svg>
        </h1>

        <Card 
        title="MATHEMATICS PAST QUESTIONS"
        info="First semester examination 2023/2024"
        link=" https://drive.google.com/file/d/1JvvD0SHbq3moN8BQqIyRFlaOlWV73Yn7/view?usp=drive_link"
        />
        <Card 
        title="MATHEMATICS TUTORIAL QUESTIONS 1"
        info=" Questions on maths only (no answers available)"
        link="https://drive.google.com/file/d/1JEwsU5mkyesI9PeTvrp4pcdlF6PpC3J3/view?usp=drive_link"
        />
        <Card 
        title="MATHEMATICS TUTORIAL QUESTIONS 2"
        info="Questions on maths only (no answers available)"
        link="https://drive.google.com/file/d/1IqAmioXbsJkNXJqpqs1pLBTo3U7ilx65/view?usp=drive_link"
        />
        {/* <Card 
        title=""
        info=""
        link=""
        /> */}
        <Footer />
        </>
    )
}

export default Mth;