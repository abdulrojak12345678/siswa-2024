import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDFYmmVvk-jLZIeAdYKiTwVw2jqd4VINFA",
  authDomain: "insan-cemerlang.firebaseapp.com",
  projectId: "insan-cemerlang",
  storageBucket: "insan-cemerlang.appspot.com",
  messagingSenderId: "579109661574",
  appId: "1:579109661574:web:4a7cd4060f70eded945a07"
};

const app = initializeApp(firebaseConfig);

export async function ambilDaftarsiswa() {
  const siswaRef = collection(db,"siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querysnapshot = await getDocs(q);
  
  let retval = [];
  querysnapshot.forEach((doc) => {
    retval.push({  id: doc.id, nama: doc.data().nama});
})

return retval;
}