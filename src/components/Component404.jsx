import { Link } from "react-router-dom"
import styled from "styled-components";

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height:50vh;
`
const Info = styled.h1`
margin-bottom: .5em;
font-size: 3rem;
color:#00C6AF;
`
const RedirectLink = styled(Link)`
font-size: 1.5rem;
font-weight:700;
text-decoration: none;
color:#00C6AF;
transition: ease-in .4s;
border-bottom: 1px solid currentColor;
&:hover{
  color:#009E89;
}
`

const Component404 = () => {
  return (
    <Container>
      <Info>Page can not be found</Info>
      <RedirectLink to='/'>Go to the home page</RedirectLink>
    </Container>
  );
}
export default Component404;
