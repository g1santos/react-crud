import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState(null)
    const [checkbox, setCheckbox] = useState(Boolean)

    const postData = () => {
        // https://638162f69440b61b0d16b934.mockapi.io/fakeData //
        axios.post('https://638162f69440b61b0d16b934.mockapi.io/fakeData',{
            nome,
            sobrenome,
            idade,
            checkbox
        })
    }
    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Idade</label>
                    <input placeholder='Idade' onChange={(e) => setIdade(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com os Termos e Condições' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}>Enviar</Button>
            </Form>
        </div>
    )
}
    
        
