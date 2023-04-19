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
  document.getElementsByTagName("footer")[0].style.display="block";

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
  document.getElementsByTagName("footer")[0].style.display="block";

  // document.getElementById("c2").style.display = 'block';
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

function quiz() {
  document.getElementsByTagName("footer")[0].style.display="block";

  document.getElementById("title_").innerText = 'Quiz';
  document.getElementById("c2").style.display = 'block';
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
  document.getElementsByTagName("footer")[0].style.display="block";
  document.getElementById("title_").innerText = 'Help';
  document.getElementById("c2").style.display = 'block';
  document.getElementById("c1").innerText = "Coming soon!";
  document.getElementById("c2").innerText = "Coming soon!";
  document.getElementById("d1").innerText = "";
  document.getElementById("d2").innerText = "";
}


//so that animation is visible --> not sure
document.addEventListener('reload',(event)=>{
  event.preventDefault();
})

//Global Variables for Animation
var animate;
var titrant_used=0;
var glucose=0.5;
var drop_speed=1;
var isDropFalling=0;
var Normality=0.01
var volume=10;
var isMethyleneAdded=0;
var currstage=1;
var lag=3;
//simulator template
function simulator() {
  document.getElementsByTagName("footer")[0].style.display="none";
  document.getElementById("title_").innerText = 'Simulator';
  document.getElementById("c2").style.display = 'none';
  document.getElementById("c1").innerText = 'Simulator';
  document.getElementById("d1").innerHTML=`
  <div class="modal" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Methylene Blue</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="Close()" style="background-color:"#6C757D">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>
    <div id="simulator" style="display:flex">
      <div id="canvas-container">
         <canvas id="canvas"></canvas>
      </div>
      <div id="Control_pannel" style="justify-between"> 
          <!-- titran dropdown -->
          <div class="dropdown padde-content">
              <button id="titrant" class="btn btn-secondary dropdown-toggle padde-content" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Water Melon
              </button>
          </div>
          <!-- speed of drops -->
          <label for="customRange1" class="form-label padde-content">Speed of drops : </label>
          <div id="val1" class="inline_div padde-content">1</div>
          <input type="range" class="form-range padde-content" min="1" max="3" value="1" id="customRange1" onchange="change_range(event)">
          <div class="padde-content">Titrate : Feling's solution</div>
          <!-- Normality -->
          <label for="customRange2" class="form-label padde-content">Normality : </label>
          <div id="val2" class="inline_div padde-content">0.01 N</div>
          <input type="range" class="form-range padde-content" min="0.01" max="0.1" step="0.02" value="0" id="customRange2" onchange="change_range(event)">
          <!-- Volume -->
          <label for="customRange3" class="form-label padde-content">Volume : </label>
          <div id="val3" class="inline_div padde-content">10 ml</div>
          <input type="range" class="form-range padde-content" min="10" max="20" value="0" id="customRange3" onchange="change_range(event)">
          <button type="button" class="btn btn-secondary" id="Methylen" onclick="AddMethylene()">Methylen Blue</button>
          <button type="button" class="btn btn-secondary" id="Start" onclick="turnon()">Start</button>
          <button type="button" class="btn btn-secondary" id="Stop" onclick="StopDrop()">Stop</button>
          <div class="Result">
              <div class="title">Result</div>
              <div style="padding: 5px 5px">
                 <div class="inline_div">Titrant Used :</div>
                 <div class="inline_div">0ml</div>
              </div>
          </div>
      </div>
  </div>
    </div>
  `
  document.getElementById("Methylen").style.disabled=true;
  document.getElementsByClassName("modal")[0].style.display='none';
  var canvas = document.getElementById('canvas');
  var canvasContainer = document.getElementById('canvas-container');
  canvas.height = canvasContainer.clientHeight;
  canvas.width = canvasContainer.clientWidth;
  var ctx = canvas.getContext('2d');
  DrawSetup(ctx);
}

//setup details
var Setup_img1 = new Image();
Setup_img1.src = 'initial_img.png';
var Setup_img2 = new Image();
Setup_img2.src = 'img_after_methylen.png';
var Setup_img3 = new Image();
Setup_img3.src = 'Final_image.png';

//Burette Details
class Burette{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=10;
    this.height=100;
  }
  draw(ctx){
    ctx.fillStyle="transparent";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}

var burette=new Burette(300,200);

//For Drawing the Setup
function DrawSetup(ctx){
  console.log("Stage is"+ currstage.toString());
    var x=Setup_img1;
    if(currstage===1)x=Setup_img1;
    else if(currstage===2)x=Setup_img2;
    else x=Setup_img3;
    ctx.drawImage(x, 40, 30, 550, 550);
}


//Drop Detials
class Drop{
  constructor(x,y,img,start,end){
     this.x=x;
     this.y=y;
     this.img=img;
     this.v=1;
     this.start=start;
     this.end=end;
  }
  UpdatePos(){
      this.y+=this.v;
      if(this.y>=this.end){
        change_result();
        this.y=this.start;
      }
  }
  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y,10,10);
  }
}
var Drop_img = new Image();
Drop_img.src = 'drop.png';
var drop1=new Drop(297,330,Drop_img,330,430);
var drop2=new Drop(297,330,Drop_img,330,430);
var drop3=new Drop(297,330,Drop_img,330,430);

//For Drop animation

//For speed=1
function StartDrop1(){
  console.log("Avi to Gau");
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the Setup again
  DrawSetup(ctx);
  // Now Draw the Drop and update its coordinates
  drop1.draw(ctx);
  drop1.UpdatePos();
  if(isDropFalling) animate=requestAnimationFrame(StartDrop3);
  else StopDrop();
}

//for speed=2
function StartDrop2(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the Setup again
  DrawSetup(ctx);
  // Now Draw the Drop and update its coordinates
  drop1.draw(ctx);
  drop1.UpdatePos();
  drop2.draw(ctx);
  drop2.UpdatePos();
  
  if(isDropFalling) animate=requestAnimationFrame(StartDrop2);
  else StopDrop();
}

//for speed=3
function StartDrop3(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the Setup again
  DrawSetup(ctx);
  // Now Draw the Drop and update its coordinates
  drop1.draw(ctx);
  drop1.UpdatePos();
  drop2.draw(ctx);
  drop2.UpdatePos();
  drop3.draw(ctx);
  drop3.UpdatePos();
  if(isDropFalling) animate=requestAnimationFrame(StartDrop3);
  else StopDrop();
}

//Turn on the animation;
function turnon(){
  isDropFalling=1;
  // document.getElementById("customRange1").disabled=true;
  document.getElementById("customRange3").disabled=true;
  document.getElementById("customRange2").disabled=true;
  StartAction();
}

//start action
function StartAction(){
  if(!isDropFalling)return;
  console.log("Drop speed "+ drop_speed.toString());
  if(drop_speed==1){
    console.log("hi");
    drop1.start=330;
    drop1.y=330;
    drop1.end=430;
    drop1.v=1;
    StartDrop1();
  }
  else if(drop_speed==2){
    drop2.y=380;
    drop1.end=380;
    drop2.start=380;
    drop2.end=430;
    drop1.v=2;
    drop2.v=2;
    StartDrop2();
  }
  else {
    drop1.v=3;
    drop2.v=3;
    drop3.v=3;
    drop1.end=330+33;
    drop2.y=330+33;
    drop2.start=330+33;
    drop2.end=330+66;
    drop3.y=330+66;
    drop3.start=330+66;
    drop3.end=430;
    StartDrop3();
  }
}

//For updating the Speed
function UpdateSpeed(event){
    drop_speed=event.target.value;
    console.log(drop_speed);
    cancelAnimationFrame(animate);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawSetup(ctx);
    StartAction();
}

//Stop Stop animation
function StopDrop(){
  cancelAnimationFrame(animate);
  isDropFalling=0;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the Setup again
  DrawSetup(ctx);
}

//Simulator extra js for control pannel
function change_titrant(event){
  document.getElementById("titrant").innerText=event.target.innerText;
}

function change_range(event){
  if(event.target.id==="customRange1")UpdateSpeed(event);
  else if(event.target.id==="customRang2"){
    Normality=event.target.value;
  }
  else volume=event.target.value;
  var x=event.target.id.length-1;
  x=event.target.id[x];
  document.getElementById('val'+x).innerText=event.target.value+(event.target.id==="customRange1"?"":event.target.id==="customRange2"?" N":" ml");
}


function change_result(){
  var x=document.querySelectorAll(".Result div")[1];
  titrant_used+=0.1;
  titrant_used=titrant_used*(10000);
  titrant_used=Math.round(titrant_used);
  titrant_used/=10000;
  var target=(Normality*volume*10)/glucose;
  console.log(target);
  console.log(titrant_used);
  x.innerText=titrant_used.toString()+"ml";
  if(titrant_used>target){  
    StopDrop();
    if(!isMethyleneAdded){
      var x=document.getElementsByClassName("modal")[0];
      x.style.display="block";
      x.style.position="absolute";
      x.style.top="300px";
      document.getElementById("simulator").style.opacity="0.2";
      x.style.opacity="1";
    }
    else if(lag--){
      console.log(isMethyleneAdded);
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currstage=3;
      DrawSetup(ctx);
    }
  }
}

//close function of dialog Box
function Close(){
  document.getElementById("simulator").style.opacity="1";
  var x=document.getElementsByClassName("modal")[0];
  x.style.display="none";
  document.getElementById("Methylen").style.disabled=false;
  currstage=2;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  DrawSetup(ctx);
}


//After adding methylene
function AddMethylene(){
  currstage=1;
  isMethyleneAdded=1;
}






