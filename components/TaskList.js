import { Text, FlatList, RefreshControl} from 'react-native'
import React, {useState, useEffect} from 'react'

import TaskItem from './TaskItem'
import { getTasks, deleteTask} from '../api'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [refresing, setRefresing] = useState(false)

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }


    useEffect(() => {
      loadTasks()
    }, [])

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const renderItem = ({item}) => {
    return <TaskItem task={item} handleDelete={handleDelete}/>
  }

  const onRefresh = React.useCallback(async () => { 
    setRefresing(true);
    await loadTasks();
    setRefresing(false);
  });


  return (
    <FlatList
    style={{width: '100%'}}
      data={tasks}
      keyExtractor={item => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
        />
      }
    />
  )
}

export default TaskList