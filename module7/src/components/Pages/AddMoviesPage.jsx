import {useOutletContext} from "react-router-dom";
import PageTitle from "components/PageTitle/PageTitle.jsx";
import AddMovieForm from "components/AddMovieForm/AddMovieForm.jsx";

const AddMoviesPage = () => {
  const { onMovieAdded } = useOutletContext();
  return(
      <>
        <PageTitle title="ajouter un film" />
        <AddMovieForm onMovieAdded={onMovieAdded}/>
      </>
  )

}

export default AddMoviesPage;