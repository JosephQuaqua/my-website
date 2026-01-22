import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/register.css";



export default function Register() {
  const [sameNumber, setSameNumber] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    whatsappCode: "",
    whatsappNumber: "",
    localCode: "",
    localNumber: "",
    dob: "",
    enrollment: "",
    semester: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // Basic validation
    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.country ||
      !form.whatsappCode ||
      !form.whatsappNumber ||
      !form.dob ||
      !form.enrollment ||
      !form.semester ||
      (!sameNumber && (!form.localCode || !form.localNumber))
    ) {
      setMessage({
        type: "danger",
        text: "Please fill in all required fields before registering."
      });
      return;
    }

    // Success
    setMessage({
      type: "success",
      text: "Registration successful. You can now login."
    });

    console.log("Registered Data:", form);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Student Account</h2>
        <p>Register to apply for student loans</p>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Basic Info */}
        <input
          className="auth-input"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {/* Country */}
        <select
          className="auth-input"
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="">Select country</option>
          <option>select country</option>
          <option value="IN">India</option>
            
    <option value="DZ">Algeria</option>
    <option value="AO">Angola</option>
    <option value="BJ">Benin</option>
    <option value="BW">Botswana</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="CV">Cabo Verde</option>
    <option value="CM">Cameroon</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the</option>
    <option value="CI">Côte d'Ivoire</option>
    <option value="DJ">Djibouti</option>
    <option value="EG">Egypt</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="SZ">Eswatini (Swaziland)</option>
    <option value="ET">Ethiopia</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GH">Ghana</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="KE">Kenya</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libya</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="ML">Mali</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="NA">Namibia</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="RE">Reunion</option>
    <option value="RW">Rwanda</option>
    <option value="SH">Saint Helena</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SN">Senegal</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="SS">South Sudan</option>
    <option value="SD">Sudan</option>
    <option value="TZ">Tanzania</option>
    <option value="TG">Togo</option>
    <option value="TN">Tunisia</option>
    <option value="UG">Uganda</option>
    <option value="EH">Western Sahara</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
        </select>

        {/* WhatsApp Number */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <select
            className="auth-input"
            style={{ width: "35%" }}
            name="whatsappCode"
            value={form.whatsappCode}
            onChange={handleChange}
          >
            <option value="">Code</option>
            <option value="91">India +91</option>
            
              
  <option value="+213">Algeria (+213)</option>
  <option value="+244">Angola (+244)</option>
  <option value="+229">Benin (+229)</option>
  <option value="+267">Botswana (+267)</option>
  <option value="+226">Burkina Faso (+226)</option>
  <option value="+257">Burundi (+257)</option>
  <option value="+237">Cameroon (+237)</option>
  <option value="+238">Cabo Verde (+238)</option>
  <option value="+236">Central African Republic (+236)</option>
  <option value="+235">Chad (+235)</option>
  <option value="+269">Comoros (+269)</option>
  <option value="+242">Congo, Republic of the (+242)</option>
  <option value="+243">Congo, Democratic Republic of the (+243)</option>
  <option value="+225">Côte d'Ivoire (Ivory Coast) (+225)</option>
  <option value="+253">Djibouti (+253)</option>
  <option value="+20">Egypt (+20)</option>
  <option value="+240">Equatorial Guinea (+240)</option>
  <option value="+291">Eritrea (+291)</option>
  <option value="+251">Ethiopia (+251)</option>
  <option value="+241">Gabon (+241)</option>
  <option value="+220">Gambia (+220)</option>
  <option value="+233">Ghana (+233)</option>
  <option value="+224">Guinea (+224)</option>
  <option value="+245">Guinea-Bissau (+245)</option>
  <option value="+254">Kenya (+254)</option>
  <option value="+266">Lesotho (+266)</option>
  <option value="+231">Liberia (+231)</option>
  <option value="+218">Libya (+218)</option>
  <option value="+261">Madagascar (+261)</option>
  <option value="+265">Malawi (+265)</option>
  <option value="+223">Mali (+223)</option>
  <option value="+222">Mauritania (+222)</option>
  <option value="+230">Mauritius (+230)</option>
  <option value="+212">Morocco (+212)</option>
  <option value="+258">Mozambique (+258)</option>
  <option value="+264">Namibia (+264)</option>
  <option value="+227">Niger (+227)</option>
  <option value="+234">Nigeria (+234)</option>
  <option value="+262">Réunion (France) (+262)</option>
  <option value="+250">Rwanda (+250)</option>
  <option value="+290">Saint Helena (+290)</option>
  <option value="+239">São Tomé and Príncipe (+239)</option>
  <option value="+221">Senegal (+221)</option>
  <option value="+248">Seychelles (+248)</option>
  <option value="+232">Sierra Leone (+232)</option>
  <option value="+252">Somalia (+252)</option>
  <option value="+27">South Africa (+27)</option>
  <option value="+211">South Sudan (+211)</option>
  <option value="+249">Sudan (+249)</option>
  <option value="+268">Eswatini (Swaziland) (+268)</option>
  <option value="+255">Tanzania (+255)</option>
  <option value="+228">Togo (+228)</option>
  <option value="+216">Tunisia (+216)</option>
  <option value="+256">Uganda (+256)</option>
  <option value="+260">Zambia (+260)</option>
  <option value="+263">Zimbabwe (+263)</option>
          </select>

          <input
            className="auth-input"
            name="whatsappNumber"
            placeholder="WhatsApp Number"
            value={form.whatsappNumber}
            onChange={handleChange}
          />
        </div>

        {/* Same number checkbox */}
        <label style={{ fontSize: "14px", marginBottom: "10px", display: "block" }}>
          <input
            type="checkbox"
            checked={sameNumber}
            onChange={() => setSameNumber(!sameNumber)}
          />{" "}
          WhatsApp number is same as local number
        </label>

        {/* Local Number */}
        {!sameNumber && (
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <select
              className="auth-input"
              style={{ width: "35%" }}
              name="localCode"
              value={form.localCode}
              onChange={handleChange}
            >
              <option value="">Code</option>
              
              <option value="91">India +91</option>
              
  <option value="+213">Algeria (+213)</option>
  <option value="+244">Angola (+244)</option>
  <option value="+229">Benin (+229)</option>
  <option value="+267">Botswana (+267)</option>
  <option value="+226">Burkina Faso (+226)</option>
  <option value="+257">Burundi (+257)</option>
  <option value="+237">Cameroon (+237)</option>
  <option value="+238">Cabo Verde (+238)</option>
  <option value="+236">Central African Republic (+236)</option>
  <option value="+235">Chad (+235)</option>
  <option value="+269">Comoros (+269)</option>
  <option value="+242">Congo, Republic of the (+242)</option>
  <option value="+243">Congo, Democratic Republic of the (+243)</option>
  <option value="+225">Côte d'Ivoire (Ivory Coast) (+225)</option>
  <option value="+253">Djibouti (+253)</option>
  <option value="+20">Egypt (+20)</option>
  <option value="+240">Equatorial Guinea (+240)</option>
  <option value="+291">Eritrea (+291)</option>
  <option value="+251">Ethiopia (+251)</option>
  <option value="+241">Gabon (+241)</option>
  <option value="+220">Gambia (+220)</option>
  <option value="+233">Ghana (+233)</option>
  <option value="+224">Guinea (+224)</option>
  <option value="+245">Guinea-Bissau (+245)</option>
  <option value="+254">Kenya (+254)</option>
  <option value="+266">Lesotho (+266)</option>
  <option value="+231">Liberia (+231)</option>
  <option value="+218">Libya (+218)</option>
  <option value="+261">Madagascar (+261)</option>
  <option value="+265">Malawi (+265)</option>
  <option value="+223">Mali (+223)</option>
  <option value="+222">Mauritania (+222)</option>
  <option value="+230">Mauritius (+230)</option>
  <option value="+212">Morocco (+212)</option>
  <option value="+258">Mozambique (+258)</option>
  <option value="+264">Namibia (+264)</option>
  <option value="+227">Niger (+227)</option>
  <option value="+234">Nigeria (+234)</option>
  <option value="+262">Réunion (France) (+262)</option>
  <option value="+250">Rwanda (+250)</option>
  <option value="+290">Saint Helena (+290)</option>
  <option value="+239">São Tomé and Príncipe (+239)</option>
  <option value="+221">Senegal (+221)</option>
  <option value="+248">Seychelles (+248)</option>
  <option value="+232">Sierra Leone (+232)</option>
  <option value="+252">Somalia (+252)</option>
  <option value="+27">South Africa (+27)</option>
  <option value="+211">South Sudan (+211)</option>
  <option value="+249">Sudan (+249)</option>
  <option value="+268">Eswatini (Swaziland) (+268)</option>
  <option value="+255">Tanzania (+255)</option>
  <option value="+228">Togo (+228)</option>
  <option value="+216">Tunisia (+216)</option>
  <option value="+256">Uganda (+256)</option>
  <option value="+260">Zambia (+260)</option>
  <option value="+263">Zimbabwe (+263)</option>
            </select>

            <input
              className="auth-input"
              name="localNumber"
              placeholder="Local Contact Number"
              value={form.localNumber}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Academic Info */}
        <input
          className="auth-input"
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="enrollment"
          placeholder="Enrollment Number"
          value={form.enrollment}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="number"
          min="1"
          name="semester"
          placeholder="Current Semester"
          value={form.semester}
          onChange={handleChange}
        />

        <button className="auth-button" onClick={handleRegister}>
          Register
        </button>

        <div className="auth-footer">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
