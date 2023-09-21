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
    age: 0
  });

  const [isError, setError] =useState(false);

  const handleNameInputChange = (event) => {
    setForm({
      ...form, // 
      name: event.target.value
    })
    console.log(event.target.value)
  }

  const handleSetNameBtnClick = () => {
    if (!form.name) {
      setError(true)
      return
    }

    setError(false)

    setPerson({
      ...person,
      name: form.name
    })
  }

  const handleSurnameInputChange = (event) => {
    setForm({
      ...form, // 
      surname: event.target.value
    })
    console.log(event.target.value)
  }

  const handleSetSurnameBtnClick = () => {
    if (!form.surname) {
      setError(true)
      return
    }

    setError(false)

    setPerson({
      ...person,
      surname: form.surname
    })
  }

  const handleAgeInputChange = (event) => {
    setForm({
      ...form, // 
      age: event.target.value
    })
    console.log(event.target.value)
  }

  const handleSetAgeBtnClick = () => {
    if (!form.age) {
      setError(true)
      return
    }

    setError(false)

    setPerson({
      ...person,
      age: parseInt(form.age) // parseInt () перевод числа в строку
    })
  }

  return (
    <div className='Bio'>
      { isError ?  (<p>Ошибка в форме</p>) : ''}

      <input 
        type="text"
        name="name"
        value={form.name}
        onChange={handleNameInputChange} />

      <button 
      onClick={handleSetNameBtnClick}>Задать Имя</button>

      <input 
        type="text"
        name="surname"
        value={form.surname}
        onChange={handleSurnameInputChange} />

      <button 
      onClick={handleSetSurnameBtnClick}>Задать Фамилию</button>

      <input 
        type="number"
        name="age"
        value={form.age}
        onChange={handleAgeInputChange} />

      <button 
      onClick={handleSetAgeBtnClick}>Задать Возраст</button>

      <p>Имя: {person.name}</p>
      <p>Фамилия: {person.surname}</p>
      <p>Возраст: {person.age}</p>
      <p>Пол: {person.sex}</p>
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
