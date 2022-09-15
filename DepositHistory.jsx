
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import endpointList from '../../../../settings/endpoints'
import API_AXIOS from '../../../../settings/settings'

function DepositHistory(){

    let [deposits, setDeposits] = useState([])
let [email, setEmail] =  useState(window.localStorage.getItem("userEmailHP")) 

const getData = async() => {
    try {
        let string = "?email=" + email.slice(1, email.length - 1)
        console.log(string)
         let {data} = await API_AXIOS.get(endpointList.getDeposits + string)
   setDeposits(data)
    } catch (error) {
        console.log(error)
    }
       
   }

   useEffect(()=>{
       getData()
}, [])
    return (
        <div> 
            <h1> Deposits </h1>
            <div className='table-responsive'>
                <table className='table table-sm table-bordered'>
                    <thead>
                        <tr>
                            <th> Amount </th>
                            <th> Currency </th>
                        </tr>
                    </thead>
                    <tbody>
                        {deposits && 
                        deposits.map((deposit)=>(
                            <tr>
                                <td>{deposit.amount}</td>
                                <td>{deposit.currency}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    )
}

export default DepositHistory