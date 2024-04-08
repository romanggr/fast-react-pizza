import React from 'react'
import Button from '../../ui/Button'
import { decreaseItemQuantity, getCardQuantityById, increaseItemQuantity } from './cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const UpdateItemQuantity = ({ pizzaId }) => {
    const dispatch = useDispatch()
    const quantity = useSelector(getCardQuantityById(pizzaId))
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type={"round"}>-</Button>
            <div>{quantity}</div>
            <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} type={"round"}>+</Button>

        </div>
    )
}

export default UpdateItemQuantity