import React from "react";
import { useForm } from "react-hook-form";
import './style.css'

const AddNewNote = ({ setNotes }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    e.target.reset();
    
    /* Getting the current date and adding it to the data object. */
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    data.date = today;

    setNotes((prevdata) => [...prevdata, data]);
  };

  return (
    /* A form that is using the react-hook-form library to validate the form. */
   <div className="add-notes">
     <p className=" notes">Write some Notes</p>
      <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
     <div className="inputs">
     <h3 >Title</h3>
      <input className="input"
        {...register("title", { required: true })}
       
      />
      
      {/* {errors.title && <p>Title is required.</p>} */}

      <h3>Tags</h3>
      <input className="input"
        {...register("tags",  { required: true })}
        
      />
      
      {/* {errors.tags &&  <p>  tags is required.</p>} */}
     </div>

<div className="description">
<h3 >Description</h3>
      <textarea className="textarea"
        {...register("description", { required: true })}
       
      />
      {/* {errors.description && <p>Please enter description</p>} */}
    <br />
      <input className="button" type="submit" style={{ marginLeft: "15px" }} />
</div>
    </form>
   </div>
  );
};

export default AddNewNote;
