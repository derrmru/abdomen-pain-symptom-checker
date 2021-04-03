import { useState } from 'react';
import Torso from './components/Torso';
import Recommendation from './components/Recommendation';
import Radio from './components/form_components/Radio';
import NumberInput from './components/form_components/NumberInput';
import './App.css';

function App() {
  //stage of form
  const stages = [
    'torso', 
    'character of pain', 
    'duration of pain', 
    'prior operations',
    'associated lump',
    'how big is the lump',
    'change in bowel habits',
    'age',
    'bmi',
    'recommendation'
  ]
  const [inc, setInc] = useState(0);

  //handle form state
  const [fields, setFields] = useState({});
  const updateField = (name, value) => {
    const temp = { ...fields }
    temp[name] = value;
    setFields(temp)
  }

  const increment = () => {
    if (inc < stages.length - 1 && inc <= Object.keys(fields).length - 1) {
      if (inc === 4 && fields.associated_lump === 'Yes') {
        setInc(5)
      } else if (inc === 4 && fields.associated_lump === 'No') {
        setInc(6)
      } else {
        setInc(inc + 1)
      }
    } 
  }

  const decrement = () => {
    if (inc > 0) {
      if (inc === 6 && fields.associated_lump === 'No') {
        setInc(4)
      } else {
        setInc(inc - 1)
      }
    }
  }

  console.log(inc)
  console.log(fields.associated_lump)
  console.log(fields)
  return (
    <div className="App">
      <div>
        {
          inc < stages.length - 1 ? 
            'Question ' + (inc + 1) + ' of ' + (stages.length - 1) :
              'Next Steps'
        }
      </div>
      <div className="torso-flex-container">
        {
          stages[inc] === 'torso' ?
            <Torso
              updateField={(name, value) => updateField(name, value)}
              selection={fields.area_of_pain}
            /> :
            stages[inc] === 'character of pain' ?
              <div key='2' className='question-container fade-in'>
                <Radio
                  name="character_of_pain"
                  value={fields.character_of_pain}
                  updateField={(name, value) => updateField(name, value)}
                  fields={fields}
                  label="Character of Pain"
                  description="Which of the below best describes the character of the pain you are experiencing?"
                  options={['Continuous', 'On and Off', 'Regular', 'Aggravated By Food And Dairy']}
                />
              </div> :
                stages[inc] === 'duration of pain' ?
                  <div key='3' className='question-container fade-in'>
                    <Radio
                      name="duration_of_pain"
                      value={fields.duration_of_pain}
                      fields={fields}
                      updateField={(name, value) => updateField(name, value)}
                      label="Duration of Pain"
                      description="Let us know how long you have been experiencing pain."
                      options={['Less Than 1 Month', '1 - 6 Months', 'More Than 6 Months', 'More Than 2 Years']}
                    />
                  </div> :
                  stages[inc] === 'prior operations' ?
                    <div key='4' className='question-container fade-in'>
                      <Radio
                        name="prior_operations"
                        value={fields.prior_operations}
                        fields={fields}
                        updateField={(name, value) => updateField(name, value)}
                        label="Have You Undergone Any Prior Operations?"
                        description="If you have undergone previous abdominal surgery, let us know."
                        options={['Yes', 'No']}
                      />
                    </div> :
                      stages[inc] === 'associated lump' ?
                      <div key='5' className='question-container fade-in'>
                        <Radio
                          name="associated_lump"
                          value={fields.associated_lump}
                          fields={fields}
                          updateField={(name, value) => updateField(name, value)}
                          label="Is There An Associated Lump?"
                          options={['Yes', 'No']}
                        /> 
                      </div> :
                        stages[inc] === 'how big is the lump' ?
                          <div key='6' className='question-container fade-in'>
                            <Radio
                                name="lump_size"
                                value={fields.lump_size}
                                fields={fields}
                                updateField={(name, value) => updateField(name, value)}
                                label="How Large Is The Lump?"
                                options={['Less Than 2cm (marble)', '2 - 5cm (ping pong ball)', '5 - 10cm (tennis ball)', 'Greater Than 10cm']}
                              />
                          </div> :
                        stages[inc] === 'change in bowel habits' ?
                          <div key='7' className='question-container fade-in'>
                            <Radio
                              name="change_in_bowel_habits"
                              value={fields.change_in_bowel_habits}
                              fields={fields}
                              updateField={(name, value) => updateField(name, value)}
                              label="Have You Experienced A Change In Bowel Habits?"
                              options={['Yes', 'No']}
                            />
                          </div> :
                            stages[inc] === 'age' ?
                              <div key='8' className='question-container fade-in'>
                                <Radio
                                  name="age"
                                  value={fields.age}
                                  fields={fields}
                                  updateField={(name, value) => updateField(name, value)}
                                  label="What Age Are You?"
                                  options={['Younger Than 30', '30 - 50 Years Old', 'Older Than 50']}
                                />
                              </div> :
                                stages[inc] === 'bmi' ?
                                  <div key='8' className='question-container fade-in'>
                                    <NumberInput
                                      name="height"
                                      value={fields.height}
                                      updateField={(name, value) => updateField(name, value)}
                                      description="Please provide your height in metres."
                                    />
                                    <NumberInput
                                      name="weight"
                                      value={fields.weight}
                                      updateField={(name, value) => updateField(name, value)}
                                      description="Please provide your weight in kilograms."
                                    />
                                    {
                                      (fields.height && fields.weight) && <div className="BMIBox fade-in">
                                        Your BMI is: {(fields.weight / Math.pow(fields.height, 2)).toFixed(1)}
                                      </div>
                                    }
                                  </div> :
                                    stages[inc] === 'recommendation' && <Recommendation 
                                      fields={fields}
                                      updateField={(name, value) => updateField(name, value)}
                                      />
        }
        {
          (Object.keys(fields).length >= 1 && inc >= 1) &&
            <button
              className="set-stage-button fade-in"
              onClick={() => decrement()}
            >
              Previous
            </button>
        }
        {
          (Object.keys(fields).length > 0 && inc < stages.length - 1) && <button
            className="set-stage-button fade-in"
            onClick={() => increment()}
          >
            Next
          </button>
        }
      </div>
    </div>
  );
}

export default App;