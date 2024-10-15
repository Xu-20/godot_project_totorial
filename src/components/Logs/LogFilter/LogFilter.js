import React from 'react'
import './LogFilter.css'

const LogFilter = (props) => {
  const { onYearChange, year } = props; // 从 props 中解构出 onYearChange 和 year
  return (
    <div>
      年份:<select onChange={onYearChange} value={year}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  )
}

export default LogFilter