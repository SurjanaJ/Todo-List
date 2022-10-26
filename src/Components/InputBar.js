import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import {inputSchema} from '../schema/inputSchema'
export const InputBar = ({ tasks, setTasks }) => {
  const { handleSubmit, reset, register, formState:{errors}} = useForm({
    resolver : yupResolver(inputSchema)
  });
  const onSubmit = (data) => {
    
    let task = {
      id: tasks.length + 1,
      name: data.task,
      complete: false
    };
    setTasks([...tasks, task]);
     reset()
  };
  return (
    <>
      <form className="input-group d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex'>
        <input
        
          type="text"
          className="form-control"
          placeholder="Enter a task"
          {...register("task")}
        />
        <input type="submit" className="btn btn-outline-success" /></div>
        <span className='text-danger fst-italic'> {errors.task?.message} </span>

      </form>
    </>
  );
};
