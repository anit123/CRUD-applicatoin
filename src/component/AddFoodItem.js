import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function AddFoodItem(props) {
    return (
        <form className='col-sm-4'>
          <div>
            <div className='form-group'>
                <label className='text-white'>Food Name</label>
                <input type="text"  className='form-control' name='food' value={props.food} onChange={props.handleInputChange}/>
            </div>
            <div className='form-group'>
                <label className='text-white'>Food Cost</label>
                <input type="number" className='form-control' name='cost' value={props.cost} onChange={props.handleInputChange}/>
            </div>
            <Button className='btn btn-sucess mt-2'>Add Food Item</Button>
        </div>  
        </form>
    )
}

export default AddFoodItem
