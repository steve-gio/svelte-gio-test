import { db } from "../config/firebaseConfig";

/**
 * @param name {String}
 * @param email {String}
 * @param imageLink {String}
 * @description registering new user into the database
 */
const registerUser = (user) => {
  db.collection("users")
    .doc()
    .set({
      ...user,
      createdAt: Date.now(),
    });
};

/**

 * @description Retrieves last 10 users added into the database
 */
const getLastRegisteredUsers = async () => {
  let docs = await db
    .collection("users")
    .orderBy("createdAt", "desc")
    .limit(10)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    });
  return docs;
};

export { registerUser, getLastRegisteredUsers };
