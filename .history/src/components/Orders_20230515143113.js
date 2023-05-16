/** @format */

import React from "react";
import HOC from "./HOC";
import { Table } from 'react-bootstrap'

const Orders = () => {

    const [ order  , setOrder ] = useState([])

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
