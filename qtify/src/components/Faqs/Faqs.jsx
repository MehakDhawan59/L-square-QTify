import React from 'react'
import Accordians from '../Accordian/Accordians';
const query = [
    {
        summary: "Is QTify free to use?",
        detail: "Free for 1st 15 days"

    },
    {
        summary: "Can I download and listen to songs offline?",
        detail: "Sorry, unfortunately we don't provide the service to download any songs."
    }
]
function Faqs() {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>FAQ's</h2>
            {
                query.map((ele) => (
                    <Accordians data={ele} />
                ))
            }
        </div>
    )
}

export default Faqs