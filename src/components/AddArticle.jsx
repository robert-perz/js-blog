import styled, { css } from "styled-components";
import { useState } from 'react'
import { useHistory } from "react-router";
import FixedFooter from "./FixedFooter";

const InputLabelStyles = css`
background: transparent;
border: 1px solid rgba(200,200,200,.5);
color: aliceblue;
`
const AddArticleContainer = styled.div``

const AddArticleFormContainer = styled.div`
@media (min-width:800px){
  width:60%;
}
@media (min-width:1200px){
  width:40%;
}
width: 80%;
margin: 2em auto 0 auto;
`
const AddArticleForm = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 70%;
`
const AddArticleFormTitle = styled.h1`
margin:1.5em 0;
font-size: 3rem;
text-align: center;
text-shadow: 4px 5px 7px rgba(0,0,0,.5);
color:#00C6AF;
`
const NewArticleTitleLabel = styled.label`
margin:.6em 0 .2em 0;
color: #00c6af;
`
const NewArticleTitleInput = styled.input`
${InputLabelStyles}
padding: 1em 1em;
`
const NewArticleTxtLabel = styled(NewArticleTitleLabel)``
const NewArticleTxtInput = styled.textarea`
${InputLabelStyles}
padding: .8em .8em;
font-family: sans-serif;
`
const NewArticleAuthorLabel = styled(NewArticleTitleLabel)``
const NewArticleAuthorInput = styled(NewArticleTitleInput)`
margin-bottom: .5em;
`
const NewArticleTopic = styled.select`
${InputLabelStyles}
padding: .7em .9em;
background: #272a2e;
color:#999;
`
const NewArticleTopic1 = styled.option``
const NewArticleTopic2 = styled(NewArticleTopic1)``
const NewArticleTopic3 = styled(NewArticleTopic1)``
const NewArticleTopicLabel = styled(NewArticleTitleLabel)``

const SubmitButton = styled.button`
width: 120px;
margin:3em auto 0 auto;
padding: .6em .8em;
font-size: 1rem;
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
const AddArticle = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [topic, setTopic] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const redirect = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, text, author, topic }

    setIsAdding(true)

    fetch('http://localhost:1309/articles', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(newArticle)
    }).then(() => {
      setIsAdding(false)
      redirect.push('/add-article')
    })
  }
  return (
    <AddArticleContainer>
      <AddArticleFormContainer>
        <AddArticleFormTitle>Add article</AddArticleFormTitle>
        <AddArticleForm onSubmit={handleSubmit}>
          <NewArticleTitleLabel>Article title</NewArticleTitleLabel>
          <NewArticleTitleInput value={title} type='text' placeholder='Enter article title' required onChange={(e) => setTitle(e.target.value)}></NewArticleTitleInput>
          <NewArticleTxtLabel>Article text</NewArticleTxtLabel>
          <NewArticleTxtInput value={text} type='text' placeholder='Enter article text' required rows='5' onChange={(e) => setText(e.target.value)} ></NewArticleTxtInput>
          <NewArticleAuthorLabel>Article author</NewArticleAuthorLabel>
          <NewArticleAuthorInput value={author} placeholder='Enter article author' required onChange={(e) => setAuthor(e.target.value)}></NewArticleAuthorInput>
          <NewArticleTopicLabel>Select topic</NewArticleTopicLabel>
          <NewArticleTopic value={topic} onChange={(e) => setTopic(e.target.value)}>
            <NewArticleTopic1 value='Java Script'>Java Script</NewArticleTopic1>
            <NewArticleTopic2 value='React'>React</NewArticleTopic2>
            <NewArticleTopic3 value='Vue'>Vue</NewArticleTopic3>
          </NewArticleTopic>
          {!isAdding && <SubmitButton>Submit</SubmitButton >}
          {isAdding && <SubmitButton disabled>Loading...</SubmitButton >}
        </AddArticleForm>
      </AddArticleFormContainer>
      <FixedFooter />
    </AddArticleContainer>
  );
}
export default AddArticle;