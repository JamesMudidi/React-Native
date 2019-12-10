import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Form from "../components/Form";
import axios from 'axios';
import formatData from "../Utils";
import {ResponseContext} from "../context/ResponsesCtxt";


export const SidePen = () => {
  const [state, setState] = useState({
    num_one: "",
    num_two: "",
    operation: "add"
  });

  const [responces, setResponces] = useContext(ResponseContext);

  const onChange = event => {
        setState({...state, [event.target.name]: event.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();

        let operator = "";
        switch (state.operation) {
          case "add":
            operator = "+";
            break;
          case "sub":
            operator = "-";
            break;
          case "mul":
            operator = "*";  
            break;        
          case "div":
            operator = "/";
            break;
          default:
              operator = "+";
        }

        const postData = { 
            expr: `${state.num_one} ${operator} ${state.num_two}`, 
            precision: 14 
        };

        axios.post("https://api.mathjs.org/v4/", postData)
        .then(resp => {
          let rowData;

          if(resp.data.error){
            toast.error("Error!");
          } else {
            rowData = formatData(resp.data.result);

            rowData = {...rowData, num_1: state.num_one, num_2: state.num_two};
            rowData = [...responces, rowData];
            setResponces(rowData);
          }
        })
        .catch(e => {
          toast.error("Error!");
        });
    }

    const props = {
        onSubmit: onSubmit,
        onChange: onChange,
        state: state
    };
    return (
      <div className="col-sm-4">
        <div className="side-pannel full-height">
          <span className="title">Numbers</span>
          <div className="form">
            <Form props={props} />
          </div>
        </div>
      </div>
    );
}

export default SidePen;