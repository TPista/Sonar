import firestore from "@react-native-firebase/firestore";

const deleteReport = (reportId) => {
  firestore()
    .collection("delitos")
    .doc(reportId)
    .delete()
    .then(() => {
      console.log("Report with id", reportId, "has been deleted");
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteReportAsync = async (reportId) => {
  try {
    await firestore().collection("delitos").doc(reportId).delete();
    console.log("Report with id", reportId, "has been deleted");
  } catch (error) {
    console.error(error);
  }
};




export default deleteReportAsync