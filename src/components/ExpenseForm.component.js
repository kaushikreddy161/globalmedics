import { Button, TextField } from "@mui/material";
// import CustomDatePicker from "./CustomDatePicker.component";
import PageContainer from "./PageContainer.component";

const ExpenseForm = ({ onSubmit, form, setForm, editing }) => {
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <PageContainer>
      <form onSubmit={onSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <h1 style={{ color: "#209F85" }}>
          {editing ? "Edit Patient Details" : "New Patient"}
        </h1>
        <TextField
          label="Patient Name"
          type="text"
          variant="outlined"
          name="patientName"
          value={form.patientName}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Contact Number"
          type="number"
          variant="outlined"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Email ID"
          type="text"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Address"
          type="text"
          variant="outlined"
          name="address"
          value={form.address}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Age"
          type="number"
          variant="outlined"
          name="age"
          value={form.age}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Blood Group"
          type="text"
          variant="outlined"
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        {/* <CustomDatePicker
        label="Date of Birth"
        value={form.createdAt}
        onChange={(v) => { setForm({ ...form, createdAt: v }) }}
        style={{ marginBottom: "1rem", display: "block" }}
      /> */}
        <TextField
          label="Ethinicity"
          type="text"
          variant="outlined"
          name="ethincity"
          value={form.ethincity}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Occupation"
          type="text"
          variant="outlined"
          name="occupation"
          value={form.occupation}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Height"
          type="number"
          variant="outlined"
          name="height"
          value={form.height}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Weight"
          type="number"
          variant="outlined"
          name="weight"
          value={form.weight}
          onChange={onFormInputChange}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        {/* <select  style={{ marginBottom: "1rem" }}  fullWidth id="bloodGroup" label="Blood Group">
            <option>Select any one</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select> */}
        <Button
          style={{ background: "#1D5A90", borderRadius: 50 }}
          variant="contained"
          color="primary"
          onClick={onSubmit}
          type="submit"
        >
          {editing ? "Update" : "Create"} Patient
        </Button>
      </form>
    </PageContainer>
  );
};

export default ExpenseForm;
