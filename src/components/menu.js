import React from "react";
import {FormControl,Select,MenuItem,TextField,Datagrid,Box} from "@mui/material" ;
import {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
export default function Menu (){
    const [option,setoption]=useState("")
    const handleoption =(e)=>{setoption(e.target.value)}
    return (
        <div >
        <h1>Create Relationships</h1>
        {/* <InputLabel htmlFor="login" sx={{display: 'inline'}}>Login :</InputLabel> */}
        <>
        search
<FormControl id="margin-normal" name="search" className='MuiTextField-root w-[90%]' fullWidth style={{marginLeft:"25px",width:250}}>
   <Select
   
                   id="demo-simple-select"
                   value={option}
                   onChange={handleoption}
                   className='font-normal text-black-300'>
   <MenuItem value="CI unavailability">CI unavailability</MenuItem>
   <MenuItem value="Configuration Item">Configuration Item</MenuItem>
   <MenuItem value="Incident">Incident</MenuItem>
   <MenuItem value="Infrastructure Change">Infrastructure Change</MenuItem>
   <MenuItem value="Known Error">Known Error</MenuItem>
   <MenuItem value="Problem Investigation">Problem Investigation</MenuItem>
   <MenuItem value="Release">Release</MenuItem>
   <MenuItem value="Solution Database">Solution Database</MenuItem>
   <MenuItem value="Release">Release</MenuItem>
   <MenuItem value="Solution Database">Solution Database</MenuItem>
   <MenuItem value="Work Order">Work Order</MenuItem>
   <MenuItem value={null}>clear()</MenuItem>
   </Select>
   </FormControl>
   </>
   {/* <input type="search" fullwidth style={{marginLeft:"25px",width:250,height:"53px"}}/> */}
   <Box
      component="form"
      fullwidth style={{marginLeft:"940px",width:250,height:"53px",marginTop:"-55px"}}
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
        InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
      <TextField id="outlined-basic"  variant="outlined" />
      
    </Box>
   </div>
    )
}