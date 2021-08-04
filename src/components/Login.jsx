import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import FixedFooter from "./FixedFooter";


const LoginContainer = styled.div``
const FormContainer = styled.div`
@media (min-width:800px){
  width:50%;
}
@media (min-width:1200px){
  width:40%;
}
margin: 2em auto 0 auto;
width: 80%;
`
const Form = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 70%;
color:#00C6AF;
*{
  margin-top: .5em;
}
`
const FormTitle = styled.h1`
margin:1.5em auto 1.5em auto;
font-size: 3rem;
text-align: center;
text-shadow: 4px 5px 7px rgba(0,0,0,.5);
color:#00C6AF;
`
const EmailLabel = styled.label``

const EmailInput = styled.input`
padding: 1em;
background: transparent;
border: 1px solid rgba(200,200,200,.5);
color: aliceblue;
`
const PasswordLabel = styled.label``

const PasswordInput = styled(EmailInput)`
margin-bottom: 3em;
`
const SubmitButton = styled.button`
width: 120px;
margin:1em auto 0 auto;
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
const Contact = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSent, setIsSent] = useState(false)

  const newAuthor = { email, password }
  const redirect = useHistory();

  const handleAccess = (e) => {
    e.preventDefault()
    setIsSent(true)

    try {
      fetch('http://localhost:1307/authors/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAuthor)
      })
        .then(() => {
          setIsSent(false)
          redirect.push('/add-article')
        })
    } catch (err) {
      setError(error)
      alert(`Data not sent  due to error ${err}.`)
    }
  }


  return (
    <LoginContainer>
      <FormContainer>
        <FormTitle>Log in</FormTitle>
        <Form method='post' action='/registration' onSubmit={handleAccess} >
          <EmailLabel htmlFor='email'>Email</EmailLabel>
          <EmailInput id='login' name='email' type='email' placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordLabel htmlFor='password' >Password</PasswordLabel>
          <PasswordInput type='password' name='passsword' placeholder='Enter password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          {!isSent && <SubmitButton>Submit</SubmitButton >}
          {isSent && <SubmitButton disabled>Loading...</SubmitButton >}
        </Form>
      </FormContainer>
      <FixedFooter />
    </LoginContainer>
  );
}
export default Contact;