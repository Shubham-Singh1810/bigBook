import React from 'react'

export default function Card(props) {
  return (
    <div className="Card my-1 mx-1">
        <div style={{textAlign:"center"}}>
        <img src={props.value.imgUrl} alt="" /><br />
        </div>
        <hr />
        <span><b>Title :</b> {props.value.title}</span><br />
        <span><b>Author :</b> {props.value.author}</span><br />
        <span><b>Catagery :</b> {props.value.bookType}</span><br />
        <span><b>Price :</b><s> {props.value.price*1.2} </s> &#8377; <button className='btn btn-sm btn-success'>{props.value.price} &#8377;</button> </span><br />
        <span><b>Place Order : </b> <i>9876543210</i></span>
    </div>
  )
}
