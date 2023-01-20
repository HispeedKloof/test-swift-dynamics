import './App.css';

import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className='row1'>

        <div className='row1__title' >
          <label>Title : </label>
          <select {...register("title")}>
            {/* นาย */}
            <option value='Mr.'>Mr.</option>
            {/* นาง */}
            <option value='Mrs.'>Mrs.</option>
            {/* นางสาว */}
            <option value='Mr.'>Miss</option>
          </select>
        </div>
        
        <div className='row1__name'>
          <label>First name : </label>
          <input placeholder='name' {...register("name")} />
        </div>

        <div className='row1__lastname'>
          <label>Last name : </label>
          <input placeholder='lastname' {...register("lastname")} />
        </div>

      </div>
      
      
      <div></div>

      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='username' {...register("example")} />
      <br/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}<br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input type='password' placeholder='password' {...register("exampleRequired", { required: true })} />
      
      
      <br/>
      <input type="submit" value={"Submit"} />
    </form>
  );
}
