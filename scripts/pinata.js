import { PinataSDK } from "pinata-web3";

// Configuration de Pinata avec ton JWT et Gateway
const pinata = new PinataSDK({
  pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYTRhNmJlNS05MTliLTQ0MDktYTQ3Yi03ZDI0MGFkYzQxOTYiLCJlbWFpbCI6ImxvdWlzLnJpY2hhcmQyMkBvcmFuZ2UuZnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYjFmZjlkZDIxMmE1NTUwNmM2ZjciLCJzY29wZWRLZXlTZWNyZXQiOiJiZGNkMmZhZjJkYzE3MTRiNGQ3YTFhYjhhNDMxYzQ3YjRhOWJhMzZlMWIzZGJhMWI1Y2EwZDA4NzViNGIzNDlhIiwiZXhwIjoxNzY5NTk2NjAzfQ.F53up_k_Ltyefl8prRFP6WePwp65e6gr-v7cZ3mzZhg", 
  pinataGateway: "cyan-famous-lungfish-782.mypinata.cloud",
});

// Fonction pour tester la connexion
export const testPinata = async () => {
  try {
    const testResult = await pinata.testAuthentication();
    console.log("Authentification réussie avec Pinata :", testResult);
  } catch (error) {
    console.error("Erreur d'authentification avec Pinata :", error);
  }
};

// Fonction pour uploader un fichier sur IPFS
export const uploadFile = async (file) => {
  try {
    const result = await pinata.addFile(file);
    console.log("Fichier uploadé avec succès :", result);
    return result;
  } catch (error) {
    console.error("Erreur lors de l'upload :", error);
    throw error;
  }
};
