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
                <div>
                  <input type="text"  placeholder='search' />
                </div>
                <Searchicon>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
                </Searchicon>
              </Search>
            <Nav>
                <Alltabs>
                    <Singletab>
                        <a>
                            <img src='/images/nav-home.svg'/>
                        </a>
                    </Singletab>
                </Alltabs>
            </Nav> 
          </Content>
      </Container>

    )
}

export default Header

const Container= styled.nav`
background-color:rgb(29, 34, 38); 
border: 1px solid rgba(0 0 0 0.08);
padding: 0px 24px;
width:100%;
z-index:100;
position:fixed;
top:0;
left:0;
@media (max-width: 768px) {
    width: 450px;
}
`
const Content = styled.div`
display:flex;
align-items:center;
margin: 0px 212px;
min-height:100%;
color:rgba(255, 255, 255, 0.9);
max-width:1128px
`
const Logo = styled.div`
margin-right:8px;
font-size:0px;

`
const Search=styled.div`
 opacity:1;
 flex-grow:1;
 position:relative;
 &>div{
     max-width:200px;
     margin:12px 0px;
     input{
         border:none;
         border-radius:4px;
         box-shadow:none;
         background-color:rgb(56, 67, 79);
         color:white;
         width:218px;
         padding:0 8px 0 40px;
         line-height:1.75;
         height:34px;
         font-weight:400px;
         font-size:14px;
         vertical-align:text-top;  
     }
 }

`
const Searchicon=styled.div`
top:10px;
left:2px;
width:40px;
position:absolute;
padding:opx 11px;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;
`
const Nav=styled.div`
margin-right:auto;
display:block;
@media (max-width: 768px) {

}

`

const Alltabs = styled.div`

`
const Singletab = styled.div`

`