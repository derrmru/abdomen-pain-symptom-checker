import { useState, useEffect } from 'react'
import BookingForm from './BookingForm'
import style from './Recommendation.module.css'

const Recommendation = ({ fields, updateField }) => {
    const bmi = (fields.weight / Math.pow(fields.height, 2)).toFixed(1);

    //recommendation state
    const [recommendation, setRecommendation] = useState('');

    useEffect(() => {
        if (
            (fields.area_of_pain === 'Umbilical' || fields.area_of_pain === 'Right Upper Quadrant') &&
            fields.prior_operations === 'No' &&
            (fields.associated_lump === 'Yes' && (fields.lump_size === "Less Than 2cm (marble)" || fields.lump_size === '2 - 5cm (ping pong ball)')) &&
            fields.change_in_bowel_habits === 'No' &&
            bmi < 28
        ) {
            setRecommendation('US Abdomen')
        } else if (
            fields.area_of_pain === 'Pelvis' &&
            (fields.age === "30 - 50 Years Old" || fields.age === "Younger Than 30") &&
            bmi < 28
        ) {
            setRecommendation('US Abdomen / Pelvis')
        } else {
            setRecommendation('CT Abdo-Pelvis')
        }
    }, [
        bmi, 
        fields.age, 
        fields.area_of_pain, 
        fields.associated_lump, 
        fields.change_in_bowel_habits, 
        fields.lump_size, 
        fields.prior_operations
    ])

    //open form
    const [openForm, setOpenForm] = useState(false);

    return (
        <div className={style.recommendationContainer}>
            <h3>Our Recommendation:</h3>
            <div className={style.recommendationText}>
                <div>
                    {
                        recommendation === 'CT Abdo-Pelvis' ?
                            <>
                                <p>We would advise on a <strong>CT scan of the abdomen and pelvis</strong> followed by an appointment with our Consultant Upper GI, General & Laparoscopic Surgeon, Mr. Ashish Rohatgi.</p>
                                <p>The fees associated with this are:</p>
                                <ul>
                                    <li>£0</li>
                                    <li>£0</li>
                                </ul>
                            </> :
                                recommendation === 'US Abdomen / Pelvis' ?
                                <>
                                    <p>We would advise on an <strong>ultrasound scan of the abdomen and pelvis</strong> followed by an appointment with our Consultant Upper GI, General & Laparoscopic Surgeon, Mr. Ashish Rohatgi.</p>
                                    <p>The fees associated with this are:</p>
                                    <ul>
                                        <li>£0</li>
                                        <li>£0</li>
                                    </ul>
                                </> :
                                    recommendation === 'US Abdomen' &&
                                    <>
                                        <p>We would advise on an <strong>ultrasound scan of the abdomen</strong> followed by an appointment with our Consultant Upper GI, General & Laparoscopic Surgeon, Mr. Ashish Rohatgi.</p>
                                        <p>The fees associated with this are:</p>
                                        <ul>
                                            <li>£0</li>
                                            <li>£0</li>
                                        </ul>
                                    </>
                    }
                    <p>If you would like to reserve an appointment or have further questions, please do not hesitate to get in touch.</p>
                </div>
                <div className={style.bookingButtons}>
                    <button
                        onClick={() => setOpenForm(!openForm)}
                        >
                        Book An Appointment
                    </button>
                    {
                    openForm && <div>
                        <BookingForm 
                            fields={fields}
                            updateField={(name, value) => updateField(name, value)}
                            />
                    </div>
                    }
                    <a className={style.buttonPageLink} style={{textDecoration: 'none'}} href='/contact'>
                        <button>
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Recommendation