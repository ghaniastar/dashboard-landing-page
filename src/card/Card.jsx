import React from 'react'

export default function Card(props) {
  return (
    <div className='col-md-3 col-sm-8 col-lg-3'>
    <div class="card" style={{width:"100%"}}>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <a href="#" class="btn btn-primary">{props.btn}</a>
      </div>
    </div>
  
</div>
  )
}
