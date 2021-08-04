import { Link } from 'react-router-dom';
import styled from "styled-components";

const Section = styled.section`
@media (min-width:1000px){
  width:60%;
}
color:aliceblue;
width: 80%;
margin: 0 auto;
`
const SectionTitle = styled.h1`
margin: 2em 0 1em 0;
font-size: 2.5rem;
letter-spacing: .02em;
border-bottom: 2px solid #00c6af;
`
const ArticlesListContainer = styled.div`
`
const Article = styled.article`
*{
  color: aliceblue
}
margin-top: 1.5em;
padding:.4em .8em;
transition: transform ease-in .4s;
box-shadow:2px 4px 6px rgba(0,0,0,.2);
&:hover{
  transform: scale(1.02);
  cursor: pointer;
}
`
const ArticleTitle = styled.h2`
letter-spacing: .02em;
color: #00C6AF;
`
const ArticleAuthor = styled.address`
margin-top:.5em;
font-size:.7rem;
`
const ArticleTime = styled.time`
font-size:.7rem;
`

const ArticlesList = ({ articles, sectionTitle }) => {
  return (
    <Section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <ArticlesListContainer>
        {articles.map(article => {
          const { id, title, author } = article;
          return (
            <Article key={id}>
              <Link to={`/articles/${id}`}>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleAuthor>{author}</ArticleAuthor>
                <ArticleTime>{new Date().getFullYear()}/{new Date().getMonth() + 1}/{new Date().getDay() === 0 ? new Date().getDay() + 1 : new Date().getDay()}</ArticleTime>
              </Link>
            </Article>
          )
        })}
      </ArticlesListContainer>
    </Section>
  );
}
export default ArticlesList;