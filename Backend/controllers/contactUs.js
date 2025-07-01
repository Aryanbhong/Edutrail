

const { default: toast } = require("react-hot-toast")
const { contactUsEmail } = require("../mailtemplate/ContactForm")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Res ", emailRes)
    toast.success(" message sent successfully")
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    toast.error(" something went wrong")
    return res.json({
      success: false,
      message: "Something went wrong...",
      error: error
    })
  }
}