/** @format */

import React from "react";
import HOC from "./HOC";
import { Table } from 'react-bootstrap'

const Orders = () => {
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
                            <td>subservicesId</td>
                            
                        </tr>
                    </thead>
                </Table>
        </div>

    </>
  );
};

export default HOC(Orders);