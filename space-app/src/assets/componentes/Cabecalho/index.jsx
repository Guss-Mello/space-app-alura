import { styled } from 'styled-components';
import CampoTexto from '../CampoTexto';

const HeaderStyled = styled.header`
    padding: 60px 20px;
    display: flex;
    justify-content: space-between;
    
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
        return(<>
            <HeaderStyled>
                <img src='/imagens/logo.png' alt='logo' />
                <CampoTexto />
            </HeaderStyled>
        </>)
}

export default Cabecalho