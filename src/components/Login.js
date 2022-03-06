import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Nav>
        <a href=''>
          <img src='/images/login-logo.svg'/>
        </a>
        <div>
          <Join>join now</Join>
          <Signin>sign in</Signin>
        </div>
      </Nav>
      <Section>
          <Hero>
            <h1>
                Welcome to your professional community 
            </h1>
            <img src='/images/login-hero.svg'/>
          </Hero>
          <Form>
            <Google>
            <h5>
                 Search for job
              </h5>
              <img src='images/rightarrow.svg'/>
            </Google>
            <Google>
            <h5>
                 Find a person you know
              </h5>
              <img src='images/rightarrow.svg'/>
            </Google>
            <Google>
            <h5>
                 learn a new skill
              </h5>
              <img src='images/rightarrow.svg'/>
            </Google>
          </Form>
      </Section>
    </Container>
    )
}

export default Login



const Container = styled.div`
padding:0px;
`
const Nav =styled.nav`
max-width:1128px;
display:flex;
align-items:center;
padding : 8px 0px 16px;
margin:auto;
position: relative;
flex-wrap:nowrap;
justify-content:space-between;
& > a{
   width: 135px;
   height: 34px;
   @media (max-width: 768px) {
     padding: 0px 5px;
   }
}
`

const Join = styled.a`
padding:10px  12px;
cursor:pointer;
font-size:16px;
color:rgba(0,0,0,0.6);
border-radius:4px;
margin-right:12px;
transition-duration:250ms;
&:hover{
  background-color:rgb(0,0,0,0.2);
  color:rgba(0,0,0,0.9);
}
`
const Signin= styled.a`
font-size:16px;
text-align:center;
color: #0a66c2;
box-shadow:inset 0 0 0 1px #0a66c2;
padding:10px 24px;
border-radius:24px;
font-weight:124px;
cursor: pointer;
line-height:4opx;
&:hover{
  background:rgb(112,181,249,0.15);
  border: 1.5px solid #1F51FF;
}
`
const Section=styled.div`
min-height:700px;
padding-top:30px;
padding-bottom:138px;
padding:20px 0px ;
display:flex;
position: relative;
align-content:start;
flex-wrap:wrap;
width:100%;
max-width:1128px;
@media (max-width: 768px) {
  margin-left:auto;
  min-height:0px;
  width:100%;
  justify-content:center;
  align-items:center;
}
`
const Hero = styled.div`
 width :100%;
 margin-left:200px;
 img{
    width:700px;
    height:670px;
    position:absolute;
    bottom:100px;
    right:-400px;
    @media (max-width: 786px){
       height:200px;
       position:initial;
       margin-left:0px;
       width:initial;
    }
  }
 h1{
  font-family: 'Cormorant Garamond', serif;

  font-family: 'Redressed', cursive;

  font-family: 'Roboto', sans-serif;

  font-family: 'Signika', sans-serif;

  font-family: 'Space Grotesk', sans-serif;
   font-size:50px;
   color:8f5849;
   font-weight:lighter;
   letter-spacing:2px;
   line-height:70px;
   font-stretch:expanded;
   width:55%;
   @media (max-width:786px) {
      font-size:10px;
      width:100%;
      text-align:center;
      
   }
 }
`

const Form = styled.div`
margin-top:10px;
width:408px;
@media (max-width:768px) {
   margin-top:20px;

}
`
const Google =styled.button`
display:flex;
justify-content:space-between;
margin-left:200px;
margin-bottom:5px;
padding-left:15px;
background-color :rgb(248,248,255);
width:100%;
align-items:center;
height:70px;
border-radius:9px;
vertical-align:middle;
transition-duration:250ms;
font-size:20px;
color:rgb(0 0 0 0.9);
@media (max-width: 768px){
    
}
h1{
  font-weight:600px;
  font-size:100px;
  &:visited{
    color:#8344cc;
  }
}

img{
  height:30px;
  padding-right:5px;
}
&:hover{
  background-color:rgba(287,287,287,0.25);
  color:rgba(0,0,0,0.75);
  box-shadow: -14px 11px 13px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: -14px 11px 13px -6px rgba(0,0,0,0.75);
-moz-box-shadow: -14px 11px 13px -6px rgba(0,0,0,0.75);
}
`