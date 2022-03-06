import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
      <Container>
          <Content>
              <Logo>
                  <a>
                      <img src='/images/home-logo.svg'/>
                  </a>
              </Logo>
              <Search>

              </Search>
          </Content>
      </Container>

    )
}

export default Header

const Container= styled.nav`
background-color:white; 
border: 1px solid rgba(0 0 0 0.08);
padding: 0px 24px;
width:100%;
z-index:100;
position:fixed;
top:0;
left:0;

`
const Content = styled.div`
display:flex;
align-items:center;
margin: 0px auto;
min-height:100%;
max-width:1128px
`
const Logo = styled.div`
padding-top:1px;
`
const Search=styled.div`

`
