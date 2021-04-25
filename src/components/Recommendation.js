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
            <h3 style={{color: 'var(--abdomen)'}}>Our Recommendation:</h3>
            <div className={style.recommendationText}>
                <div>
                    {
                        recommendation === 'CT Abdo-Pelvis' ?
                            <>
                                <p>Based on your answers, we would advise on a CT scan of the abdomen and pelvis and blood tests followed by a consultation with our doctor Mr. Ashish Rohatgi.</p>
                                <p>The Package fee associated with this is £900, inclusive of tests and consultation.</p>
                            </> :
                                recommendation === 'US Abdomen / Pelvis' ?
                                <>
                                    <p>Based on your answers, we would advise on an ultrasound scan of the abdomen and pelvis and blood tests followed by a consultation with our doctor Mr. Ashish Rohatgi.</p>
                                    <p>The Package fee associated with this is £800, inclusive of tests and consultation.</p>
                                </> :
                                    recommendation === 'US Abdomen' &&
                                    <>
                                        <p>Based on your answers, we would advise on an ultrasound scan of the abdomen and blood tests followed by a consultation with our doctor Mr. Ashish Rohatgi.</p>
                                        <p>The Package fee associated with this is £600, inclusive of tests and consultation.</p>
                                    </>
                    }
                    <p>If you would like to book an appointment or have further questions, please do not hesitate to get in touch.</p>
                </div>
                <div className={style.bookingButtons}>
                    <button
                        style={{border: 'none'}}
                        onClick={() => setOpenForm(!openForm)}
                        >
                        Request An Appointment
                    </button>
                    {
                    openForm && <div>
                        <BookingForm 
                            fields={fields}
                            updateField={(name, value) => updateField(name, value)}
                            />
                    </div>
                    }
                    {/*<a className={style.buttonPageLink} style={{textDecoration: 'none', border: 'none'}} href='/contact'>
                        <button>
                            Contact Us
                        </button>
                    </a>*/}
                </div>
            </div>
            <hr style={{margin: ' 20px auto 10px auto', width: '100%', border: 'none', backgroundColor: 'var(--abdomen)', height: '1px'}} />
        </div>
    )
}

export default Recommendation