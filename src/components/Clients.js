import React from 'react'
import Form from './Form'

const Clients = () => {
  return (
    <div>
    <div className='clients'>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div className='client'>
                        <h1>120</h1>
                        <p>Awesome Employees</p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='client'>
                        <h1>58</h1>
                        <p>Pizza Types</p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='client'>
                        <h1>1468</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='client'>
                        <h1>2031</h1>
                        <p>Delivery</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
      <Form />
      </div>
  )
}

export default Clients