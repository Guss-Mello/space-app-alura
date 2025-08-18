import tags from './tags.json';
import { styled } from 'styled-components';

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    font-weight: normal;
`;

const TagsContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    gap: 25px;
`;

const TagBotao = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.3s ease;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = () => {
    return(
        <TagsContainer>
            <TagTitulo>Busque por tags: </TagTitulo>
            {tags.map(tag => <TagBotao key={tag.id}>{tag.titulo}</TagBotao>)}
        </TagsContainer>
    )
}

export default Tags