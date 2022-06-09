import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
    height: 115px;
    background-color: #F6F6F6;
    padding: ${({ theme }) => theme.spacing(2)};

    div {
        height: 100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2)};
    }

    a {
        font-size: 14px;
    }

`;

export const Logo = styled('img')`
    width: 125px;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing(2)};


`;