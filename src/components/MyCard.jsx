import { Card } from 'react-bootstrap'
import Tags from './Tags';
// alba una consulta aqui yo pase como props backgroun y tex y no background y text, alfinal al cabo es una etiqueta, dalo mismo como llamemos la etiqueta mientra la propiedad este correctamente cierto? igual creo que para que sea mas legible y buena practica esque la etiqueta igual coincidan, para un mantenimiento mas facil a futuro para quienes tocaran el codigo?
const MyCard = ({image,name,description,backgroun,tex}) => {
  return (
    <>
    <Card  >
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags background={backgroun}  text={<h6>{tex}</h6>} />
      </Card.Body>
    </Card>
    </>
  )
}

export default MyCard