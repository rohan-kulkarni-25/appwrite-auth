import { Client, Account, ID } from "appwrite";

const API_EndPoints = "https://cloud.appwrite.io/v1";
const PROJECT_ID = "647eeff9509694bd6dbd";

const client = new Client().setEndpoint(API_EndPoints).setProject(PROJECT_ID);

const createAccountWithEmailAndPassword = () => {
  const account = new Account(client);

  const promise = account.create(
    ID.unique(),
    "rohankulkarni@gmail.com",
    "rohan@25"
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

const createAccountWithOAuth = () => {
  const account = new Account(client);
  account.createOAuth2Session("google");
};

const createAccountWithPhone = async () => {
  const account = new Account(client);

  const promise = await account.createPhoneSession(
    ID.unique(),
    "+918623008631"
  );
  return promise;
};

const updatePhoneSecret = async (user_id, secret) => {
  const account = new Account(client);
  const promise = await account.updatePhoneSession(user_id, secret);
  return promise;
};

export {
  createAccountWithEmailAndPassword,
  createAccountWithOAuth,
  createAccountWithPhone,
  updatePhoneSecret,
};
