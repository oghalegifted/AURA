

import Footer from "../Footer";
import Navbar from "../Navbar";
import '../index.css'
import Card from "../Card";

function Gst() {
    return (

        <>
        <Navbar />
        <h1>GENERAL STUDIES
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check-icon lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>
        </h1>

        <Card 
        title="COMPLETE SUMMARY OF NIGERIAN PEOPLE AND CULTURE"
        info="Summary notes on gst people and culture"
        link=" https://drive.google.com/file/d/1IX31KouDHtszNfDQxamkIZGJksgm6cb5/view?usp=drive_link"
        />
        <Card 
        title="COMPLETE SUMMARY OF PHYSIOLOGY AND LOGIC"
        info="Summary notes on gst physiology and logic"
        link="https://drive.google.com/file/d/1KbsZieYFkfOg9M7JBsUqZQhZuTrVm4Cc/view?usp=drive_link"
        />
        <Card 
        title="COMPLETE SUMMARY OF NIGERIAN PEOPLE AND. CULTURE 2"
        info="Summary notes on gst people and culture"
        link="https://drive.google.com/file/d/1KRqcV0l2Eh3wKeDV_ydLCQBcd95hLpXl/view?usp=drive_link"
        />
        <Card 
        title="COMPLETE SUMMARY OF NIGERIAN PEOPLE AND. CULTURE 3"
        info="Summary notes on gst people and culture"
        link="https://drive.google.com/file/d/1JRQ0EZzo15utuOdBdcTkI5xmHNA2kR_J/view?usp=drive_link"
        />
        <Card 
        title="COMPLETE SUMMARY OF NIGERIAN PEOPLE AND. CULTURE 4"
        info="Summary notes on gst people and culture"
        link=" https://drive.google.com/file/d/1JpuRRhNx3V-u5C0UgrIyZlh_VLnw6e76/view?usp=drive_link"
        />
        <Card 
        title="GST MATERIAL"
        info="Summary of gst material"
        link="https://drive.google.com/file/d/1K9-DIJtBlZCC-K1Pw2LvQMlDnUSKX2Om/view?usp=drive_link"
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

export default Gst;