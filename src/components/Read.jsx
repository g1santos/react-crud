import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, TableCell } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://638162f69440b61b0d16b934.mockapi.io/fakeData')
            .then((response) => {
                setAPIData(response.data)
            })
    }, [])

   const setData = (data) => {
        let { id, nome, sobrenome, idade, checkbox } = data;
        localStorage.setItem('ID', id)
        localStorage.setItem('Nome', nome)
        localStorage.setItem('Sobrenome', sobrenome)
        localStorage.setItem('Idade', idade)
        localStorage.setItem('Checkbox Value', checkbox)
   }

   const onDelete = (id) => {
        axios.delete(`https://638162f69440b61b0d16b934.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData()
            })
   }

   const getData = () => {
    axios.get(`https://638162f69440b61b0d16b934.mockapi.io/fakeData`)
        .then((getData) => {
            setAPIData(getData.data)
        })
   }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>Idade</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>    
                        <Table.HeaderCell>Delete</Table.HeaderCell>    
                    </Table.Row>
                    
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.sobrenome}</Table.Cell>
                            <Table.Cell>{data.idade}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Marcado' : 'Desmarcado'}</Table.Cell>
                            <Link to={'/components/Update'}>
                                <Table.Cell>
                                    <Button onClick={() => setData(data)}>Atualizar</Button>
                                </Table.Cell>
                            </Link>
                            <TableCell>
                                <Button onClick={() => onDelete(data.id)}>Deletar</Button>
                            </TableCell>
                        </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}