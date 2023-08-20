import { Badge } from "react-bootstrap"

const Tags = ({background,text}) => { 
  return (
    <>
    <Badge bg={background}>{text}</Badge>

    </>
  )
}

export default Tags