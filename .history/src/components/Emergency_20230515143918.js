import React from 'react'
import HOC from './HOC'

const Emergency = () => {
    const [order, setOrder] = useState([]);

    const getOrders = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/orderr"
        );
        setOrder(data.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getOrders();
    }, []);
  
    return (
      <>
        <div className="Head">
          <div>
            <h4>Orders</h4>
          </div>
        </div>
  
        <div className="overflowCont">
          <Table style={{ width: "90%", margin: "auto" }}>
            <thead>
              <tr>
                <td>Number</td>
                <td>Service Id</td>
                <td> User Id </td>
                <td> Call </td>
                <td> Status </td>
                <td> Date </td>
                <td> Time </td>
                <td>Created Date </td>
                <td>Staff Id </td>
              </tr>
            </thead>
            <tbody>
              {order?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.subservicesId} </td>
                  <td> {i.userId} </td>
                  <td> {i.Call} </td>
                  <td> {i.status === true ? 'True' : "False" } </td>
                  <td> {i.date} </td>
                  <td> {i.time} </td>
                  <td> {i.createdAt?.slice(0, 10)} </td>
                  <td> {i.staffId} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(Emergency)