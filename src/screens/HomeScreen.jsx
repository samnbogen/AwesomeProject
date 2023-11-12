import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import React from 'react';
import {
  SafeAreaView, Button
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
  
    const handleAddTask = (taskText) => {
      setTasks([...tasks, taskText]);
    };

    return (
        <MainLayout>
            <SafeAreaView>  
                <ToDoList tasks={tasks}/>
                <ToDoForm addTask={handleAddTask}/>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default HomeScreen;