import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Update() {
    const [id, setID] = useState(null)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setNome(localStorage.getItem('Nome'))
        setSobrenome(localStorage.getItem('Sobrenome'))
        setIdade(localStorage.getItem('Idade'))
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, [])

    const updateAPIData = () => {
        axios.put(`https://638162f69440b61b0d16b934.mockapi.io/fakeData/${id}`, {
            nome,
            sobrenome,
            idade,
            checkbox
        }).then(() => {
            navigate.push('/components/Read')
        })
    }
    
    const navigate = useNavigate()

    return (
        <div>
             <Form className='create-form'>
                <Form.Field>
                    <label>Nome</label>
                    <input type={'text'} placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input type={'text'} placeholder='Sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Idade</label>
                    <input type={'text'} placeholder='Idade' value={idade} onChange={(e) => setIdade(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com os Termos e Condições' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Enviar</Button>
            </Form>
        </div>
    )
}