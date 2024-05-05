import React, { Fragment, useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Grid,
    GridItem,
    Container,
    Button
} from '@chakra-ui/react';
import TableTasks from '../table/table'


const Formulario = () => {

    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');


    const handleChange = (event) => {
        setValue(event.target.value);
    }


    function addTask() {
        const idRandomico = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

        const sendItem = {
            id: idRandomico,
            task: value,
            created: new Date().toLocaleDateString(),
            status: true
        }

        setValue('');
        setTasks([...tasks, sendItem]);
    }

    return (
        <Fragment>
            <Container maxW='1200px' padding={10} >
                <Grid columns='1' gap={6} backgroundColor={'white'} padding={10} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                    <GridItem>
                        <FormControl>
                            <FormLabel mt={4} fontSize={25} >Adicione a tarefa</FormLabel>
                            <Input placeholder='Digite a tarefa' type='text' value={value} onChange={handleChange} />
                        </FormControl>
                        <Button colorScheme='blue' mt={2} onClick={() => addTask()}>
                            Adicionar
                        </Button>
                    </GridItem>
                </Grid>
            </Container>

            <TableTasks list={tasks} />
        </Fragment>
    )
}

export default Formulario;