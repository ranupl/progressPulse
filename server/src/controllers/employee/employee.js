const employeeService = require("../../services/employee/employee");
const errorCodes = require("../../models/error");
const logErrorToFile = require("../../util/errorLogs");
const otpGenerator = require('otp-generator')
const { mailSend } = require("../../util/mail.js");

async function createEmployee(req, res) {
  try {
    const { id, first_name, middle_name, last_name, email, username, password } = req.body;
    const employee = await employeeService.createEmployee({
      id,
      first_name,
      middle_name,
      last_name,
      email,
      username,
      password,
    });
    res.status(200).json({ message: 'Registered successful', employee });
  } catch (error) {
    console.error("Error creating employee:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the employee" });
  }
}

async function getAllEmployee(req, res) {
  try {
    const employee = await employeeService.getAllEmployee();
    res.json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "An error occurred while fetching employee" });
  }
}

async function getEmployeeById(req, res) {
  const employeeId = req.params.id;

  try {
    const employee = await employeeService.getEmployeeById(employeeId);
    if (!employee) {
      res.status(404).json({ error: "Employee not found" });
    } else {
      res.json(employee);
    }
  } catch (error) {
    console.log(err);
  }
}

async function updateEmployee(req, res) {
  const employeeId = req.params.id;
  const updateEmployeeData = req.body;

  try {
    const updatedEmployee = await employeeService.updateEmployee(employeeId, updateEmployeeData);
    res.json(updatedEmployee);
  } catch (err) {
    console.log(err);
  }
}

async function deleteEmployee(req, res) {
  const employeeId = req.params.id;

  try {
    const deletedEmployee = await employeeService.deleteEmployee(employeeId);
    res.json(deletedEmployee);
  } catch (err) {
    console.log(err);
  }
}

async function verifyEmail(req, res) {
  const { email } = req.body;

  try {
    const employee = await employeeService.verifyEmail(email);
    if (employee) {
      const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
      const html = `<pre>Otp ${otp}</pre>`;
      const info = await mailSend("Forgot password OTP", email, `Hello ${employee.first_name}`, html);
      req.session.otp = otp;
      if (info && info.accepted.length > 0) {
        res.status(200).json({ status: 200, status: "success", message: "OTP sent to the email." });
      } else {
        res.status(500).json({ status: 500, status: "error", message: "Failed to send OTP email." });
      }
    } else {
      const message = "Invalid email address";
      res.status(400).json({ status: 400, status: "failed", message: message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, status: "error", message: "Internal server error." });
  }
}

async function verifyOtp(req, res) {
    const { otp } = req.body;
   
    try {
      const sessionOtp = req.session.otp;
      if(otp == sessionOtp)
      {
        res.status(200).json({status: 200, message: "Otp verified successfully"});
      }
      else{
        res.status(404).json({status: 404, message: "Invalid Otp"});
      }
    } catch(error) {
      console.log(error);
    }
}

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  verifyEmail,
  verifyOtp
}