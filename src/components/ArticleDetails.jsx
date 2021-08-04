import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";


const ArticleDetailsContainer = styled.div`
display: flex;
width:70%;
min-height: 100vh;
margin: 2.5em auto;
color:aliceblue;
`
const ArticleDetailsTitle = styled.h1`
margin:1.5em 0 .7em 0;
font-size: 2.5rem;
letter-spacing: .018em;
color:#00C6AF;
`
const ArticleDetailsAuthor = styled.address`
margin-bottom: .6em;
`
const ArticleDetailsTxt = styled.p`
font-size: 1.1rem;
`
const ArticleDetailsTopic = styled.p`
display: inline-block;
margin-right:2em;
`
const IsLoading = styled.h1`
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-size: 1.7rem;
font-weight: 700;
color: #00C6AF;
`
const Error = styled(IsLoading)`

`
const DeleteButton = styled.button`
width: 80px;
margin:1em auto 0 auto;
padding: .6em .8em;
font-size: .85rem;
font-weight: 700;
color:#00C6AF;
background: transparent;
border:none;
border:1px solid #00C6AF;
border-radius:5%;
transition: ease-in .4s;
&:hover{
  cursor:pointer;
  background: #00C6AF;
  color:#272a2e;
}
`
const ArticleDetails = () => {
  const { id } = useParams()
  const { articles, isLoading, error } = useFetch('http://localhost:1309/articles/' + id)
  const redirect = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:1309/articles/' + articles.id, {
      method: 'DELETE'
    })
      .then(() => {
        redirect.push('/')
      })
  }

  return (
    <ArticleDetailsContainer>
      {error && <Error>Error</Error>}
      {isLoading && <IsLoading>Loading the data...</IsLoading>}
      {articles && (
        <div>
          <ArticleDetailsTitle> {articles.title} </ArticleDetailsTitle>
          <ArticleDetailsAuthor>Written by {articles.author} </ArticleDetailsAuthor>
          <ArticleDetailsTxt> {articles.text} </ArticleDetailsTxt>
          <ArticleDetailsTopic> # {articles.topic} </ArticleDetailsTopic>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </div>
      )}
    </ArticleDetailsContainer>
  );
}
export default ArticleDetails;