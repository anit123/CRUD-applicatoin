import React from 'react'
import Button from 'react-bootstrap/Button'

function EditFoodItem(props) {
    // const {food,cost,handleInputChange,updatFoodItem}=this.props
    return (
     <form className='col-sm-3'>
         <div>
             <div className='form-group'>
                 <label className='white-text'>Food Name</label>
                 <input type="text" className='form-control' name='food' value={props.food} onChange={props.handleInputChange}/>
             </div>
             <div className='form-group'>
                 <label className='white-text'>Cost</label>
                 <input type="text" className='form-control' name='food' value={props.cost} onChange={props.handleInputChange}/>
             </div>
         </div>
         <Button onClick={props.updatFoodItem} className='btn btn-sucess mt-2'>Update</Button>
         <Button onClick={()=>props.setEditing(false)} className='btn btn-sucess mt-2'>Cancle</Button>
     </form>
    )
}

export default EditFoodItem
