import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { App, Credentials, BSON } from "realm-web";
import { APP_ID } from "../realm/constants";
import Form from "react-bootstrap/Form";

// Creating a Realm App Instance
const app = new App(APP_ID);

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  // const onFormInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  // };

  // As explained in the Login page.
  // const redirectNow = () => {
  //   const redirectTo = location.search.replace("?redirectTo=", "");
  //   navigate(redirectTo ? redirectTo : "/");
  // };

  // As explained in the Login page.

  // const onSubmit = async () => {
  //   if (form.password === form.cpassword) {
  //     try {
  //       const user = await emailPasswordSignup(form.email, form.password);
  //       if (user) {
  //         const credentials = Credentials.emailPassword(
  //           form.email,
  //           form.password
  //         );
  //         const authedUser = await app.logIn(credentials);

  //         let dt = new Date();
  //         let id = BSON.ObjectID(user.id);
  //         const create = authedUser.functions.createPatient(
  //           id,
  //           form.email,
  //           form.password,
  //           dt,
  //           "active",
  //           "GlobalMedics2021"
  //         );
  //         //console.log('create:', create);
  //         create.then((resp) => {
  //           //  console.log("resp:", resp);
  //           alert("Registration Done Successfully");
  //         });
  //         redirectNow();
  //       }
  //     } catch (error) {
  //       //alert(error);
  //       console.log("Error:", error);
  //     }
  //   } else {
  //     alert("The passwords do not match. Please try again!");
  //   }
  // };

  return (
    <div style={{ background: "#EBEBEB", height: "100vh" }}>
      <div style={{ paddingTop: "1.5rem" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "350px",
            margin: "auto",
            backgroundColor: "#ffffff",
            paddingLeft: "10pt",
            paddingRight: "10pt",
            borderRadius: "10pt",
            // marginTop: "20pt",
            height: "500px",
            overflow: "scroll",
          }}
        >
          <b>Privacy Policy</b>
          <br />
          1. We respect your privacy (a) Global Medics Australia Pty. Ltd.
          respects your right to privacy and is committed to safeguarding the
          privacy of our customers and website visitors. This policy sets out
          how we collect and treat your personal information. (b) We adhere to
          the Australian Privacy Principles contained in the Privacy Act 1988
          (Cth) and to the extent applicable, the EU General Data Protection
          Regulation (GDPR). (c) “Personal information” is information we hold
          which is identifiable as being about you. This includes information
          such as your name, email address, identification number, or any other
          type of information that can reasonably identify an individual, either
          directly or indirectly. (d) You may contact us in writing at Unit 9,
          16-24 Merriwa Street, Gordon, New South Wales, 2072, Australia for
          further information about this Privacy Policy.
          <br />
          2. What personal information is collected (a) Global Medics Australia
          Pty. Ltd. will, from time to time, receive and store personal
          information you submit to our website or our app, provided to us
          directly or given to us in other forms. (b) You may provide basic
          information such as your name, phone number, address and email address
          to enable us to send you information, provide updates and process your
          product or service order. (c) We may collect additional information at
          other times, including but not limited to, when you provide feedback,
          when you provide information about your personal or business affairs,
          change your content or email preference, respond to surveys and/or
          promotions, provide financial or credit card information, or
          communicate with our customer support. (d) Additionally, we may also
          collect any other information you provide while interacting with us
          like your health data.
          <br />
          3. How we collect your personal information (a) Global Medics
          Australia Pty. Ltd. collects personal information from you in a
          variety of ways, including when you interact with us electronically or
          in person, when you access our website and when we engage in business
          activities with you. We may receive personal information from third
          parties. If we do, we will protect it as set out in this Privacy
          Policy. (b) By providing us with personal information, you consent to
          the supply of that information subject to the terms of this Privacy
          Policy.
          <br />
          4. How we use your personal information (a) Global Medics Australia
          Pty. Ltd. may use personal information collected from you to provide
          you with information about our products or services. We may also make
          you aware of new and additional products, services and opportunities
          available to you. (b) Global Medics Australia Pty. Ltd. will use
          personal information only for the purposes that you consent to. This
          may include to: (i) provide you with products and services during the
          usual course of our business activities; (ii) administer our business
          activities; (iii) manage, research and develop our products and
          services; (iv) provide you with information about our products and
          services; (v) communicate with you by a variety of measures including,
          but not limited to, by telephone, email, sms or mail; and (vi)
          investigate any complaints. If you withhold your personal information,
          it may not be possible for us to provide you with our products and
          services or for you to fully access our website. (c) We may disclose
          your personal information to comply with a legal requirement, such as
          a law, regulation, court order, subpoena, warrant, legal proceedings
          or in response to a law enforcement agency request. (d) If there is a
          change of control in our business or a sale or transfer of business
          assets, we reserve the right to transfer to the extent permissible at
          law our user databases, together with any personal information and
          non-personal information contained in those databases.
          <br />
          5. Disclosure of your personal information (a) Global Medics Australia
          Pty. Ltd. may disclose your personal information to any of our
          employees, officers, insurers, professional advisers, agents,
          suppliers or subcontractors insofar as reasonably necessary for the
          purposes set out in this privacy policy. (b) If we do disclose your
          personal information to a third party, we will protect it in
          accordance with this privacy policy.
          <br />
          6. General Data Protection Regulation (GDPR) for the European Union
          (EU) (a) Global Medics Australia Pty. Ltd. will comply with the
          principles of data protection set out in the GDPR for the purpose of
          fairness, transparency and lawful data collection and use. (b) We
          process your personal information as a Processor and/or to the extent
          that we are a Controller as defined in the GDPR. (c) We must establish
          a lawful basis for processing your personal information. The legal
          basis for which we collect your personal information depends on the
          data that we collect and how we use it. (d) We will only collect your
          personal information with your express consent for a specific purpose
          and any data collected will be to the extent necessary and not
          excessive for its purpose. We will keep your data safe and secure. (e)
          We will also process your personal information if it is necessary for
          our legitimate interests, or to fulfil a contractual or legal
          obligation. (f) We process your personal information if it is
          necessary to protect your life or in a medical situation, it is
          necessary to carry out a public function, a task of public interest or
          if the function has a clear basis in law. (g) You must not provide us
          with your personal information if you are under the age of 16 without
          the consent of your parent or someone who has parental authority for
          you. We do not knowingly collect or process the personal information
          of children.
          <br />
          7. Your rights under the GDPR (a) If you are an individual residing in
          the EU, you have certain rights as to how your personal information is
          obtained and used. Global Medics Australia Pty. Ltd. complies with
          your rights under the GDPR as to how your personal information is used
          and controlled if you are an individual residing in the EU (b) Except
          as otherwise provided in the GDPR, you have the following rights: (i)
          to be informed how your personal information is being used; (ii)
          access your personal information (we will provide you with a free copy
          of it); (iii) to correct your personal information if it is inaccurate
          or incomplete; (iv) to delete your personal information (also known as
          “the right to be forgotten”); (v) to restrict processing of your
          personal information; (vi) to retain and reuse your personal
          information for your own purposes; (vii) to object to your personal
          information being used; and (viii) to object against automated
          decision making and profiling. (c) Please contact us at any time to
          exercise your rights under the GDPR at the contact details in this
          Privacy Policy. (d) We may ask you to verify your identity before
          acting on any of your requests.
          <br />
          8. Hosting and International Data Transfers (a) Information that we
          collect may from time to time be stored, processed in or transferred
          between parties or sites located in countries outside of Australia.
          These may include, but are not limited to India, New Zealand, UK, USA,
          Singapore, Europe and UAE. (b) We and our other group companies have
          offices and/or facilities in India, New Zealand, UK, USA, Singapore,
          Europe and UAE. Transfers to each of these countries will be protected
          by appropriate safeguards, these include one or more of the following:
          the use of standard data protection clauses adopted or approved by the
          European Commission which you can obtain from the European Commission
          Website; the use of binding corporate rules, a copy of which you can
          obtain from Global Medics Australia Pty. Ltd.’s Data Protection
          Officer. (c) The hosting facilities for our website are situated in
          India, New Zealand, UK, USA, Singapore, Europe and UAE. Transfers to
          each of these Countries will be protected by appropriate safeguards,
          these include one or more of the following: the use of standard data
          protection clauses adopted or approved by the European Commission
          which you can obtain from the European Commission Website; the use of
          binding corporate rules, a copy of which you can obtain from Global
          Medics Australia Pty. Ltd.’s Data Protection Officer. (d) Our
          Suppliers and Contractors are situated in India, New Zealand, UK, USA,
          Singapore, Europe and UAE. Transfers to each of these Countries will
          be protected by appropriate safeguards, these include one or more of
          the following: the use of standard data protection clauses adopted or
          approved by the European Commission which you can obtain from the
          European Commission Website; the use of binding corporate rules, a
          copy of which you can obtain from Global Medics Australia Pty. Ltd.’s
          Data Protection Officer or Chief Information Security Officer. (e) You
          acknowledge that personal data that you submit for publication through
          our website or services may be available, via the internet, around the
          world. We cannot prevent the use (or misuse) of such personal data by
          others.
          <br />
          9. Security of your personal information (a) Global Medics Australia
          Pty. Ltd. is committed to ensuring that the information you provide to
          us is secure. In order to prevent unauthorised access or disclosure,
          we have put in place suitable physical, electronic and managerial
          procedures to safeguard and secure information and protect it from
          misuse, interference, loss and unauthorised access, modification and
          disclosure. (b) Where we employ data processors to process personal
          information on our behalf, we only do so on the basis that such data
          processors comply with the requirements under the GDPR and that have
          adequate technical measures in place to protect personal information
          against unauthorised use, loss and theft. (c) The transmission and
          exchange of information is carried out at your own risk. We cannot
          guarantee the security of any information that you transmit to us, or
          receive from us. Although we take measures to safeguard against
          unauthorised disclosures of information, we cannot assure you that
          personal information that we collect will not be disclosed in a manner
          that is inconsistent with this Privacy Policy.
          <br />
          10. Access to your personal information (a) You may request details of
          personal information that we hold about you in accordance with the
          provisions of the Privacy Act 1988 (Cth), and to the extent applicable
          the EU GDPR. If you would like a copy of the information which we hold
          about you or believe that any information we hold on you is
          inaccurate, out of date, incomplete, irrelevant or misleading, please
          email us at Legal@GlobalMedics.ai. (b) We reserve the right to refuse
          to provide you with information that we hold about you, in certain
          circumstances set out in the Privacy Act or any other applicable law.
          <br />
          11. Complaints about privacy (a) If you have any complaints about our
          privacy practices, please feel free to send in details of your
          complaints to Legal@GlobalMedics.ai. We take complaints very seriously
          and will respond shortly after receiving written notice of your
          complaint.
          <br />
          12. Changes to Privacy Policy (a) Please be aware that we may change
          this Privacy Policy in the future. We may modify this Policy at any
          time, in our sole discretion and all modifications will be effective
          immediately upon our posting of the modifications on our website or
          notice board. Please check back from time to time to review our
          Privacy Policy.
          <br />
          13. Website (a) When you come to our website
          (https://globalmedics.ai/) and our app, we may collect certain
          information such as browser type, operating system, location, time,
          website visited immediately before coming to our site, etc. This
          information is used in an aggregated manner to analyse how people use
          our site, such that we can improve our service. (b) We may from time
          to time use cookies on our website. Cookies are very small files which
          a website uses to identify you when you come back to the site and to
          store details about your use of the site. Cookies are not malicious
          programs that access or damage your computer. Most web browsers
          automatically accept cookies but you can choose to reject cookies by
          changing your browser settings. However, this may prevent you from
          taking full advantage of our website. Our website may from time to
          time use cookies to analyses website traffic and help us provide a
          better website visitor experience. In addition, cookies may be used to
          serve relevant ads to website visitors through third party services
          such as Google AdWords. These ads may appear on this website or other
          websites you visit. (c) Our site may from time to time have links to
          other websites not owned or controlled by us. These links are meant
          for your convenience only. Links to third party websites do not
          constitute sponsorship or endorsement or approval of these websites.
          Please be aware that Global Medics Australia Pty. Ltd. is not
          responsible for the privacy practises of other such websites. We
          encourage our users to be aware, when they leave our website, to read
          the privacy statements of each and every website that collects
          personal identifiable information.
          <br />
          14. Effective date This policy is effective from 1st November 2022.
        </form>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
