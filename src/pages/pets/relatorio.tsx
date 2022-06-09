import { NextPage } from 'next';
import Title from '../../UI/components/Title/Title';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useList } from '../../data/hooks/pages/pets/useList';

const Relatorio: NextPage = () => {
    const { listAdoptions } = useList();

    return (
        <>
            <Title 
                mainTitle={'Relatório de Adoções'}
                subTitle={'Veja a lista de pets adotados'}
            />

            <TableContainer component={Paper} sx={{maxWidth: 830, mx: 'auto', p: {xs: 3, md: 5}}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listAdoptions.map((list) => (
                            <TableRow key={list.id}>
                                <TableCell>{list.pet.nome}</TableCell>
                                <TableCell>{list.email}</TableCell>
                                <TableCell align={'right'}>{list.valor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;