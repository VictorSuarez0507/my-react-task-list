import React, { useState } from "react";
import Header from "./Header";
import Task from "./Task";
import useCustom from "../hooks/useCutom";
import { Container, Flex, ListItem, Table, Tbody,
   TableContainer, UnorderedList, VStack, Tr, Th, Td, Input, Textarea, Text, Button } from "@chakra-ui/react";

const TaskList = () => {
   
  const { listTask, createTask, deleteTask, updateTask, setListTask } = useCustom();
  
  const [editId, setEditId] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editDescription, setEditDescription] = useState("");


  const handleNewTask = (dataTask) => {
    createTask(dataTask);
  };

  const handleComplete = (taskId) => {
    setListTask(listTask.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  ));
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTask(task.tasks);
    setEditDescription(task.description);
  };

  const handleCancel = () => {
    setEditId("");
    setEditTask("");
    setEditDescription("");
  };

  const handleSave = () => {
    updateTask(editId, { tasks: editTask, description: editDescription });
    handleCancel();
  };


  return (
    <Container bg="purple.100" mt="10" borderRadius="15px">
      <Header />
      <Task handleNewTask={handleNewTask} />
      <VStack  alignItems="left">      
        {listTask.map((task) => (
          <UnorderedList key={task.id}>
            <ListItem 
              listStyleType="none" 
              border=" 1px solid purple" 
              borderRadius="10px"
              p="10px"
              maxH="400px"
            >
              <TableContainer>
                <Table>
                  <Tbody >
                    <Tr >
                      <Th border="0" p="2px" >
                        {editId === task.id ? (
                          <Input
                          type="text"
                          value={editTask}
                          className="listToDo final"
                          onChange={(e) => setEditTask(e.target.value)}
                          />
                        ) : (                                   
                          <Text textDecoration={task.completed ? 'line-through' : 'none'}
                          color="black"
                          fontSize="15px"
                          >
                            {task.tasks}
                          </Text>
                        )}                          
                      </Th>
                    </Tr>
                    <Tr>
                      <Td border="0" p="2px">
                        {editId === task.id ? (
                          <Textarea
                          type="text"
                          value={editDescription}
                          className="listToDo final" 
                          onChange={(e) => setEditDescription(e.target.value)}
                          />
                          ) : (
                            <Text textDecoration={task.completed ? 'line-through' : 'none'}
                              color="black"
                              fontSize="15px"
                            >
                              {task.description}
                            </Text>
                        )}                                
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>               
              <Flex>     
                  {editId === task.id ? (
                <>
                  <Button
                    color="#088A08" 
                    variant='outline' 
                    border="none"
                    onClick={handleSave}
                  >
                    <i className="fa-solid fa-check"></i>
                  </Button>
                  <Button
                    color="#FF0000" 
                    variant='outline' 
                    border="none"
                    onClick={handleCancel}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </Button>
                </>
                ) : (
                <>
                  <Button 
                    color="#088A08" 
                    variant='outline' 
                    border="none"
                    onClick={() => handleComplete(task.id)}
                  >
                    <i className="fa-regular fa-circle-check"></i>
                  </Button>
                  <Button 
                    color="#FF0000" 
                    variant='outline' 
                    border="none"
                    onClick={() => handleEdit(task)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Button>
                  <Button 
                    color="#0B2161" 
                    variant='outline' 
                    border="none" 
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </Button> 
                </>
                )}                          
              </Flex>                 
            </ListItem>
          </UnorderedList>        
        ))}                    
      </VStack>
    </Container>
  );
};

export default TaskList;



