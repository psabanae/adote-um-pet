import { NextPage } from 'next';
import { useAdd } from '../../data/hooks/pages/pets/useAdd';
import Title  from '../../UI/components/Title/Title';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material'

const Cadastro: NextPage = () => {
    const {
            nome,
            historia,
            foto,
            message,
            setNome,
            setHistoria,
            setFoto,
            setMessage,
            addPet
    } = useAdd();


    return (
        <>
            <Title 
                mainTitle={'Cadastro de Pets para Adoção'}
                subTitle={'Preencha os dados do novo Pet'}
            />

            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            label={'Nome'}
                            fullWidth
                            placeholder={'Digite o nome do pet'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            label={'Foto'}
                            fullWidth
                            placeholder={'Digite a URL da imagem'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={historia}
                            onChange={(e) => setHistoria(e.target.value)} 
                            label={'História do pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={addPet}
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar 
                open={message.length > 0}
                autoHideDuration={2500}
                onClose={() => setMessage('')}
                message={message}
            />

        </>
    )
}

export default Cadastro;