import React from 'react';
import {
    Container,
    Table,
    TableContainer,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Text,
    Divider,
    TableCaption,
    Button
} from '@chakra-ui/react';

import { EditIcon, DeleteIcon } from '@chakra-ui/icons';


const TableTasks = ({ appendToParentPortal = true, list, removeTask, editTask }) => {


    const removeData = (id) => {
        removeTask(id);
    };

    const editData = (task) => {
        editTask();
    }


    return (
        <Container maxW='1200px' padding={10}>

            <Text fontSize='40px' mx={2} align='center'>
                Lista de Tarefas
            </Text>
            <Divider />

            <TableContainer boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Tarefas</Th>
                            <Th>Data de Criação</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {list.map(item => (
                            <Tr key={item.id}>
                                <Td>{item.task}</Td>
                                <Td>{item.created}</Td>
                                <Td>{item.status ? 'Pendente' : 'Concluído'}</Td>
                                <Td>
                                    <Button colorScheme='white' title='Editar tarefa'>
                                        <EditIcon color={'blue'} boxSize={6} />
                                    </Button>
                                    <Button colorScheme='white' title='Remover tarefa' marginLeft={2} onClick={()=> editData(item)}>
                                        <DeleteIcon color={'tomato'} boxSize={6} onClick={() => removeData(item.id)} />
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    {
                        list.length === 0 ?
                            <TableCaption fontSize={25} color={'tomato'}>Nenhum item encontrado</TableCaption> : ''
                    }
                </Table>
            </TableContainer>
        </Container>
    )
}

export default TableTasks;