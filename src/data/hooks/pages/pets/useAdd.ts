import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';

export function useAdd() {
    const [nome, setNome] = useState('');
    const [historia, setHistoria] = useState('');
    const [foto, setFoto] = useState('');
    const [message, setMessage] = useState('');

    function addPet(){
        if(validateForm()) {
            ApiService.post('/pets', {
                nome,
                historia,
                foto
            }).then(() => {
                clear();
                setMessage('Pet cadastrado com sucesso.')
            }).catch((error: AxiosError) => {
                setMessage(error.response?.data.message)
            })

        } else {
            setMessage('Preencha todos os campos corretamente.')
        }
    }

    function validateForm(){
        return nome.length > 2 && historia.length > 20 && foto.length > 5;
    }

    function clear(){
        setNome('');
        setHistoria('');
        setFoto('');
    }

    return {
        nome,
        historia,
        foto,
        message,
        setNome,
        setHistoria,
        setFoto,
        setMessage,
        addPet
    }

}