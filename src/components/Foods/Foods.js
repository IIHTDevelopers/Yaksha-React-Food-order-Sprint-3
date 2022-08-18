import React, { useEffect } from 'react';
import styles from './Foods.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { loadFoods, fetchingFoods, errorFoods, selectFoods } from './../../features/foods/foodsSlice';
import { fetchAll } from './../../utils/apiUtils'

const Foods = () => {

  const foods = useSelector(selectFoods)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchingFoods());

    fetchAll("foods", (errMessage, data) => {
      
    });
  }, [dispatch]);


  return (
    <div>
    </div>
  )
}


export default Foods;
