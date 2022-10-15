import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroeById(id), [id]);

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  /*  console.log(hero)
   */

  //si no existe el heroe por url
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <h3>{hero.superhero}</h3>
      <div className="col-4">
        <img
          src={`/assets/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <ul>
          <li>{hero.characters}</li>
        </ul>

        <button id="btn" className="btn btn-primary" onClick={back}>
          Volver
        </button>
      </div>
    </div>
  );
};
