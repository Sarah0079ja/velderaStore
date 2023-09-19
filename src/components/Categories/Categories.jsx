import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className="row">
               <img src='https://images.pexels.com/photos/5325569/pexels-photo-5325569.jpeg?auto=compress&cs=tinysrgb&w=400' alt=''/>
               <button>
                <Link className='link' to='/products/1'>Sale</Link>
               </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/8074591/pexels-photo-8074591.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
                <button>
                  <Link className='link' to='/products/1'>Women</Link>
               </button>
            </div>
        </div>

        <div className='col'>
            <div className="row">
               <img src='https://images.pexels.com/photos/7325658/pexels-photo-7325658.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
                <button>
                <Link className='link' to='/products/1'>New Season</Link>
               </button>  
            </div>
        </div>

        <div className="col col-l">
            <div className='row'>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/5886044/pexels-photo-5886044.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
                            <button>
                                <Link className='link' to='/products/1'>Sale</Link>
                            </button> 
                       
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/4584607/pexels-photo-4584607.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
                            <button>
                                <Link className='link' to='/products/1'>Accessories</Link>
                            </button>  
                    </div>
                </div>
            </div>
            <div className="row">
               <img src='https://images.pexels.com/photos/6923542/pexels-photo-6923542.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
                 <button>
                   <Link to='/products/1' className='link'> Shoes </Link>
                 </button>  
            </div>
        </div>
       
    </div>
  )
}

export default Categories