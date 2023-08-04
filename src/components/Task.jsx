import React, { useState } from "react";
import { VStack, Flex, Input, Button, Textarea, Text } from "@chakra-ui/react";

const Task = ({ handleNewTask }) => {
    
    const [tasks, setTasks] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState({
        tasks: undefined,
        description: undefined,
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTask({ tasks, description });
    setTasks("");
    setDescription("");
    };

    const handleChange = (e) => {
    const value = e.target.value
    if(value.length <= 3){
        setError({
            ...error,
            tasks: "La tarea debe tener mas de 3 caracteres"          
        })
        }else {
            setError({
            ...error,
            tasks: "",
            description: ""
        })
    }
    setTasks(value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const formValid = Object.keys(error).every(
        (key) => error[key] === "")

    return (
        <VStack>
            <form onSubmit={handleSubmit}>
                <Flex>
                    <Input
                        type="text"
                        id="tasks"
                        value={tasks}
                        placeholder="Añade una tarea" 
                        bg="purple.400"
                        border="1px solid wheat"
                        size="lg"
                        onChange={handleChange}
                        required
                    />
                    <Button 
                        type="submit" 
                        bg="purple.700" 
                        colorScheme="purple" 
                        size="lg" 
                        variant='solid'
                        isDisabled={!formValid}>
                        Agregar
                    </Button>     
                </Flex>
                <Text role="alert">{error.tasks}</Text>
                <Flex>
                    <Textarea rows="4" cols="10"
                        type="text"
                        id="description"
                        value={description}
                        placeholder= "Descripcion de la tarea"
                        bg="purple.200"
                        border="1px solid wheat"
                        size="lg" 
                        mb="50px"
                        className="bodyTask"
                        onChange={handleDescription}
                    />
                </Flex>
            </form>
        </VStack>
    );
};

export default Task;