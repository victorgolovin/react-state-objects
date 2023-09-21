import React, {useState} from 'react'
import './BIO.css'

const BIO = () => {

  const [person, setPerson] = useState({
    name: 'Victor',
    surname: 'Golovin',
    age: 29,
    sex: 'male',
    interest: ['youtube', 'предпринемательство', 'карьера']
  });

  const [form, setForm] = useState({
    name: '',
    surname: '',
    age: 0,
    sex: 'female',
    interest: ''
  });

  const [isError, setError] =useState(false);

  const handleInputChange = (event) => {
    const { name, value} = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBtnClick = (key) => {
    let value = form[key];

    if (!value) {
      setError(true)
      return
    }

    setError(false)

    if (Array.isArray(person [key])) {
      value = [...person[key], form[key]];
    }

    setPerson({
      ...person,
      [key]: value
    })
  }

  return (
    <div className='Bio'>
      { isError ?  (<p>Ошибка в форме</p>) : ''}

      <input 
        type="text"
        name="name"
        value={form.name}
        onChange={handleInputChange} />

      <button 
        onClick={() => handleBtnClick('name')}>
        Задать Имя
      </button>

      <input 
        type="text"
        name="surname"
        value={form.surname}
        onChange={handleInputChange} />

      <button 
        onClick={() => handleBtnClick('surname')}>
        Задать Фамилию
      </button>

      <input 
        type="number"
        name="age"
        value={form.age}
        onChange={handleInputChange} />

      <button 
        onClick={() => handleBtnClick('age')}>
        Задать Возраст
      </button>

      <p>
        Пол:
        <label>
          <input 
          type="radio" 
          name="sex" 
          value="male" 
          checked={form.sex === 'male'}
          onChange={handleInputChange} />
          мужской
        </label>
        <label>
          <input 
          type="radio" 
          name="sex" 
          value="female"
          checked={form.sex === 'female'}
          onChange={handleInputChange} />
          женский
        </label>
        <button 
        onClick={() => handleBtnClick('sex')}>
        Задать Пол
      </button>
      </p>

      <input 
        type="text"
        name="interest"
        value={form.interest}
        onChange={handleInputChange} />

      <button 
        onClick={() => handleBtnClick('interest')}>
        Дабавить Интерес
      </button>

      <p>Имя: {person.name}</p>
      <p>Фамилия: {person.surname}</p>
      <p>Возраст: {person.age}</p>
      <p>Пол: {person.sex === 'male' ? 'мужской' : 'женский'}</p>
      <p>Интересы:</p>
      <div>
        {person.interest.map(interest => (
        <p key={interest}>{interest}</p>
      ))}
      </div>
    </div>
  )
}

export default BIO
