import React from 'react';
import styled from 'styled-components';
import MainLayout from './components/MainLayout';
import {Button} from 'reactstrap';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Apply from './components/Apply';

const ButtonStyle = styled(Button)`
	border: 5px solid;
	margin: auto;
	margin-top: 50px;
	z-index: 1;
	display: block;
	top: calc(50% - 2.5rem - 5px);
	left: calc(50% - 6rem - 5px);
	  height: 5rem;
	  width: 12rem;
	  background: transparent linear-gradient(to top left, rgba(249,208,129,.2) 0%, rgba(227,2,62,.2) 40%, rgba(49,128,135,.2) 100%);
	  border-image-source: linear-gradient(to top left, rgba(249,208,129,1) 0%, rgba(227,2,62,1) 40%, rgba(49,128,135,1) 100%);
	  border-image-slice: 1;
	transition: transform .25s;
	letter-spacing: .2rem;
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 1.25rem;
	font-weight: 300;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: #333;
	
	  &::after {
	  z-index: -1;
		background: transparent linear-gradient(to bottom left, rgba(249,208,129,.25) 10%, rgba(227,2,62,.25) 30%, rgba(49,128,135,.25) 90%);
	  border-image-source: 3px linear-gradient(to bottom left, rgba(249,208,129,1) 10%, rgba(227,2,62,1) 30%, rgba(49,128,135,1) 90%);
	  transition: opacity 1s;
	}
  
	&:active {
	  transform: scale(.);
  
	  &::before {
		opacity: 1;
	  }
	}
  
	&::before {
	  z-index: 0;
	  border-image-source: 3px linear-gradient(to bottom left, rgba(249,208,129,1) 20%, rgba(227,2,62,1) 40%, rgba(49,128,135,1) 70%);
	  transition: opacity .5s;
	}
  
	&:hover::after {
	  opacity: 1;
	}
		
`;

const SectionStyle = styled.section `
background-color: -webkit-linear-gradient(70deg, #blue 40%, white 40%);
background: -o-linear-gradient(70deg, blue 40%, white 40%);
background: -moz-linear-gradient(70deg, Blue 40%, white 40%);
background: linear-gradient(70deg, blue 40%, white 40%);;
height: 50vh;
`;
const AboutUs = styled.div`
margin-top: 15px;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid black;
`;
const ScaledImage=styled.img`
height: 80vh;
width: 100vw;
`;
const ContactPage = styled.section`
background-color: black;
`;

const App = () => {
  return (
    <MainLayout title="home">
     
	 <Router>
   		<Route path="/Apply" component={Apply} />

<h1>Mount Wilson Capital</h1>
 <section> 
    	<ScaledImage src="/images/front_page.jpg" />
      </section>
      <SectionStyle>
		  <a href='/Apply' >
		<ButtonStyle>Apply</ButtonStyle>
		</a>
		<AboutUs>
		<h1>About Us</h1>

		</AboutUs>
      </SectionStyle>
	  <ContactPage>
		 <div> <h1> Contact us</h1></div>
		  <ul>
			  <li>
				  <a href = '/contactUs'>Contact Us</a>
			  </li>
			  <li>
				  <a href = '/UserList'> Applications list</a>
			  </li>
			  <li>

			  </li>
		  </ul>
	  </ContactPage>

	  </Router>
    </MainLayout>
  );
}

export default App;
