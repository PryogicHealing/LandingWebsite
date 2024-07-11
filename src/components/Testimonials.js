import React from 'react';
import "../styles/Testimonials.css"

function Testimonials() {
    return (
       <>
       <div className="TestimonialsHead">
        <div className="Testimonialsheading">What people have to say about us:</div>
       </div>
        <div className="Testimonials">
            <div className="TestimonialsCards">
                <div className="cardText">As a beginner I've had the opportunity to 
                    practice yoga alongside Priyal ma'am. Exercising has never been 
                    my strong suit, but thanks to her guidance, I've managed to stay 
                    consistent. Her patience in teaching me the asanas and her 
                    commitment to ensure I don't overexert myself.
                </div>
                <div className="cardBy">- Shruti</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">“Priyal's approach to physical therapy 
                    not only compriees of physical exercise but also an 
                    interconnection of mental and spiritual aspects of self. 
                    She helped me find peace and strength through a combination of all”
                </div>
                <div className="cardBy">- Nehal</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">“I've practiced with and seen Priyal ma'am 
                    practice yoga for quite some time now. I never was someone to 
                    enjoy exercise but this has been the longest I’ve been consistent. 
                    All thanks to ma’am. She is patient when I take time to understand 
                    asanas and makes sure I don’t strain myself anytime. With her
                    practice doesn’t feel like a task”</div>
                <div className="cardBy">- Ananya Kashyap</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">I have been taking classes for 3 months now 
                    with Priyal now and my body feels almost new. She has helped me 
                    improve my flexibility and mobility.</div>
                <div className="cardBy">- Tanya</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">I joined Priyal's Yoga class because I had 
                    migraine. Since the day I joined I have no had a single migraine
                     episode and I have also lost some weight.</div>
                <div className="cardBy">- Dr. Arti</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">Priyal's attention to details and giving
                     modification is the best thing for me because my body is stiff
                      and she allows me space to modify the asanas according to my
                       capacity.</div>
                <div className="cardBy">- Smith</div>
            </div>
            <div className="TestimonialsCards">
                <div className="cardText">I was an overthinker and was looking for
                     yoga as help. I came across her class via Instagram. its been
                     2 months since I have joined and my overthinking has reduced. 
                     the way she directs us during a breathing class is very calming 
                     for me.</div>
                <div className="cardBy">- Shristhi</div>
            </div>
            
        </div>
       </>
    );
}

export default Testimonials;