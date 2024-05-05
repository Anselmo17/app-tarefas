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
    Divider
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';


const TableTasks = ({ list }) => {
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
                                    <AddIcon />
                                </Td>
                            </Tr>
                        ))}

                        {
                            !list || list.length === 0 ?
                                <Tr align='center' mt={2} textAlign="center" fontSize='25px'>
                                    <Text>
                                        Nenhum task adicionada
                                    </Text>
                                </Tr>
                                : ''
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default TableTasks;