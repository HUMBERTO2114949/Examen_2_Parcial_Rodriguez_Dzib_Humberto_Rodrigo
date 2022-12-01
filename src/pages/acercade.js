import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Humberto from './img/hum.jpg';
import "./acercade.css";

const Acercade = () => {
    return <>
     <div className='general'>
     <CardGroup>
      <div className='separar'>
      <Card>
        <Card.Img variant="top" src={Humberto} />
        <Card.Body>
          <Card.Title>Humberto Rodrigo Rodriguez Dzib</Card.Title>
          <Card.Text>
            Programador y Web Master
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </CardGroup>
     </div>
    </>;
  };
  
  export default Acercade;