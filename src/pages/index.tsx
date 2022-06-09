
import type { NextPage } from 'next'
import Title from '../UI/components/Title/Title';
import List from '../UI/components/List/List';
import { Dialog, DialogActions, TextField, Grid, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title 
        mainTitle=''
        subTitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }/>
        <List pets={petsList} onSelect={(pet) => setSelectedPet(pet)}/>

      <Dialog 
        open={selectedPet !== null}
        fullWidth
        PaperProps={{sx: { p: 5 }}}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Quantia Mensal'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={'secondary'} onClick={() => setSelectedPet(null)}>Cancelar</Button>
          <Button variant={'contained'} onClick={() => adopt()}>Confirmar Adoção</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alert.length > 0}
        message={alert}
        autoHideDuration={2500}
        onClose={() => setAlert('')}
      />
    </div>
  )
}



export default Home
