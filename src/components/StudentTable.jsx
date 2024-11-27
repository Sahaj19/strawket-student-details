import { useState, useEffect } from "react";
import fetchdata from "../utils/fetchdata";
import Pagination from "./Pagination";
import TableBody from "./TableBody";

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
    console.log("prev btn");
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextBtnFunc() {
    console.log("next btn");
    if (currentPage < Math.ceil(userDetails.length / detailsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="tables">
      {activeTab === "classes" && <div id="classes">This is classes div</div>}
      {activeTab === "student" && (
        <div id="student">
          <table>
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
          </table>
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
