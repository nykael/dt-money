import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
