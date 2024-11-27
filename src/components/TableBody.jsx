import fetchdata from "../utils/fetchdata";

function TableBody(props) {
  const { slicedStudentData, openModal } = props;

  async function fetchUserData(userID) {
    const data = await fetchdata(`users/${userID}`);
    openModal(data);
  }


  return slicedStudentData.map((user) => (
    <tr key={user.id}>
    <td className="userName" onClick={() => fetchUserData(user.id)} ><img src={user.avatar} alt={user.first_name}/>&nbsp;{user.first_name} {user.last_name}</td>
    <td>{user.age}</td>
    <td>{user.Phone}</td>
    <td>{user.email}</td>
    <td>{user.gender}</td>
    <td><i className="bi bi-calendar-week"></i>&nbsp;{user.date_of_birth}</td>
  </tr>
  ))
}

export default TableBody;