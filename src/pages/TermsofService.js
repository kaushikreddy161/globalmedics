import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { App, Credentials, BSON } from "realm-web";
import { APP_ID } from "../realm/constants";
import Form from "react-bootstrap/Form";

// Creating a Realm App Instance
const app = new App(APP_ID);

const TermsofService = () => {
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
          <b>MOBILE APP TERMS AND CONDITIONS OF USE</b>
          <br />
          1. About the Application (a) Welcome to GlobalMedics.AI "V R Care"
          (the 'Application'). The Application Remote Patient Management (the
          'Services'). (b) The Application is operated by Global Medics
          Australia Pty. Ltd. PTY. LTD. (ABN 40 652 464 250) . Access to and use
          of the Application, or any of its associated Products or Services, is
          provided by Global Medics Australia Pty. Ltd.. Please read these terms
          and conditions (the 'Terms') carefully. By using, browsing and/or
          reading the Application, this signifies that you have read, understood
          and agree to be bound by the Terms. If you do not agree with the
          Terms, you must cease usage of the Application, or any of its
          Services, immediately. (c) Global Medics Australia Pty. Ltd. reserves
          the right to review and change any of the Terms by updating this page
          at its sole discretion. When Global Medics Australia Pty. Ltd. updates
          the Terms, it will use reasonable endeavours to provide you with
          notice of updates to the Terms. Any changes to the Terms take
          immediate effect from the date of their publication. Before you
          continue, we recommend you keep a copy of the Terms for your records.
          <br />
          2. Acceptance of the Terms You accept the Terms by using or browsing
          the Application. You may also accept the Terms by clicking to accept
          or agree to the Terms where this option is made available to you by
          Global Medics Australia Pty. Ltd. in the user interface.
          <br />
          3. Subscription to use the Services (a) In order to access the
          Services, you must first purchase a subscription through the
          Application (the 'Subscription') and pay the applicable fee for the
          selected Subscription (the 'Subscription Fee'). (b) In purchasing the
          Subscription, you acknowledge and agree that it is your responsibility
          to ensure that the Subscription you elect to purchase is suitable for
          your use. (c) Once you have purchased the Subscription, you will then
          be required to register for an account through the Application before
          you can access the Services (the 'Account'). (d) As part of the
          registration process, or as part of your continued use of the
          Services, you may be required to provide personal information about
          yourself (such as identification or contact details), including: (i)
          Email address (ii) Preferred username (iii) Mailing address (iv)
          Telephone number (v) Password (vi) Connections and their health
          information (e) You warrant that any information you give to Global
          Medics Australia Pty. Ltd. in the course of completing the
          registration process will always be accurate, correct and up to date.
          (f) Once you have completed the registration process, you will be a
          registered member of the Application ('Member') and agree to be bound
          by the Terms. As a Member you will be granted immediate access to the
          Services from the time you have completed the registration process
          until the subscription period expires (the 'Subscription Period'). (g)
          You may not use the Services and may not accept the Terms if: (i) you
          are not of legal age to form a binding contract with Global Medics
          Australia Pty. Ltd.; or (ii) you are a person barred from receiving
          the Services under the laws of Australia or other countries including
          the country in which you are resident or from which you use the
          Services.
          <br />
          4. Your obligations as a Member (a) As a Member, you agree to comply
          with the following: (a) you will use the Services only for purposes
          that are permitted by: (i) the Terms; and (ii) any applicable law,
          regulation or generally accepted practices or guidelines in the
          relevant jurisdictions; (b) you have the sole responsibility for
          protecting the confidentiality of your password and/or email address.
          Use of your password by any other person may result in the immediate
          cancellation of the Services; (c) any use of your registration
          information by any other person, or third parties, is strictly
          prohibited. You agree to immediately notify Global Medics Australia
          Pty. Ltd. of any unauthorised use of your password or email address or
          any breach of security of which you have become aware; (d) access and
          use of the Application is limited, non-transferable and allows for the
          sole use of the Application by you for the purposes of Global Medics
          Australia Pty. Ltd. providing the Services; (e) you will not use the
          Services or the Application in connection with any commercial
          endeavours except those that are specifically endorsed or approved by
          the management of Global Medics Australia Pty. Ltd.; (f) you will not
          use the Services or Application for any illegal and/or unauthorised
          use which includes collecting email addresses of Members by electronic
          or other means for the purpose of sending unsolicited email or
          unauthorised framing of or linking to the Application; (g) you agree
          that commercial advertisements, affiliate links, and other forms of
          solicitation may be removed from the Application without notice and
          may result in termination of the Services. Appropriate legal action
          will be taken by Global Medics Australia Pty. Ltd. for any illegal or
          unauthorised use of the Application; and (h) you acknowledge and agree
          that any automated use of the Application or its Services is
          prohibited.
          <br />
          5. Payment (a) Where the option is given to you, you may make payment
          of the Subscription Fee by way of: (i) Electronic funds transfer
          ('EFT') into our nominated bank account (ii) Credit Card Payment
          ('Credit Card') (iii) PayPal ('PayPal') (b) All payments made in the
          course of your use of the Services are made using Stripe or PayPal. In
          using the Application, the Services or when making any payment in
          relation to your use of the Services, you warrant that you have read,
          understood and agree to be bound by the Stripe or PayPal terms and
          conditions which are available on their Application. (c) You
          acknowledge and agree that where a request for the payment of the
          Subscription Fee is returned or denied, for whatever reason, by your
          financial institution or is unpaid by you for any other reason, then
          you are liable for any costs, including banking fees and charges,
          associated with the Subscription Fee. (d) You agree and acknowledge
          that Global Medics Australia Pty. Ltd. can vary the Subscription Fee
          at any time and that the varied Subscription Fee will come into effect
          following the conclusion of the existing Subscription Period.
          <br />
          6. Refund Policy Global Medics Australia Pty. Ltd. will only provide
          you with a refund of the Subscription Fee in the event they are unable
          to continue to provide the Services or if the manager of Global Medics
          Australia Pty. Ltd. makes a decision, at its absolute discretion, that
          it is reasonable to do so under the circumstances . Where this occurs,
          the refund will be in the proportional amount of the Subscription Fee
          that remains unused by the Member (the 'Refund').
          <br />
          7. Copyright and Intellectual Property (a) The Application, the
          Services and all of the related products of Global Medics Australia
          Pty. Ltd. are subject to copyright. The material on the Application is
          protected by copyright under the laws of Australia and through
          international treaties. Unless otherwise indicated, all rights
          (including copyright) in the Services and compilation of the
          Application (including but not limited to text, graphics, logos,
          button icons, video images, audio clips, Application, code, scripts,
          design elements and interactive features) or the Services are owned or
          controlled for these purposes, and are reserved by Global Medics
          Australia Pty. Ltd. or its contributors. (b) All trademarks, service
          marks and trade names are owned, registered and/or licensed by Global
          Medics Australia Pty. Ltd., who grants to you a worldwide,
          non-exclusive, royalty-free, revocable license whilst you are a Member
          to: (i) use the Application pursuant to the Terms; (ii) copy and store
          the Application and the material contained in the Application in your
          device's cache memory; and (iii) print pages from the Application for
          your own personal and non-commercial use. Global Medics Australia Pty.
          Ltd. does not grant you any other rights whatsoever in relation to the
          Application or the Services. All other rights are expressly reserved
          by Global Medics Australia Pty. Ltd.. (c) Global Medics Australia Pty.
          Ltd. retains all rights, title and interest in and to the Application
          and all related Services. Nothing you do on or in relation to the
          Application will transfer any: (i) business name, trading name, domain
          name, trade mark, industrial design, patent, registered design or
          copyright, or (ii) a right to use or exploit a business name, trading
          name, domain name, trade mark or industrial design, or (iii) a thing,
          system or process that is the subject of a patent, registered design
          or copyright (or an adaptation or modification of such a thing, system
          or process), to you. (d) You may not, without the prior written
          permission of Global Medics Australia Pty. Ltd. and the permission of
          any other relevant rights owners: broadcast, republish, upload to a
          third party, transmit, post, distribute, show or play in public, adapt
          or change in any way the Services or third party Services for any
          purpose, unless otherwise provided by these Terms. This prohibition
          does not extend to materials on the Application, which are freely
          available for re-use or are in the public domain.
          <br />
          8. Privacy Global Medics Australia Pty. Ltd. takes your privacy
          seriously and any information provided through your use of the
          Application and/or Services are subject to Global Medics Australia
          Pty. Ltd.'s Privacy Policy, which is available on the Application and
          at https://globalmedics.ai/legal/privacy-policy/.
          <br />
          9. General Disclaimer (a) Nothing in the Terms limits or excludes any
          guarantees, warranties, representations or conditions implied or
          imposed by law, including the Australian Consumer Law (or any
          liability under them) which by law may not be limited or excluded. (b)
          Subject to this clause, and to the extent permitted by law: (i) all
          terms, guarantees, warranties, representations or conditions which are
          not expressly stated in the Terms are excluded; and (ii) Global Medics
          Australia Pty. Ltd. will not be liable for any special, indirect or
          consequential loss or damage (unless such loss or damage is reasonably
          foreseeable resulting from our failure to meet an applicable Consumer
          Guarantee), loss of profit or opportunity, or damage to goodwill
          arising out of or in connection with the Services or these Terms
          (including as a result of not being able to use the Services or the
          late supply of the Services), whether at common law, under contract,
          tort (including negligence), in equity, pursuant to statute or
          otherwise. (c) Use of the Application and the Services is at your own
          risk. Everything on the Application and the Services is provided to
          you "as is" and "as available" without warranty or condition of any
          kind. None of the affiliates, directors, officers, employees, agents,
          contributors and licensors of Global Medics Australia Pty. Ltd. make
          any express or implied representation or warranty about the Services
          or any products or Services (including the products or Services of
          Global Medics Australia Pty. Ltd.) referred to on the Application.
          This includes (but is not restricted to) loss or damage you might
          suffer as a result of any of the following: (i) failure of
          performance, error, omission, interruption, deletion, defect, failure
          to correct defects, delay in operation or transmission, computer virus
          or other harmful component, loss of data, communication line failure,
          unlawful third party conduct, or theft, destruction, alteration or
          unauthorised access to records; (ii) the accuracy, suitability or
          currency of any information on the Application, the Services, or any
          of its Services related products (including third party material and
          advertisements on the Application); (iii) costs incurred as a result
          of you using the Application, the Services or any of the products of
          Global Medics Australia Pty. Ltd.; and (iv) the Services or operation
          in respect to links which are provided for your convenience.
          <br />
          10. Competitors If you are in the business of providing similar
          Services for the purpose of providing them to users for a commercial
          gain, whether business users or domestic users, then you are a
          competitor of Global Medics Australia Pty. Ltd.. Competitors are not
          permitted to use or access any information or content on our
          Application. If you breach this provision, Global Medics Australia
          Pty. Ltd. will hold you fully responsible for any loss that we may
          sustain and hold you accountable for all profits that you might make
          from such a breach.
          <br />
          11. Limitation of liability (a) Global Medics Australia Pty. Ltd.'s
          total liability arising out of or in connection with the Services or
          these Terms, however arising, including under contract, tort
          (including negligence), in equity, under statute or otherwise, will
          not exceed the resupply of the Services to you. (b) You expressly
          understand and agree that Global Medics Australia Pty. Ltd., its
          affiliates, employees, agents, contributors and licensors shall not be
          liable to you for any direct, indirect, incidental, special
          consequential or exemplary damages which may be incurred by you,
          however caused and under any theory of liability. This shall include,
          but is not limited to, any loss of profit (whether incurred directly
          or indirectly), any loss of goodwill or business reputation and any
          other intangible loss.
          <br />
          12. Termination of Contract (a) The Terms will continue to apply until
          terminated by either you or by Global Medics Australia Pty. Ltd. as
          set out below. (b) If you want to terminate the Terms, you may do so
          by: (i) not renewing the Subscription prior to the end of the
          Subscription Period; (ii) providing Global Medics Australia Pty. Ltd.
          with 30 days' notice of your intention to terminate; and (iii) closing
          your accounts for all of the services which you use, where Global
          Medics Australia Pty. Ltd. has made this option available to you. Your
          notice should be sent, in writing, to Global Medics Australia Pty.
          Ltd. via the 'Contact Us' link on our homepage. (c) Global Medics
          Australia Pty. Ltd. may at any time, terminate the Terms with you if:
          (i) you do not renew the Subscription at the end of the Subscription
          Period; (ii) you have breached any provision of the Terms or intend to
          breach any provision; (iii) Global Medics Australia Pty. Ltd. is
          required to do so by law; (iv) the provision of the Services to you by
          Global Medics Australia Pty. Ltd. is, in the opinion of Global Medics
          Australia Pty. Ltd., no longer commercially viable. (d) Subject to
          local applicable laws, Global Medics Australia Pty. Ltd. reserves the
          right to discontinue or cancel your membership at any time and may
          suspend or deny, in its sole discretion, your access to all or any
          portion of the Application or the Services without notice if you
          breach any provision of the Terms or any applicable law or if your
          conduct impacts Global Medics Australia Pty. Ltd.'s name or reputation
          or violates the rights of those of another party.
          <br />
          13. Indemnity (a) You agree to indemnify Global Medics Australia Pty.
          Ltd., its affiliates, employees, agents, contributors, third party
          content providers and licensors from and against: (i) all actions,
          suits, claims, demands, liabilities, costs, expenses, loss and damage
          (including legal fees on a full indemnity basis) incurred, suffered or
          arising out of or in connection with Your Content; (ii) any direct or
          indirect consequences of you accessing, using or transacting on the
          Application or attempts to do so; and/or (iii) any breach of the
          Terms.
          <br />
          14. Dispute Resolution (a) Compulsory: If a dispute arises out of or
          relates to the Terms, either party may not commence any Tribunal or
          Court proceedings in relation to the dispute, unless the following
          clauses have been complied with (except where urgent interlocutory
          relief is sought). (b) Notice: A party to the Terms claiming a dispute
          ('Dispute') has arisen under the Terms, must give written notice to
          the other party detailing the nature of the dispute, the desired
          outcome and the action required to settle the Dispute. (c) Resolution:
          On receipt of that notice ('Notice') by that other party, the parties
          to the Terms ('Parties') must: (i) Within 14 days of the Notice
          endeavour in good faith to resolve the Dispute expeditiously by
          negotiation or such other means upon which they may mutually agree;
          (ii) If for any reason whatsoever, 14 days after the date of the
          Notice, the Dispute has not been resolved, the Parties must either
          agree upon selection of a mediator or request that an appropriate
          mediator be appointed by the President of the Australian Mediation
          Association or his or her nominee; (iii) The Parties are equally
          liable for the fees and reasonable expenses of a mediator and the cost
          of the venue of the mediation and without limiting the foregoing
          undertake to pay any amounts requested by the mediator as a
          pre-condition to the mediation commencing. The Parties must each pay
          their own costs associated with the mediation; (iv) The mediation will
          be held in Sydney, Australia. (d) Confidential All communications
          concerning negotiations made by the Parties arising out of and in
          connection with this dispute resolution clause are confidential and to
          the extent possible, must be treated as "without prejudice"
          negotiations for the purpose of applicable laws of evidence. (e)
          Termination of Mediation: If 30 days have elapsed after the start of a
          mediation of the Dispute and the Dispute has not been resolved, either
          Party may ask the mediator to terminate the mediation and the mediator
          must do so.
          <br />
          15. Venue and Jurisdiction The Services offered by Global Medics
          Australia Pty. Ltd. is intended to be viewed by residents of
          Australia. In the event of any dispute arising out of or in relation
          to the Application, you agree that the exclusive venue for resolving
          any dispute shall be in the courts of New South Wales, Australia.
          <br />
          16. Governing Law The Terms are governed by the laws of New South
          Wales, Australia. Any dispute, controversy, proceeding or claim of
          whatever nature arising out of or in any way relating to the Terms and
          the rights created hereby shall be governed, interpreted and construed
          by, under and pursuant to the laws of New South Wales, Australia,
          without reference to conflict of law principles, notwithstanding
          mandatory rules. The validity of this governing law clause is not
          contested. The Terms shall be binding to the benefit of the parties
          hereto and their successors and assigns.
          <br />
          17. Independent Legal Advice Both parties confirm and declare that the
          provisions of the Terms are fair and reasonable and both parties
          having taken the opportunity to obtain independent legal advice and
          declare the Terms are not against public policy on the grounds of
          inequality or bargaining power or general grounds of restraint of
          trade.
          <br />
          18. Severance If any part of these Terms is found to be void or
          unenforceable by a Court of competent jurisdiction, that part shall be
          severed and the rest of the Terms shall remain in force.
        </form>
      </div>
    </div>
  );
};

export default TermsofService;
