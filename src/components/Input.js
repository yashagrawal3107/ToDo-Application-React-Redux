import React, { useState } from 'react';
import "./input.css";
import {useDispatch} from 'react-redux';
import {saveTodo} from "../features/todoSlice"
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const Input = () => {

    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setTodoStatus] = useState('');

    const dispatch = useDispatch()

    const addTodo = (e) => {
        e.preventDefault();
        console.log(`Adding ${title}`)

        if(title === ""){
          alert("Enter the title");
        }
        else if (description === ""){
          alert("Enter the description");
        }
        else{
          dispatch(saveTodo({
            title: title,
            description: description,
            dueDate: dueDate,
            todoStatus: todoStatus,
            id: Date.now()
        }))
            
        setTitle("") ;
        setDescription("");
        setDueDate("");
        setTodoStatus("");
        }
        
    }
    return (
        <>
        
            <div className = "input">
            <form onSubmit={addTodo}>
            <TextField
              label="Title"
              variant="outlined"
              required
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value = {title}
              onChange={e => setTitle(e.target.value)} 
        />
        <br />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              value = {description} 
              onChange={e => setDescription(e.target.value)}
              required
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
           />
       
        <br/>
            <TextField
              id="date"
              label="Due Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value = {dueDate} 
              onChange={e => setDueDate(e.target.value)} 
            />
        
        <br />
        <br/>
            <InputLabel className={classes.textField} id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={todoStatus}
              onChange={e => setTodoStatus(e.target.value)}
              className={classes.textField}
            >
            
            <MenuItem value="ToDo">ToDo</MenuItem>
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Stalled">Stalled</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
            </Select>

              <div className="bt">
                <Button 
                  variant="contained" 
                  color="primary"
                  value="Submit" onClick = {addTodo} > Add
            
                </Button>
              </div>

      </form>    
      </div>
        </>
    )
}

export default Input;