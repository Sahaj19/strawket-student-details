import { useState, useEffect } from "react";
import { Table } from "antd";
import fetchdata from "../utils/fetchdata";
import Pagination from "./Pagination";
// import TableBody from "./TableBody";

function StudentTable(props) {
  const { activeTab, openModal } = props;
  const [userDetails, setUserDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const detailsPerPage = 4;

  const Details = async () => {
    const data = await fetchdata("/users");
    setUserDetails(data);
  };

  useEffect(() => {
    Details();
  }, []);

  //pagination working
  let startingIndex = (currentPage - 1) * detailsPerPage;
  let endingIndex = startingIndex + detailsPerPage;
  let slicedStudentData = userDetails.slice(startingIndex, endingIndex);

  function prevbtnFunc() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextBtnFunc() {
    if (currentPage < Math.ceil(userDetails.length / detailsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  /*
  Ant Design Table Component Starting
  */

   // Ant Design table columns
   const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, user) => (
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => fetchUserData(user.id)}
        >
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ width: "24px", marginRight: "5px" }}
          />
          {user.first_name} {user.last_name}
        </span>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone No.",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "Email ID",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date Of Birth",
      dataIndex: "date_of_birth",
      key: "date_of_birth",
    },
  ];

  const fetchUserData = async (userID) => {
    const data = await fetchdata(`users/${userID}`);
    openModal(data);
  };
  
  /*
  Ant Design Table Component Ending
  */

  return (
    <div className="tables">
      {activeTab === "classes" && <div id="classes">This is classes div</div>}
      {activeTab === "student" && (
        <div id="student">
          {/* <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone No.</th>
                <th>Email ID</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              <TableBody 
                slicedStudentData={slicedStudentData} 
                openModal={openModal} 
              />
            </tbody>
          </table> */}
           <Table
            columns={columns}
            dataSource={slicedStudentData} // sliced data for pagination
            pagination={false} // Disable default ant design pagination
            rowKey="id" // unique key for each row
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(userDetails.length / detailsPerPage)}
            nextBtnFunc={nextBtnFunc}
            prevbtnFunc={prevbtnFunc}
          />
        </div>
      )}
      {activeTab === "coach" && <div id="coach">this is coach div</div>}
    </div>
  );
}

export default StudentTable;
