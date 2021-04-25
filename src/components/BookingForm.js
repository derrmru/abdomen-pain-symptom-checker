import { useEffect, useState } from 'react'
import $ from 'jquery'
import Loading from './Loading'
import TextInput from './form_components/TextInput'
import style from './BookingForm.module.css'

const BookingForm = ({ fields, updateField }) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [complete, setComplete] = useState(false)
    const submission = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        console.log(fields)

        $.post(
            window.location.origin + '/wp-admin/admin-ajax.php', 
            {action: 'abdomen_form_submit', form_data: fields}, 
            (res) => {
                console.log(res)
                res === 'Success' ? setComplete(true) : setError(true)
            }
        )
    }

    useEffect(() => {
        if (loading && (complete || error)) setLoading(false) 
    }, [loading, complete, error])

    return (
        <div className="fade-in">
        {
            !complete ?
            <form className={style.bookingFormContainer} onSubmit={(e) => submission(e)}>
            <TextInput 
                name='first_name'
                value={fields.first_name}
                updateField={(name, value) => updateField(name, value)}
                />
            <TextInput 
                name='last_name'
                value={fields.last_name}
                updateField={(name, value) => updateField(name, value)}
                />
            <TextInput 
                name='email_address'
                value={fields.email_address}
                updateField={(name, value) => updateField(name, value)}
                />
            <TextInput 
                name='telephone_number'
                value={fields.telephone_number}
                updateField={(name, value) => updateField(name, value)}
                />
            {
                error && <div style={{color: 'red'}}>Error</div>
            }
            <div
                style={{
                    width: '100%',
                    textAlign: 'right'
                }}
                >
                <input 
                    type="submit" 
                    style={{
                        float: 'right',
                        cursor: 'pointer',
                        backgroundColor: 'var(--abdomen)',
                        color: 'white',
                        padding: '10px',
                        boxSizing: 'border-box',
                        border: 'none',

                    }}
                    value="Submit >"
                    name="abdomen_submit" 
                    />
            </div>
        </form> :
            loading ? 
                <Loading /> :
                    complete && 
                        <div className={style.bookingFormContainer + ' fade-in'} style={{textAlign: 'center'}}>
                            <p style={{textAlign: 'left', width: '100%'}}>Your appointment request has been received and our admin team will be in touch with your shortly to arrange an appointment at your convenience.</p>
                            <p style={{textAlign: 'left', width: '100%'}}>If you would like to discuss anything in the meantime, please do not hesitate to contact our team via:</p>
                            <p style={{textAlign: 'left', width: '100%'}}>Telephone: 0207 467 6190<br/>Email: bookings@umegroup.com</p>
                        </div>
        }
        </div>
    )
}

export default BookingForm