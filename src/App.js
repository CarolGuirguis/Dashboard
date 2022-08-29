import React ,{ useState }from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Card,Col,Row} from 'react-bootstrap';  
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaFacebookSquare,FaYoutubeSquare } from 'react-icons/fa';
import {FiInstagram } from 'react-icons/fi';
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from 'react-icons/md';
import{GrTwitter}from 'react-icons/gr';


function App() {
  const [theme, setlightTheme] = useState('light');
 
  const toggleTheme = () => {
    
    if (theme === 'light') {
      setlightTheme('dark');
    } else {
      setlightTheme('light');
      
    }
    
  }
  return (
    <Container className={theme}>
    <Row>
      <Col>
      <div className= {`title${theme}`} >
        Social Media Dashboard
      </div>
      <div className={`followers${theme}`}>
        Total followers:23,004 
      </div>
      </Col>
      <Col>
      <div className='modearea'>
      <div className={`mode${theme}`}>
        Dark Mode
        </div>
        <div className={`toggle${theme}`}>
         <i className={`indicator${theme}`} onClick={toggleTheme}></i>
        </div>
        </div>
        </Col>
    </Row>
    <Row>
      <Col xs={12} sm={3}>
    <Card className={`maincard${theme} facebook`}> 
    <Card.Body>
    <Card.Text className={`header${theme}`}><FaFacebookSquare color='hsl(208, 92%, 53%)'/> @nathanf</Card.Text>
        <Card.Text className={`number${theme}`}>1987</Card.Text>
        <Card.Text className={`fnumber${theme}`}>F O L L O W E R S</Card.Text>
        <Card.Text className='trend up'> <MdKeyboardArrowUp />12 Today</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={12} sm={3}>
    <Card className={`maincard${theme} twitter`}>
    <Card.Body>
    <Card.Text className={`header${theme}`}> <GrTwitter color='hsl(203, 89%, 53%)'/> @nathanf</Card.Text>
        <Card.Text className={`number${theme}`}>1044</Card.Text>
        <Card.Text className={`fnumber${theme}`}>F O L L O W E R S</Card.Text>
        <Card.Text className='trend up'> <MdKeyboardArrowUp />99 Today</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={12} sm={3}>
    <Card className={`maincard${theme} instagram`}>
    <Card.Body>
       <Card.Text className={`header${theme}`}> <FiInstagram  /> @realnathanf</Card.Text>
        <Card.Text className={`number${theme}`}>11k</Card.Text>
        <Card.Text className={`fnumber${theme}`}>F O L L O W E R S</Card.Text>
        <Card.Text className='trend up'> <MdKeyboardArrowUp />1099 Today</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={12} sm={3}>
    <Card className={`maincard${theme} youtube`}>
    <Card.Body>
    <Card.Text className={`header${theme}`}><FaYoutubeSquare color='hsl(348, 97%, 39%)'/> Nathan F.</Card.Text>
        <Card.Text className={`number${theme}`}>8239</Card.Text>
        <Card.Text className={`fnumber${theme}`}>S U B S C R I B E R S</Card.Text>
        <Card.Text className='trend down'><MdKeyboardArrowDown/>144 Today</Card.Text>
        </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
      <Col>
      <div className={`middletext${theme}`}>
      Overview - Today
      </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={3}>
      <Card className={`smallcard${theme}`}>
      <Card.Body>
        <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Page Views</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><FaFacebookSquare color='hsl(208, 92%, 53%)'/></Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>87</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} up`}><MdKeyboardArrowUp/>3%</Card.Text>
          </Col>
        </Row>
       
        </Card.Body>
        </Card></Col>
      <Col xs={12} sm={3}>
      <Card className={`smallcard${theme}`}> 
      <Card.Body>
      <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Likes</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><FaFacebookSquare color='hsl(208, 92%, 53%)'/></Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>52</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} down`}><MdKeyboardArrowDown/>2%</Card.Text>
          </Col>
        </Row>
      
      </Card.Body></Card></Col>
      <Col xs={12} sm={3}><Card className={`smallcard${theme}`}>
      <Card.Body>
      <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Likes</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}> <FiInstagram  /> </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>5462</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} up`}><MdKeyboardArrowUp/>2257%</Card.Text>
          </Col>
        </Row>
         
      </Card.Body></Card></Col>
      <Col xs={12} sm={3}><Card className={`smallcard${theme}`}> 
      <Card.Body>
      <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Profile Views</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}> <FiInstagram /> </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>52k</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} up`}><MdKeyboardArrowUp/>1375%</Card.Text>
          </Col>
        </Row>
        
      </Card.Body></Card></Col>
    </Row>
    <Row>
       <Col xs={12} sm={3}><Card className={`smallcard${theme}`}>
       <Card.Body>
       <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Retweets</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><GrTwitter color='hsl(203, 89%, 53%)'/></Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>117</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} up`}><MdKeyboardArrowUp/>303%</Card.Text>
          </Col>
        </Row>
        
      </Card.Body></Card></Col>
      <Col xs={12} sm={3}><Card className={`smallcard${theme}`}>  
      <Card.Body>
        <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Likes</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><GrTwitter color='hsl(203, 89%, 53%)'/></Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>507</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} up`}><MdKeyboardArrowUp/>553%</Card.Text>
          </Col>
        </Row>
        
      </Card.Body></Card></Col>
      <Col xs={12} sm={3}><Card className={`smallcard${theme}`}>
      <Card.Body>
      <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Likes</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><FaYoutubeSquare color='hsl(348, 97%, 39%)'/> </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>107</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} down`}><MdKeyboardArrowUp/>19%</Card.Text>
          </Col>
        </Row>
         
      </Card.Body></Card></Col>
      <Col xs={12} sm={3}><Card className={`smallcard${theme}`}>
      <Card.Body>
      <Row>
          <Col>
          <Card.Text className={`upleftrow${theme}`}>Total Views</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`uprightrow${theme}`}><FaYoutubeSquare color='hsl(348, 97%, 39%)'/> </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card.Text className={`downleftrow${theme}`}>1407</Card.Text>
          </Col>
          <Col>
          <Card.Text className={`downrightrow${theme} down`}><MdKeyboardArrowUp/>12%</Card.Text>
          </Col>
        </Row> 
      </Card.Body></Card></Col>
      </Row>
    </Container>
  );
}

export default App;
