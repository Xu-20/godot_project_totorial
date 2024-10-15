import React, { useState } from 'react'
import './LogsForm.css'
import Card from '../../UI/Card/Card'

const LogsForm = (props) => {
  const [inputDate, setInputDate] = useState('')
  const [inputDesc, setInputDesc] = useState('')
  const [inputTime, setInputTime] = useState('')

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
  }
  const descChangeHandler = (event) => {
    setInputDesc(event.target.value)
  }
  const timeChangeHandler = (event) => {
    setInputTime(event.target.value)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault()
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime
    }
    props.onAddLog(newLog)
    setInputDate('')
    setInputDesc('')
    setInputTime('')
  }

  return (
    <Card className='logs-form'>
      <form onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <label htmlFor='date'>日期:</label>
          <input onChange={dateChangeHandler} value={inputDate} type='date' id='date' name='date' />
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容:</label>
          <input onChange={descChangeHandler} value={inputDesc} type='text' id='desc' name='desc' />
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时长:</label>
          <input onChange={timeChangeHandler} value={inputTime} type='number' id='time' name='time' />
        </div>
        <div className='form-btn'>
          <button type='submit'>添加</button>
        </div>
      </form>
    </Card>
  )
}

export default LogsForm