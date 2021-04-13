import TextInput from './form_components/TextInput'
import style from './BookingForm.module.css'

const BookingForm = ({ fields, updateField }) => {
    const submission = (e) => {
        e.preventDefault()
    }
    return (
        <div className="fade-in">
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
                    />
            </div>
        </form>
        </div>
    )
}

export default BookingForm