import React from 'react'
import './TodoItem.css'
import {useDispatch} from 'react-redux';
import { setCheck } from '../features/todoSlice';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const TodoItem = ({title, description, todoStatus, dueDate,id}) => {

    
    const dispatch = useDispatch()
    
    const handlecheck = () => {

        dispatch(setCheck(id))
    }
    


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const classes = useStyles();
    return (
        
        <div>
       

            <Card className={classes.root} variant="outlined">
                <CardContent>
        
                    <Typography variant="h5" component="h2">
                    {title}
                    </Typography>
                    
                    <Typography variant="body2" component="p">
                    {description}
                    </Typography>
                    <br/>
                    <div className = "date">
                    <Typography variant="body3" component="p">
                    Due : {dueDate}
                    </Typography>
                    </div>
                    <div className = "status">
                         <InputLabel className={classes.textField} id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={todoStatus}
                                onChange={handlecheck}
                                // onChange={e => setTodoStatus(e.target.value)}
                                className={classes.textField}
                            >
                                <MenuItem value="ToDo">ToDo</MenuItem>
                                <MenuItem value="Ongoing">Ongoing</MenuItem>
                                <MenuItem value="Stalled">Stalled</MenuItem>
                                <MenuItem value="Done">Done</MenuItem>
                            </Select>
                            </div>
                </CardContent>
      
            </Card>

        </div>
    )
}

export default TodoItem
