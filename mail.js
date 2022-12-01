const firebaseConfig = {
  apiKey: "AIzaSyCVxlRuGB874V00W3nIjve_RovGFnrM1fY",
  authDomain: "teste-4d92e.firebaseapp.com",
  databaseURL: "https://teste-4d92e-default-rtdb.firebaseio.com",
  projectId: "teste-4d92e",
  storageBucket: "teste-4d92e.appspot.com",
  messagingSenderId: "688870466845",
  appId: "1:688870466845:web:d7fd85bc2b44de3a842df4"
};
  
  // inicializar o firebase
  firebase.initializeApp(firebaseConfig);
  
  // referenciar seu database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var dateid = getElementVal("dateid");
    var msgContent = getElementVal("msgContent");
    
  
    saveMessages(name, emailid, dateid, msgContent);
  
    //   alerta 
    document.querySelector(".alert").style.display = "block";
  
    //   remove o alerta do formulario 
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset o formulario 
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, dateid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      dateid: dateid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };