import React, { useState } from 'react'
import './LogItem.css'
import MyDate from './MyDate/MyDate'
import Card from '../../UI/Card/Card'
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal'

const LogItem = (props) => {
  const [showConfirm, setShowConfirm] = useState(false)

  const deleteItemHandler = () => {
    setShowConfirm(true)
  }

  //取消函数
  const cancelHandler = () => {
    setShowConfirm(false)
  }

  //确认函数
  const confirmHandler = () => {
    props.onDelLog(props.id)
    setShowConfirm(false)
  }

  return (
    <Card className='item'>
      {showConfirm && <ConfirmModal
        onCancel={cancelHandler}
        onOk={confirmHandler}
      />}

      <MyDate date={props.date} />

      <div className='content'>
        <h2 className='desc'>{props.desc}</h2>
        <div className='time'>{props.time}</div>
      </div>
      <div>
        <div onClick={deleteItemHandler} className='delete'>X</div>
      </div>
    </Card>
  )
}

export default LogItem