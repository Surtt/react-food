import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => getFilteredCategory(name).then(({ meals }) => setMeals(meals)), [name]);

  return (
    <>
    <button className="btn" onClick={goBack}>Go Back</button>
    {!meals ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
