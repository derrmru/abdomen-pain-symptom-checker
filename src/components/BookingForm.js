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
            <input type="submit" value="Submit >" />
        </form>
        </div>
    )
}

export default BookingForm