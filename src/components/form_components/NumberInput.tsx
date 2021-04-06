import style from './NumberInput.module.css'

interface Props {
    name: string,
    value: string,
    updateField: (name: string, value: string) => void,
    description?: string,
    id?: string
}

const NumberInput: React.FC<Props> = (props) => {

    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    return (
        <div className={style.NumberContainer}>
            <label className={style.numberLabel}>
                <div className={style.numberLabel} style={{width: '100%'}}>{splits[0].toUpperCase() + splits.slice(1).toLowerCase()}: </div>
                <p>{props.description}</p>
                <input
                    id={props.id || ''}
                    type="number"
                    style={{
                        width: '98%', 
                        margin: 'auto', 
                        border: '2px solid #08303a', 
                        borderRadius: 0, 
                        padding: '10px 5px', 
                        fontSize: '16px',
                        boxSizing: 'border-box'
                    }}
                    className={style.niInput}
                    name={props.name} 
                    value={props.value || ''}
                    onChange={(e) => props.updateField(props.name, e.target.value)}
                    required
                    />
            </label>
        </div>
    )
}

export default NumberInput