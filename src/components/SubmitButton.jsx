import styled from "styled-components";

const SubmitBtn = styled.button`
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

const SubmitButton = () => {
  return (
    <SubmitBtn>Submit</SubmitBtn>
  );
}

export default SubmitButton;