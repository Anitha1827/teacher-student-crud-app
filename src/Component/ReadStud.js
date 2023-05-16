import Base from "../Base/Base";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

const ReadStud = ({Student, setStudent}) => {
  const history = useHistory();
  
  const deleteStudent = (studId)=>{
    const reminingStudent = Student.filter((stud, idx) => idx !== studId);
    setStudent(reminingStudent);
  }

  return (
    <Base title={"Student Detail"} description={"Read Students Details here"}>
       <div className="maincard">
      {Student.map((stud, idx) => (
          <Card style={{ width: "50%", marginLeft: "21%" }} key={idx}>
            <CardContent>
              <Typography variant="h5" component="div">
                {stud.name}
              </Typography>
              <Typography variant="body2">{stud.gender}</Typography>
              <Typography variant="body2">{stud.qualification}</Typography>
            </CardContent>
            <CardActions>
              <Button 
              onClick={()=>history.push(`/update/${idx}`)}
              size="small">Edit</Button>
              <Button 
              onClick={()=>deleteStudent(idx)}
              size="small">Delete</Button>
            </CardActions>
          </Card>
        
      ))}
      </div>
    </Base>
  );
};

export default ReadStud;
