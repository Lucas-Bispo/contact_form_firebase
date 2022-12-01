const firebaseConfig = {
  apiKey: "AIzaSyA3yN6G4cHcEq2cKNBajY8Gni9s4UJxf_4",
  authDomain: "contactform-91036.firebaseapp.com",
  databaseURL: "https://contactform-91036-default-rtdb.firebaseio.com",
  projectId: "contactform-91036",
  storageBucket: "contactform-91036.appspot.com",
  messagingSenderId: "48569688112",
  appId: "1:48569688112:web:dc2728f76e154329518df5"
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