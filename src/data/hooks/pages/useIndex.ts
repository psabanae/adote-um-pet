import { useState, useEffect } from 'react';
import Pet from '../../@types/Pets';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from 'axios';


export function useIndex() {
    const [petsList, setPetsList] = useState<Pet[]>([]),
        
      [selectedPet, setSelectedPet] = useState<Pet | null>(null),
      [email, setEmail] = useState(''),
      [valor, setValor] = useState(''),
      [alert, setAlert] = useState('');
    
      useEffect(() => {
        ApiService.get('/pets')
          .then((res) => {
            setPetsList(res.data);
          })
      }, [])

      useEffect(() => {
        if(selectedPet === null) {
          clearForm();
        }
      })

      function adopt() {
        if(selectedPet !== null) {
          if(validateValues()) {
            ApiService.post('/adocoes', {
              pet_id: selectedPet.id,
              email,
              valor
            })
              .then(() => {
              setSelectedPet(null);
              setAlert('Pet adotado com sucesso!');

            }).catch((error: AxiosError) => {
              setAlert(error.response?.data.message)
            })

          } else {
            setAlert('Preencha todos os campos corretamente!')
          }
        }
      }

      function validateValues() {
        return email.length > 0 && valor.length > 0;
      }

      function clearForm() {
        setEmail('');
        setValor('');
      }
    
    return {
        petsList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        valor,
        setValor,
        alert,
        setAlert,
        adopt
    };
}