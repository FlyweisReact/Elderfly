/** @format */

import React , { useState } from "react";
import HOC from "./HOC";
import { Table } from 'react-bootstrap'
import axios from 'axios'

const Orders = () => {

    const [ order  , setOrder ] = useState([])

    const getOrders = async () => {
        try{
            const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/orderr")
            setOrder(data.data)
        }catch(e)  {
            console.log(e)
        }
    }


    useEF

  return (
    <>
      <div className="Head">
        <div>
          <h4>Orders</h4>
        </div>
      </div>

        <div className="overflowCont">
                <Table>
                    <thead>
                        <tr>
                            <td></td>
                        </tr>
                    </thead>
                </Table>
        </div>

    </>
  );
};

export default HOC(Orders);
