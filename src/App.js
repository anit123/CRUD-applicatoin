import React, { Component } from 'react'
import './App.css';
import AddFoodItem from './component/AddFoodItem';
import EditFoodItem from './component/EditFoodItem'
import FoodItemList from './component/FoodItemList';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:null,
       userId:1,
       food:'',
       cost:'',
       status:false,
       foodItem:{},
       foodItems:[],
       editing:false
    }
  }
  
handleInputChange=(e)=>{
  //this is similar as e.target.value
  const target=e.target;
  const value=target.value;
  const name=target.name
this.setState({
  [name]:value
})
}

updateFoodItem=(e)=>{
  e.preventDefault();
  //keeping updated food in updated food variable, 
  const updatedFood=this.state.food;
  const updatedCost=this.state.cost;
  //after update keeping updated food and cost by using object.assign method.
  const updatedFoodItem=Object.assign({},this.state.foodItem,{food:updatedFood,cost:updatedCost})
  const foodItems=this.state.foodItems.map((foodItem)=>(foodItem.id===this.foodItem.id ? updatedFoodItem : foodItem))
  this.setState({
    food:'',
    cost:'',
    //updated array and update of food item has been stored in array
    foodItems:foodItems
  })
}

deleteFoodItem=(id)=>{
  const foodItems=this.state.foodItems.filter(item=>item.id !==id);
  this.setState({
    foodItems:foodItems
  })
}

broughtFoodItem=(currentFood)=>{
  const updateCurrentFood=Object.assign({},currentFood,{status:true})
  const foodItems=this.state.foodItems.map((foodItem,index)=>(foodItem.id===currentFood.id ? updateCurrentFood:foodItem))
  this.setState({
    foodItems:foodItems
  })
}

EditFoodItem=(foodItem)=>{
  this.setEditing(true);
  this.setState({
    food:foodItem.food,
    cost:foodItem.cost,
    foodItem:foodItem
  })
}
setEditing=(value)=>{
if(typeof value !== 'boolean'){
  throw 'Pls enter True or False Value'
}this.setState({
  editing:value
})
}


  render() {
    const {food,cost,foodItem,editing}=this.state
    return (
      <div className='App'>
        <div className='row App-main'>
        <FoodItemList
        foodItems={foodItem}
        deleteFoodItem={this.deleteFoodItem}
        broughtFoodItem={this.broughtFoodItem}
        EditFoodItem={this.EditFoodItem}
        />
        </div>
        <div className="row-app-main">
          {
            editing ?(
              <EditFoodItem food={food} cost={cost} updateFoodItem={this.updateFoodItem}/>
            ):(
              <AddFoodItem food={food} cost={cost} handleInputChange={this.handleInputChange} />
            )   
          }
       
        </div> 
      </div>
    )
  }
}

export default App

