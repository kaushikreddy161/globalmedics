import { useContext, useState } from "react";
import PageContainer from "../components/PageContainer.component";
import { UserContext } from "../contexts/user.context";
import { gql, request } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "../realm/constants";
import ExpenseForm from "../components/ExpenseForm.component";
import { useNavigate } from "react-router-dom";
import { App, Credentials, BSON } from "realm-web";
import { APP_ID } from "../realm/constants";
// Creating a Realm App Instance
const app = new App(APP_ID);

const CreateExpense = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Some prefilled form state
  const [form, setForm] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    ethincity: "",
    occupation: "",
    height: "",
    weight: "",
  });

  // GraphQL query to create an expense
  // const createExpenseQuery = gql`
  // mutation AddExpense($data: ExpenseInsertInput!) {
  //   insertOneExpense(data: $data) {
  //     _id
  //   }
  // }
  // `;

  // All the data that needs to be sent to the GraphQL endpoint
  // to create an expense will be passed through queryVariables.
  // const queryVariables = {
  //   data: {
  //     title: form.title,
  //     amount: parseInt(form.amount),
  //     mode: form.mode,
  //     category: form.category,
  //     author: user.id,
  //     createdAt: form.createdAt
  //   }
  // };

  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request

  const onSubmit = async () => {
    // event.preventDefault();
    //   const { amount, category, mode, title } = form;
    // if (amount.length === 0 || category.length === 0 || mode.length === 0 || title.length === 0) {
    //   return;
    // }
    // try {
    //   await request(GRAPHQL_ENDPOINT, createExpenseQuery, queryVariables, headers);

    //   // Navigate to the Home page after creating an expense
    //   navigate(`/`);
    // } catch (error) {
    //   alert(error)
    // }
    //  console.log('submit', user);
    try {
      const credentials = Credentials.emailPassword(
        "srinivas21072022@testmail.com",
        "test12345"
      );
      const authedUser = await app.logIn(credentials);

      //  console.log('auth:',user.id);

      let dt = new Date();
      let id = new BSON.ObjectID();
      let pid = BSON.ObjectID(user.id).toString();

      const createx = authedUser.functions.createPatientDetailData(
        form.patientName,
        form.phoneNumber,
        form.address,
        form.age,
        form.bloodGroup,
        form.email,
        dt,
        "GlobalMedics2021",
        form.height,
        form.weight,
        form.occupation,
        pid
      );
      console.log("create:", createx);
      createx.then((resp) => {
        console.log("resp:", resp);
      });

      alert(createx);
      navigate(`/`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <PageContainer>
        <ExpenseForm
          onSubmit={onSubmit}
          form={form}
          setForm={setForm}
          title="Create Patient"
        />
      </PageContainer>
    </div>
  );
};

export default CreateExpense;
