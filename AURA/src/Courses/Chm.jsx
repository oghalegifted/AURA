
import Footer from "../Footer";
import Navbar from "../Navbar";
import '../index.css'
import Card from "../Card";



function Chm() {
    return (

        <>
        <Navbar />
        <h1>CHEMISTRY
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tubes-icon lucide-test-tubes"><path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"/><path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"/><path d="M3 2h7"/><path d="M14 2h7"/><path d="M9 16H4"/><path d="M20 16h-5"/></svg>
        </h1>

        <Card 
            title="CHEMISTRY PAST QUESTION"
            info="First semester examination 2024/2023 session"
            link="https://drive.google.com/file/d/1JSkfqW46BQS7iMNBxu5Ocp8gmnMMnSv3/view?usp=drive_link"
        />
        <Card 
            title="ALCOHOL"
            info="Summary of the topic Alcohol"
            link="https://drive.google.com/file/d/1LG0QV__ZFHII89_9pObMa7sRhEYGIW6K/view?usp=drive_link"
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

export default Chm;