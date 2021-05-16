import { db } from "../config/firebaseConfig";

/**
 * @param name {String}
 * @param email {String}
 * @param imageLink {String}
 * @description registering new user into the database
 */
const registerUser = (user) => {
  db.collection("users").doc().set(user);
};

export { registerUser };
