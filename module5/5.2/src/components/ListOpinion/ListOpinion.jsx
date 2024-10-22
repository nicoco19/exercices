import { useContext, useState } from "react";
import { Context as OpinionContext } from "contexts/opinionContext";

const AddOption = () => {
  const [newOpinion,setNewOpinion] = useState("");
  const {addOpinion} = useContext(OpinionContext);

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addOpinion(newOpinion);
    setNewOpinion("");
  };

  return (
      <form onSubmit={handleOnSubmit}>
        <input
            placeholder="enter your opinion here please ; )"
            value={newOpinion}
            onChange={handleOnChange}
            required
        />
        <input type="submit" value="Add Opinion" />
      </form>
  );
};

export default AddOption;




