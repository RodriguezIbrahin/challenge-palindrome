import React from "react";
import { useForm } from "react-hook-form";

const PhraseForm = ({
  onCreated,
}: {
  onCreated: (phrase: string, callback: () => void) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    onCreated(data.phrase, reset);
  };
  return (
    <div className="col-10 pb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label text-light">Phrase</label>
          <textarea
            className="form-control"
            placeholder="Enter a word or phrase."
            id="phrase"
            {...register("phrase", { required: true })}
          ></textarea>
        </div>
        {errors.phrase && <p className="text-danger">This field is required</p>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PhraseForm;
