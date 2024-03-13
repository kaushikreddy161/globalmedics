<div className="dnd-container">
<div className="card-file-div">
  <span className="green">Care Ring Members</span>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Role*</th>
        <th scope="col">First Name*</th>
        <th scope="col">Middle Name</th>
        <th scope="col">Family Name</th>
        <th scope="col">Mobile*</th>
        <th scope="col">eMail</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1. Next of Kin</td>
        <td>John</td>
        <td>Prasad</td>
        <td>Travolta</td>
        <td>+919876543210</td>
        <td>RNK@Email.com</td>
        <td>Chennai</td>
      </tr>
      <tr>
        <td>2. Family Member</td>
        <td>Ram</td>
        <td>Narain</td>
        <td>Mallick</td>
        <td>+919876543210</td>
        <td>rmnm@mail.com</td>
        <td>Allahabad</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="dnd-container">
  <div className="card">
    <span className="green">Add New Care Ring Members</span>
    {
      data.map((val, i) =>
        <div className="cardz">
          <div style={{ display: "flex" }} >
            <select name="role" value={val.role} className="form-control input-right-space width" placeholder="Sex">
              <option selected>-Select Role-</option>
              <option value="1">Next of Kin</option>
              <option value="2">Family</option>
              <option value="3">Friend</option>
              <option value="4">Attendant</option>
            </select>
            <input type="text" name="fname" value={val.fname} class="form-control input-right-space width" placeholder="First Name" />
            <input type="text" name="mname" value={val.mname} class="form-control input-right-space width" placeholder="Middle Name" />
            <input type="text" name="fmname" value={val.fmname} class="form-control input-right-space width" placeholder="Family Name" />
            <input type="number" name="mobile" value={val.mobile} class="form-control input-right-space width" placeholder="Mobile" />
            <input type="email" name="email" value={val.email} class="form-control input-right-space width" placeholder="eMail" />
            <input type="text" name="address" value={val.address} class="form-control input-right-space width" placeholder="Address" />
          </div>
        </div>
      )
    }
    <div className="btn-div">
      <Button className="form-btn add" onClick={handleClick}>Add</Button>

      <Button className="form-btn delete" onClick={handleDelete}>Delete</Button>
      {/* <Button className="form-btn delete">Delete</Button> */}
    </div>
  </div>
</div>



<div className="card-file-div">
  <span className="green">Upload Reports</span>
  <form style={{ display: "flex" }}>
    <select className="form-control input-right-space width" placeholder="Sex">
      <option selected>-Report Type-</option>
      <option value="1">Pathology</option>
      <option value="2">Radiology</option>
      <option value="3">Other</option>
    </select>
    <input type="file" class="form-control input-right-space width" placeholder="Choose File" />
    <Button className="form-btn draft">Upload</Button>
  </form>
</div>
<div className="div-right">
  <Button className="form-btn continue" onClick={handleClick}>Continue</Button>
</div>



</div>