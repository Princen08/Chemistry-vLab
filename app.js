// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFWxykFWajckTCOYQU_mKG8ZCFj9XmQ7c",
  authDomain: "c-lab-4df19.firebaseapp.com",
  projectId: "c-lab-4df19",
  storageBucket: "c-lab-4df19.appspot.com",
  messagingSenderId: "304614330166",
  appId: "1:304614330166:web:cef97b4436ce9445cc6d97",
  measurementId: "G-DCV6CWC2TH",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const reg = document.querySelector("#sub-reg");
const log = document.querySelector("#sub-login");

// setTimeout(function() {
//   document.querySelector('.alert').classList.add('opacity-0');
// }, 2000); // 5 seconds


function fun() {
  document.getElementById("alert").style.opacity = 0;
}


if (reg != null) {
  reg.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("confirm-password").value;
    const myCollection = db.collection("users");
    if (password != repassword) {
      const errorMessage = "Password not matched!";
      alert(errorMessage);
    } else {
      myCollection
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
           document.getElementById("alert").style.opacity = 100;
           document.getElementById("alert").style.borderColor = "red";
                document.getElementById("alert").style.color = "red";
           document.getElementById("text").innerText = "Sorry, that user already exists.";
          } else {
            myCollection
              .add({
                email: email,
                password: password,
                name: name,
              })
              .then((docRef) => {
                document.getElementById("alert").style.opacity = 100;
                document.getElementById("alert").style.borderColor = "green";
                document.getElementById("alert").style.color = "green";
                document.getElementById("text").innerText = "User created successfully!";
              })
              .catch((error) => {
                console.log("Error adding user: ", error);
              });
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  });
}

if (log != null) {
  log.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const myCollection = db.collection("users");
    myCollection
      .where("email", "==", email)
      .where("password", "==", password)
      .onSnapshot((querySnapshot) => {
        if (!querySnapshot.empty) {
          uname = [];
          querySnapshot.forEach((element) => {
            localStorage.setItem("uname", element.data().name);
          });

          window.location.replace("dashboard.html");
        } else {
          document.getElementById("alert").style.opacity = 100;
        }
      }), (error) => {
        console.log("Error getting documents: ", error);
      };
  });
}

function myFun(params) {
  document.getElementById("user").innerText = " " + localStorage.getItem("uname");
  // init();
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function theory() {
  document.getElementById("title_").innerText = 'Theory';
  document.getElementById("c2").style.display = 'block';
  document.getElementById("c1").innerText = "Objective";
  document.getElementById("c2").innerText = "Introduction";
  document.getElementById("d1").innerHTML = `<p style="text-align: justify;">To estimate the amount of glucose in the whole of the given solution.
  </p>`
  document.getElementById("d2").innerHTML = `<p style="text-align: justify;"><b>Glucose</b>:
  <br>
  Glucose is a very important monosaccharide in biology. It is one of the major products of
  photosynthesis. The living cell uses it as a source of energy and metabolic intermediate. The name
  "Gluc" comes from the Greek word "glykys", which means "sweet", plus the suffix "-ose" which denotes
  a sugar.

  Two stereoisomers of the aldohexose sugars are known as glucose, only one of which (D-glucose) is
  biologically active. This form (D-glucose) is often referred to as dextrose monohydrate, or,
  especially in the food industry, simply dextrose (from dextrorotatory glucose).
</p>
<br>
<p style="text-align: justify;"><b>Structure of Glucose:</b><br>
  D or L Designation:
  For the structure of carbohydrates the bonding pattern of the hydrogen and hydroxyl groups around
  each carbon atom is very important. An asymmetric carbon atom is that a carbon atom which is bonded
  to four different groups. Glucose, with six carbon atoms, has four asymmetric carbon atoms. The
  arrangement of the OH's and H's on these atoms is very important. Structural formulas for sugar
  molecules are often written in the vertical arrangement with the aldehyde or the ketone group at or
  near the top. When written in this particular way, the position of the OH on the last asymmetric
  carbon atom will tell us whether we are dealing with a "D" sugar or an "L" sugar. "D" stands for
  dextro and "L" stands for levo. If the OH is on the right, it is a "D" sugar, in this case
  D-glucose. If the OH is on the left, then it has been "L" sugars. When you see D's and L's in front
  of the names of carbohydrates, this is the reason for it.</p>

<br>
<p style="text-align: justify;">
  <b>Fischer Projection Formula:</b><br>

  Hermann Emil Fischer in 1891 devised the Fischer projection. It is a two-dimensional representation
  of a three-dimensional organic molecule by projection. Fischer projections were originally proposed
  for the depiction of carbohydrates and used by chemists, particularly in organic chemistry and
  biochemistry. The use of Fischer projections in non-carbohydrates is discouraged; as such drawings
  are ambiguous when confused with other types of drawing.



  In Fischer projection all bonds are depicted as horizontal or vertical lines and these entire
  horizontal bonds project toward the viewer, while vertical bonds project away from the viewer.
  Therefore, a Fischer projection cannot be rotated by 90° or 270° in the plane of the page or the
  screen, as the orientation of bonds relative to one another can change, converting a molecule to its
  enantiomer. The carbon chain is depicted vertically, with carbon atoms represented by the centre of
  crossing lines. The orientation of the carbon chain is so that the C1 carbon is at the top. In an
  aldose, the carbon of the aldehyde group is C1; and in a ketose the carbon of the ketone group has
  the lowest possible number (usually C2). According to IUPAC rules all hydrogen atoms should
  preferably be drawn explicitly.

  <img src="fisher.jpg" style="padding-left: 6%;">
</p>
<br>
<p><b>Theory of Estimation of Glucose:</b></p>
<p style="text-align: justify;">A freshly prepared Fehling’s solution is first standardized by titration
  against a standard solution of pure glucose A.R. The standardized Fehling’s solution is then used to
  determine the amount of glucose in an unknown sample or solution by direct titration.

  The Fehling’s solution being a solution of cupric ions is blue in colour and at the end point
  changes to red colour precipitate of cuprous oxide. As the supernatant liquid is blue and the
  precipitate is red in colour, there may be some difficulty in determination of end point accurately.
  Hence sometimes a methylene-blue indicator is employed for accurate determination of the end point.

  <img src="rwaction.jpg" style="padding-left: 3%; scale: 0.8;">
</p>`
}

function procedure() {

  document.getElementById("title_").innerText = 'Procedure';
  document.getElementById("c2").style.display = 'block';
  document.getElementById("c1").innerText = "Standardisation of Fehling’s Solution";
  document.getElementById("c2").innerText = "Simulator Procedure";
  document.getElementById("d1").innerHTML = `<p style="text-align: justify;">Prepare a solution (known standard solution) of glucose AR by weighing accurately 1.25gm and dissolving it in 250 mL standard flask in water. Make up the volume to the mark. <br>
  <br>
  Pipette out 20 mL each of Fehling’s A & B in a dry conical flask and shake thoroughly. Pipette out 20 mL of this freshly mixed Fehling’s solution in a clean conical flask and dilute it with 20 mL water. Heat the solution up to 70° over wire gauze. Take the standard solution of glucose prepared in a burette and run this solution slowly into the boiling Fehling’s solution until the blue colour has completely disappeared. Take care to maintain this temperature for every addition of glucose solution. Repeat the above titration by running the glucose solution steadily into the boiling Fehling’s solution until the end point is approached and then cautiously add glucose solution drop-by-drop till the end point is reached.
  <br> <br>
  
  Alternatively to detect the end point more accurately, 5-6 drops of methylene- blue indicator may be added to the Fehling’s solution and then glucose solution added drop by drop. However, if methylene-blue is used as indicator the Fehling’s solution should not boil for more than 2-3 minutes at a stretch. The end-point here also is marked by the disappearance of the blue colour.
  </p>`
  document.getElementById("d2").innerHTML = `<p style="text-align: justify;"> 
  <ol type='I'>
  <li>1. Choose the titrant.</li>
  <li>2. Choose the titrate.</li>
  <li>3. Select the normality of the titrate.</li>
  <li>4. Select the volume of the titrate.</li>
  <li>5. Start titration.</li>
  <li>6. When the blue colour just fades Select the indicator.</li>
  <li>7. Continue the titration.</li>
  <li>8. End point is noted at the colour change of the solution.</li>
  <li>9. From the final reading the normality of titrant can be calculated by the equation: N1 X V1 = N2 X V2</li>
  <li>10. After finding the normality, the amount of substance in the whole of the given solution can be calculated by the equation: (Atomic weight X Normality X Volume) / 1000 <br>
  Atomic weight of Glucose = 180.1559 g/mol </li>
  </ol>
  </p>
  `
}

function simulator() {
  document.getElementById("title_").innerText = 'Simulator';
}
function quiz() {
  document.getElementById("title_").innerText = 'Quiz';
  document.getElementById("c1").innerText = "Question 1";
  document.getElementById("c2").innerText = "Question 2";
  document.getElementById("d1").innerHTML = `<p style="text-align: justify;">
  <br>
  Which of the following fluids can be used for glucose estimation? <br>
   <ol>
   <li>A. Blood</li>
  <li>B. Urine</li>
  <li>C. Saliva</li>
  <li>D. All of the above</li>
   </ol>
   <br>
   
  </p>`
  document.getElementById("d2").innerHTML = `<p style="text-align: justify;">
  <br>
  What is the primary function of glucose in the body? <br>
   <ol>
   <li>A. To provide energy to cells</li>
  <li>B. To form the structure of cell membranes</li>
  <li>C. To aid in digestion</li>
  <li>D. To regulate body temperature</li>
   </ol>
   <br>
  </p>`
}
function help() {
  document.getElementById("title_").innerText = 'Help';
  document.getElementById("c1").innerText = "Coming soon!";
  document.getElementById("c2").innerText = "Coming soon!";
  document.getElementById("d1").innerText = "";
  document.getElementById("d2").innerText = "";
}
