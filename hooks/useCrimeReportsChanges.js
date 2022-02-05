import { useEffect,useState } from "react";
import firestore from '@react-native-firebase/firestore';


const useCrimeReportChanges = () => {

  const [reportedCrime,setReportedCrime ] =useState({})
 
const collection =firestore().collection('delitos')


  useEffect(() => {
    const unsubscribe = collection.onSnapshot(
      (querySnapshot) => {
        if (querySnapshot.docChanges().length) {
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              // Handle new added comment

                const newReport = change.doc.data();

               
             
              setReportedCrime(newReport)


            }
            if (change.type === "modified") {
              // Handle modified comment
            }

            if (change.type === "removed") {
              console.log("Item has been deleted")
            }
          });
        }
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


  return reportedCrime
};

export default useCrimeReportChanges 
