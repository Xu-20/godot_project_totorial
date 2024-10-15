import React from 'react'
import { useState } from 'react'
import './App.css'
import Logs from './components/Logs/Logs'
import LogsForm from './components/Logs/LogsForm/LogsForm'
import ConfirmModal from './components/UI/ConfirmModal/ConfirmModal'

const App = () => {
  // 模拟一组从服务器中加载的数据
  const [logsData, setLogsData] = useState([
    {
      id: '001',
      date: new Date(2021, 1, 20, 18, 30),
      desc: '学习九阳神功',
      time: 30
    },
    {
      id: '002',
      date: new Date(2022, 2, 10, 12, 30),
      desc: '学习降龙十八掌',
      time: 20
    },
    {
      id: '003',
      date: new Date(2022, 2, 11, 11, 30),
      desc: '学习JavaScript',
      time: 40
    },
    {
      id: '004',
      date: new Date(2022, 2, 15, 10, 30),
      desc: '学习React',
      time: 80
    }
  ]);

  //添加日志
  const saveLogHandler = (log) => {
    log.id = Date.now().toString();
    setLogsData([log, ...logsData]);
  }

  //删除日志
  const deleteLogHandler = (id) => {
    setLogsData(logsData.filter(log => log.id !== id));
  }

  return (
    <div className="app">
      <LogsForm onAddLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={deleteLogHandler} />
    </div>
  )
}

export default App