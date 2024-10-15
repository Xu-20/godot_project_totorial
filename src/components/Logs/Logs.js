import React, { useState, useEffect } from 'react'
import LogItem from './LogItem/LogItem'
import './Logs.css'
import Card from '../UI/Card/Card'
import LogFilter from './LogFilter/LogFilter'

const Logs = (props) => {
  //创建useState hook，用于存储年份
  const [year, setYear] = useState(2021);
  //创建一个储存过滤后的日志数据的state
  const [filterData, setFilterData] = useState([]);

  //创建useEffect hook，用于过滤日志数据
  useEffect(() => {
    const newfilterData = year === null
      ? props.logsData
      : props.logsData.filter(item => item.date.getFullYear() === year)
    setFilterData(newfilterData)
  }, [year, props.logsData])


  //创建handleYearChange函数，用于改变年份
  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value), 10);
  }

  //创建一个函数，用来显示所有年份的数据
  const handleShowAllYears = () => {
    setYear(null);
  }

  const logItemDate = filterData.map((item) => <LogItem
    onDelLog={() => props.onDelLog(item.id)}
    key={item.id}
    {...item}
  />)
  return (
    <Card className='logs'>

      <div className='logs-header'>
        <LogFilter
          onYearChange={handleYearChange}
          year={year}
        />
        <button className='show-all-btn' onClick={handleShowAllYears}>显示全部年份</button>
      </div>
      {logItemDate.length !== 0 ? logItemDate : <p className='no-logs'>No logs found</p>}
    </Card>
  )
}

export default Logs