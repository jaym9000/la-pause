// Language translations
var french = {
  title: "NOUS JOINDRE",
  available: "Heures d'ouverture:",
  times: "Du lundi à dimanche de 9 h à 12 h et de 13 h à 17 h",
  email: "Par Courriel:",
  phone: "Par téléphone:",
};
var english = {
  title: "CONTACT US",
  available: "Availability:",
  times: "Monday to Sunday From 9 AM to 12 AM and from  1 PM to 5 PM",
  email: "Per e-mail:",
  phone: "By phone:",
};

var elements = document.getElementsByTagName("a");

for (var i = 0; i < elements.length; i++) {
  // Verify if the text is French or English
  if (elements[i].className == "french") {
    // Onclick apply French
    elements[i].onclick = function () {
      // FR TRANSLATION
      head.textContent = french.title;
      opens.textContent = french.available;
      time.textContent = french.times;
      mail.textContent = french.email;
      number.textContent = french.phone;
    };
  } else if (elements[i].className == "english") {
    // Onclick apply English
    elements[i].onclick = function () {
      // ENG TRANSLATION
      head.textContent = english.title;
      opens.textContent = english.available;
      time.textContent = english.times;
      mail.textContent = english.email;
      number.textContent = english.phone;
    };
  }
}
