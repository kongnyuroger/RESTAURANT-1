import React from 'react';
import styles from '@/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className = {styles.container}>
        <h1 className = {styles.title}>THE BEST PIZZA IN TOWN </h1>
        <p className = {styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ipsa voluptas, accusamus quia excepturi quod distinctio sed quaerat rem quasi animi 
        dolorem quos nihil minima architecto? Sit, aut incidunt? Blanditiis, impedit.</p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard /> 
            <PizzaCard /> 
            <PizzaCard />    
            <PizzaCard /> 
            
            
        </div>
    </div>
  )
}

export default PizzaList