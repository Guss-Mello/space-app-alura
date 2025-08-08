import styled from "styled-components"

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListStyled>
                    <li>
                        <a href="">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais vistas
                        </a>
                    </li>
                </ListStyled>
            </nav>
        </aside>
    )
}

export default BarraLateral