import { HeaderContainer, Logo } from "./Header.style";

function Header() {
    return (
        <HeaderContainer>
            <Logo src='/img/logo.svg' alt='Logo Adote um Pet' />
        </HeaderContainer>
    )
}

export default Header;