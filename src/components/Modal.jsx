function Modal(props) {
  const { data, onClose } = props;
  return <div id="modal" className="modal">
  <div className="modal-content">
    <div id="modal-body">
    {data ? (
            <>
              <div className="upperDiv">
                <h3 className="purpleText">{data.first_name} {data.last_name}</h3>
                <span className="close" onClick={onClose} >&times;</span>
              </div>
              <div className="avatarDiv">
                <img src={data.avatar} alt={data.first_name} />
              </div>
              <div className="padderDiv">
              <p className="purpleText"><i className="bi bi-person-circle"></i>&nbsp;Student Details</p>
              <div className="boxes">
                <div className="box">
                  <p><b>First Name</b></p>
                  <div className="colorBox">{data.first_name}</div>
                </div>
                <div className="box">
                <p><b>Last Name</b></p>
                <div className="colorBox">{data.last_name}</div>
                </div>
                <div className="box">
                <p><b>Age</b></p>
                <div className="colorBox">{data.age}</div>
                </div>
              </div>
              <p className="purpleText"><i className="bi bi-info-circle-fill"></i>&nbsp;Further Information</p>
              <div className="lowerBox">
                <p><b>Email</b></p>
                <div className="colorBox">{data.email}</div>
              </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
    </div>
  </div>
</div>
}

export default Modal;