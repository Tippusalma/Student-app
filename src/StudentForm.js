function StudentForm() {
  return (
    <div>
      <h2>Student Registration Form</h2>

      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Student Name"
          required
        />
        <br /><br />

        <label>Roll No:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Roll Number"
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;