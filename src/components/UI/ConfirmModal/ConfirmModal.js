import React from 'react'
import './ConfirmModal.css'
import BackDrop from '../BackDrop/BackDrop'

const ConfirmModal = (props) => {
  return (
    <BackDrop>
      <div className='confirmModal'>
        <div className='confirmText'>
          <p>确认删除吗？</p>
        </div>
        <div className='confirmButton'>
          <button onClick={props.onOk}>确认</button>
          <button onClick={props.onCancel}>取消</button>
        </div>
      </div>
    </BackDrop>
  )
}

export default ConfirmModal