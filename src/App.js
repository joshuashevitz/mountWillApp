import React from 'react';
import styled from 'styled-components';
import MainLayout from './components/MainLayout';
import {Button} from 'reactstrap';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Apply from './components/Apply';
import { Row, Col} from 'reactstrap';

const ColStyle = styled(Col)
`
font-weight: 15px;
font-size: 1.5rem;
color:white;
padding: 20px
`;

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
const DivImg = styled.div`

float:right;
`;
const AboutImg=styled.img`
width: 40vw;
height: 620px;
`;
const AboutHead = styled.h1 `
color: white;
margin-bottom: -2.3rem;
margin-left: 10rem;
width: 15rem;
@media screen and(max-width: 50rem) {
	position: absolute;
	margin-left: 3rem;
}
`;
const AboutDiv=styled.div`
width: 30vw;
height:70%;
margin: 1rem;
padding-bottom: 1rem;
padding: 1rem;
background:black;
border:17px inset white;
color: white;
font-size: 1.2rem;
float:left;
font-style: italic;
overflow: scroll;
@media and screen (max-width: 50rem) {
	font-size:20px;
	}
`;

const SectionAbout = styled.section `
background-color: -webkit-linear-gradient(70deg, #blue 40%, white 40%);
background: -o-linear-gradient(70deg, blue 40%, white 40%);
background: -moz-linear-gradient(70deg, Blue 40%, white 40%);
background: linear-gradient(70deg, blue 40%, white 40%);;
height: 800px;
`;
const AboutUs = styled.div`
margin-top: 15px;
border: 1px solid white;
Width: 100vw;
height: 100%;
display:inline-block;
`;
const ScaledImage=styled.img`
height: 80vh;
width: 100vw;
`;
const ContactPage = styled.section`
background-color: darkblue;
height: 500px;
`;

const App = () => {
  return (
    <MainLayout title="home">
     
	 <Router>
   		<Route path="/Apply" component={Apply} />

	<h1>Mount Wilson Capital</h1>
 	<section> 
    	<ScaledImage src="/images/frontpage.jpg" />
      </section>
      <SectionAbout>
		  <a href='/Apply' >
		<ButtonStyle>Apply</ButtonStyle>
		</a>
		<AboutUs>
		<AboutHead>About Us</AboutHead>
		<AboutDiv>
		<p> The snow is fled: the trees their leaves put on,
The fields their green:<br></br>
Earth owns the change, and rivers lessening run
Their banks between.<br></br>
Naked the Nymphs and Graces in the meads
The dance essay:<br></br>
“No 'scaping death” proclaims the year, that speeds
This sweet spring day.<br></br>
Frosts yield to zephyrs; Summer drives out Spring,
To vanish, when
Rich Autumn sheds his fruits; round wheels the ring,—
Winter again!<br></br>
Yet the swift moons repair Heaven's detriment:
We, soon as thrust<br></br>
Where good Aeneas, Tullus, Ancus went,
What are we? dust.<br></br>
Can Hope assure you one more day to live
From powers above?<br></br>
You rescue from your heir whate'er you give
The self you love.<br></br>
When life is o'er, and Minos has rehearsed
The grand last doom,
Not birth, nor eloquence, nor worth, shall burst
Torquatus' tomb.<br></br>
Not Dian's self can chaste Hippolytus
To life recall,<br></br>
Nor Theseus free his loved Pirithous
From Lethe's thrall.<br></br>
Horace. The Odes and Carmen Saeculare of Horace. John Conington. trans. London. George Bell and Sons. 1882.)</p>
</AboutDiv>
<DivImg>
<AboutImg src="/images/loaner.jpg"/>
</DivImg>
		</AboutUs>
      </SectionAbout>
	  <ContactPage>
		 <Row>
		  <ColStyle> 
		  <div> <h1> Contact us</h1></div>
			<p> 7800 York Road<br></br>
		 	Towon Md, 21117<br></br>
		 	Mowils@gmail.edu<br></br>
		 	443-555-5555</p>
		  </ColStyle>
		  <ColStyle>
		  <h2 style={{fontSize:'2rem', color: 'white'}}>Quick Links</h2>
		  <ul>
			  <li>
				  <a href = '/contactUs'>Contact Us</a>
			  </li>
			  <li>
				  <a href = '/UserList'> Applications list</a>
			  </li>
			  <li>
				<a href ="/apply">Apply here</a>
			  </li>
		  </ul>
		  </ColStyle>
		  <ColStyle>
		  <h2 style={{fontSize:'2rem', color: 'white'}}>Resources</h2>
		  <ul>
			  <li>
				  <a href = '/contactUs'>What is a HardLender</a>
			  </li>
			  <li>
				  <a href = '/UserList'> client Services</a>
			  </li>
			  <li>
				<a href = '/Apply'> Legal Stuff</a>
			  </li>
			  <li>
				<a href = '/Apply'> Privacy Policy</a>
			  </li>
		  </ul>
		  </ColStyle>
		  <ColStyle>
		  <h2 style={{fontSize:'2rem', color: 'white'}}>More About Us</h2>
		  <ul>
		  <li>
				<a href = '/Apply'> We Buy Houses</a>
		  </li>
		 	<li>
				<a href = '/Apply'> Who We Are</a>
			</li>
			<li>
				<a href = '/Apply'>How It Works</a>
			  </li>
			  <li>
				<a href = '/Apply'>Ratings </a>
			  </li>
			</ul>

		  </ColStyle>
			</Row>
	  </ContactPage>
	  	<footer style={{backgroundColor:'blue',height:'50px',fontSize: '30px',borderRadius:''}}>
			&copy; {new Date().getFullYear()} Copyright: <a href="https://mountwilsoncapital.netlify.app"> MountWilsonCapital.netlify.app </a>
		</footer>
	  </Router>
    </MainLayout>
  );
}

export default App;
