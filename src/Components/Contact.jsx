import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

export default function Contact({ contactPage }) {
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm(); // Clear form after submission
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit,
  });

  return (
    <div className={`bg-[#f1f1f1] ${contactPage ? "relative -top-28" : ""}`}>
      <div className="relative w-full h-[80vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34412.230668173295!2d76.01874834808208!3d11.229781080605242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647a816ae1085%3A0xa8478cb3aaa25a21!2sAreekode%2C%20Kerala%20673639!5e0!3m2!1sen!2sin!4v1734516655027!5m2!1sen!2sin"
          className="border-0 w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
      </div>
      <div className="grid md:grid-cols-2 bg-white lg:mx-20 mx-10 lg:p-10 p-5 md:gap-20 gap-10 relative bottom-32">
        <div className="space-y-5 md:space-y-7">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            CONTACT US
          </h4>
          <h1 className="md:text-5xl text-4xl  text-black  font-semibold ">
            Get In Touch
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide ">
            Mukthar Interiors specializes in creating elegant, functional, and
            personalized interior designs tailored to your style. With a focus
            on quality craftsmanship and innovative solutions, we bring your
            dream spaces to life.
          </h3>
          <div className="grid md:grid-cols-2 gap-7 ">
            <div className="flex gap-4 items-center text-[#d2ac6e]">
              <FaPhoneAlt className="lg:text-5xl text-3xl" />
              <div>
                <h2 className="lg:text-2xl text-lg text-black font-semibold">
                  Phone Number
                </h2>
                <a href="tel:+" className="md:text-base text-sm">
                  +91 1234567890
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center text-[#d2ac6e]">
              <div>
                <MdEmail className="lg:text-5xl text-3xl" />
              </div>
              <div>
                <h2 className="lg:text-2xl text-lg text-black font-semibold">
                  Email Address
                </h2>
                <a href="mailto:" className="md:text-base text-sm">
                  hello@awesomesite.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center text-[#d2ac6e]">
              <div>
                <CiGlobe className="lg:text-5xl text-3xl" />
              </div>
              <div>
                <h2 className="lg:text-2xl text-lg text-black font-semibold">
                  Websites
                </h2>
                <a href="" className="md:text-base text-sm">
                  www.awesomesite.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center text-[#d2ac6e]">
              <div>
                <IoLocationOutline className="lg:text-5xl text-3xl" />
              </div>
              <div>
                <h2 className="lg:text-2xl text-lg text-black font-semibold">
                  Address
                </h2>
                <h4 className="md:text-base text-sm">
                  99 Roving St., Big City, PKU 23456
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  {...formik.getFieldProps("name")}
                  className={`w-full p-2 border  text-gray-400 outline-none ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div>
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={`w-full p-2 border  text-gray-400 outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <input
                placeholder="Subject"
                id="subject"
                type="text"
                {...formik.getFieldProps("subject")}
                className={`w-full p-2 border  text-gray-400 outline-none ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.subject}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                placeholder="Message"
                id="message"
                rows="6"
                {...formik.getFieldProps("message")}
                className={`w-full p-2 border  text-gray-400 outline-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className=" w-full">
              <button
                type="submit"
                className="uppercase md:p-5 p-3 w-full border border-[#d2ac6e] bg-[#d2ac6e] text-[#f1f1f1] hover:bg-[#f1f1f1] hover:text-[#d2ac6e] font-semibold tracking-widest"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {contactPage && (
        <div className="h-28 top-28 relative bg-[#f1f1f1]">
          <h1 className="text-lg text-[#616161] max-w-[500px] mx-auto text-center">
            Thank you for reaching out!
          </h1>
        </div>
      )}
    </div>
  );
}

Contact.propTypes = {
  contactPage: PropTypes.bool.isRequired,
};
