import React from 'react'
import Button from 'react-bootstrap/Button'

function FoodItemList(props) {
    const {foodItems}=this.props
    const finalFood=foodItems.length>0 ? (
        foodItems.map(item=>
        <tr>
            <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.cost}</td>
        </tr>
            )
    ):<td>
    <Button className='btn btn-primary ml-2' onClick={()=>props.EditFoodItem(foodItem)}>Edit</Button>
    <Button className='btn btn-primary ml-2' onClick={()=>props.deleteFoodItem(id)}>Delete</Button>
</td>
    return (
        
       <table className='table table-bordered'>
           <thead>
               <tr>Id</tr>
               <tr>Food</tr>
               <tr>Cost</tr>
               <tr>Action</tr>
           </thead>
           <tbody>
                
                        <tr>
                            {finalFood}
                                
                         </tr>
                        
                        
           </tbody>
       </table>
    )
}

export default FoodItemList
