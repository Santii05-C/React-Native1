import { Account, Client, ID, Avatars } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.sa.aora",
  projectId: "671cfe16002c850cedcf",
  databaseId: "671d0547002ec3cf9705",
  userCollectionId: "671d064c0033d098157c",
  videoCollectionId: "671d06c900247f56a33a",
  storageId: "671d5b2f00065fafafd0",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
