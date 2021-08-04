import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Hover = css`
  cursor: pointer;
  color:#009E89;
`

const Transition = css`
transition: ease-in .4s;
`
const LinkStyle = css`
font-size: 1.5rem;
font-weight:700;
text-decoration: none;
color:#00C6AF;
`
const Header = styled.header`
position: fixed;
top:0;
left: 10%;
z-index:2;
background:#272a2e;
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
margin:0 auto;
padding-top:1em;
color:#00C6AF;
`
const Logo = styled(Link)`
${LinkStyle};
${Transition};
&:hover{
 ${Hover}
}
`
const Nav = styled.nav`
`
const List = styled.ul`
display: flex;
list-style: none;
font-weight:700;
`
const ListItem = styled.li`
${Transition}
&+&{
  margin-left:.5em
}
&:hover{
 ${Hover}
}
`
const ListLink = styled(Link)`
${LinkStyle}
font-size: 1rem;
${Transition};
  &:hover{
  ${Hover}
  }
`
const ListLinkBorder = styled(Link)`
${LinkStyle}
font-size: 1rem;
padding:.4em .6em;
border-radius:5%;
border:1px solid #00C6AF;
${Transition};
  &:hover{
   background: #00C6AF;
   color:#272a2e;
  }
`

const BlogHeader = () => {
  return (
    <Header>
      <Logo to='/' >JSBlog</Logo>
      <Nav>
        <List>
          <ListItem>
            <ListLink to='/'>Home</ListLink>
          </ListItem>
          <ListItem><ListLink to='/add-article'>Add article</ListLink></ListItem>
          <ListItem>
            <ListLinkBorder to='/login'>Log in</ListLinkBorder>
          </ListItem>
        </List>
      </Nav>
    </Header>
  );
}
export default BlogHeader;