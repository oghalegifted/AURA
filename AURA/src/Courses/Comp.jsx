


import Footer from "../Footer";
import Navbar from "../Navbar";
import '../index.css'
import Card from "../Card";



function Comp() {
    return (

        <>
        <Navbar />
        <h1>COMPUTER
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
        </h1>

        <Card 
            title="COMPUTER PAST QUESTION"
            info="First semester examination 2019/2020 session"
            link="https://drive.google.com/file/d/1JnF324H82zyqpWlvJ6g7fn1QXFAb9Btv/view?usp=drive_link"
        />
        <Card 
            title="COMPUTER PAST QUESTIONS"
            info="First semester examination for 2013 to 2019 session"
            link="https://drive.google.com/file/d/1JyQZRTjEGC32J8RB7VQuVwgWdv24yX5Y/view?usp=drive_link"
        />
        <Card 
            title="COMPUTER PAST QUESTION"
            info="First semester examination 2021/2022 session"
            link="https://drive.google.com/file/d/1JkB5vTzbRJ1XaWp2zoQ0oLIhCHF_1boD/view?usp=drive_link"
        />
        <Card 
            title="https://drive.google.com/file/d/1JkB5vTzbRJ1XaWp2zoQ0oLIhCHF_1boD/view?usp=drive_link"
            info="Multiple choice questions"
            link="https://drive.google.com/file/d/1KT6lomg1phKGZDtf_eAtR0PZ3tw8eSn4/view?usp=drive_link"
        />
        <Footer />
        </>
    )
}

export default Comp;