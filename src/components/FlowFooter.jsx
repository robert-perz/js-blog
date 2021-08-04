import styled from "styled-components";

const FooterContainer = styled.div`
`
const FooterContent = styled.footer`
margin-top: 3em;
padding: .8em 0 .5em 0;
font-size: 1.2rem;
font-weight:700;
border-top: 1px solid rgba(0, 198, 175, .4) ;
text-align: center;
color:#00C6AF;
`
const FooterLink = styled.a`
text-decoration: none;
color:#00C6AF;
border-bottom: 1px solid currentColor;
`
const FlowFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>Created by <FooterLink href='https://github.com/robert-perz'>me</FooterLink></FooterContent>
    </FooterContainer>
  );
}

export default FlowFooter;