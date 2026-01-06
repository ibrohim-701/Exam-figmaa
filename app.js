// Imtihondan oldingi so'ngi dars nima deysiz man imtihondan o'tamanmi??????
// async function fetchUserData() {
//     try {
//         const response = await fetch('https://dummyjson.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error)
//     }
// }
// fetchUserData();

// ism();

// function ism() {
//     console.log("Madina!");
// }

// ism();
// var ism = function(){
//     console.log("Ali!");
// }


const id = document.getElementById("ID");
const namee = document.getElementById("name");
const score = document.getElementById("score");
const savebtn = document.getElementById("savebtn");

let ball = 0;
savebtn.addEventListener("click", function() {
    const idsi = id.value.trim();
    const nameesi = namee.value.trim();
    const scoresi = perseFloat(score.value.trim());
    if (idsi === "") {
        alert("talaba ID kiriting");
        return;
    } else if (nameesi===""){
        alert("talaba ismini kiriting");
        return;
    } else if (scoresi === ""){
        alert("talaba bahosini kiriting");
        return;
    }
    function katta(){
        if (scoresi>ball) {
            const yuqori=document.getElementById("yuqori")
            yuqori.textContent=`Yuqori natija: Ismi${nameesi} , ${scoresi} baho`
        };
        ball = scoresi
    }
    katta();
    const item=document.createElement("div");
    item.className="malumot";
    item.textContent=`ID: ${idsi} , Ismi: ${nameesi} , Baho: ${scoresi}`;

    const deletebtn = document.createElement("button");
    deletebtn.className="deletebtn"
    deletebtn.textContent="DELETE"
    deletebtn.addEventListener("click", function() {
        item.remove();
    });
    item.appendChild(deletebtn);
    tartib.appendChild(item);

    id.value=""
    namee.value="";
    score.value="";
});