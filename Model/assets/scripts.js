
console.log('aaaa')   
   let x = document.getElementsByClassName("game-item");
   console.log(x)


// Donate Hub
var donate_option = document.querySelector(".donate");
document.querySelector(".donate_hub").onclick = function(){
   event.preventDefault();
}

donate_option.onclick = function(e){
   // console.log(this.childNodes.classList.contains("donate_hub"))
   this.classList.add("focus");
   document.querySelector(".donate_qr_code").classList.add("force_display_none");
   document.querySelector(".donate_hub").classList.add("openn");
   console.log("1")
}

var close_donate_hub = document.querySelector(".close_donate_hub");
close_donate_hub.onclick = function(e){
   donate_option.classList.remove("focus");
   document.querySelector(".donate_qr_code").classList.remove("force_display_none");
   document.querySelector(".donate_hub").classList.remove("openn");
   console.log(2)
   e.stopPropagation();
}

var donate_btn = document.querySelector(".donate_btn");
var user_coin = localStorage.getItem("user_coin");
user_coin = JSON.parse(user_coin);
var cur_coin = user_coin.cur_coin;
document.querySelector(".cur_coin").innerText = cur_coin;
var donated_coin = user_coin.donated_coin;
document.querySelector(".donated_coin").innerText = donated_coin;
donate_btn.onclick = function(){
    var amount = document.querySelector(".valuee").value;
    var err_msg = document.querySelector(".err_msg");
    if(!(parseInt(amount))){
        err_msg.innerText = "Coin khong hop le";
    }
    else if(parseInt(amount) > parseInt(cur_coin)) {
        err_msg.innerText = "You don't have enough coin";
    }
    else if(parseInt(amount) <= parseInt(cur_coin)){
        document.querySelector(".valuee").value = '';
        document.querySelector(".cur_coin").innerText = `${cur_coin - amount}`;
        document.querySelector(".donated_coin").innerText = `${parseInt(donated_coin) + parseInt(amount)}`;
        cur_coin = cur_coin - amount;
        donated_coin = parseInt(donated_coin) + parseInt(amount);
        user_coin = {
            cur_coin: cur_coin,
            donated_coin: donated_coin
        };
        err_msg.innerText = "";
        var json = JSON.stringify(user_coin);
        localStorage.setItem("user_coin", json);
        alert("Thanks for your contributions");
    }

}



// End donate_hub

function search_bar(e) {
   event.preventDefault();
   let input = document.getElementById('search_bar').value;
   input = input.toLowerCase();
   let x = document.getElementsByClassName("game-item");
   for(var i = 0; i < x.length; i++){
      if(!x[i].children[0].getElementsByTagName('span')[0].innerText.toLowerCase().includes(input)){
         x[i].style.display ='none';
      }
      else {
         x[i].style.display = 'block';
      }
   }
}



const playgame1=document.querySelector('.js-play1')
const playgame2=document.querySelector('.js-play2')
const playgame3=document.querySelector('.js-play3')
const playgame4=document.querySelector('.js-play4')
const playgame5=document.querySelector('.js-play5')
const playgame6=document.querySelector('.js-play6')
const playgame7=document.querySelector('.js-play7')
const playgame8=document.querySelector('.js-play8')
const playgame9=document.querySelector('.js-play9')



const modal1=document.querySelector('.one')
const modal2=document.querySelector('.two')
const modal3=document.querySelector('.three')
const modal4=document.querySelector('.four')
const modal5=document.querySelector('.five')
const modal6=document.querySelector('.six')
const modal7=document.querySelector('.seven')
const modal8=document.querySelector('.eight')
const modal9=document.querySelector('.nice')





const closeModal1=document.querySelector('.js-modal-close1')
const closeModal2=document.querySelector('.js-modal-close2')
const closeModal3=document.querySelector('.js-modal-close3')
const closeModal4=document.querySelector('.js-modal-close4')
const closeModal5=document.querySelector('.js-modal-close5')
const closeModal6=document.querySelector('.js-modal-close6')
const closeModal7=document.querySelector('.js-modal-close7')
const closeModal8=document.querySelector('.js-modal-close8')
const closeModal9=document.querySelector('.js-modal-close9')



function showGame1(){
      modal1.classList.add('open')
}
function showGame2(){
      modal2.classList.add('open')
}
function showGame3(){
      modal3.classList.add('open')
}
function showGame4(){
    modal4.classList.add('open')
}
function showGame5(){
    modal5.classList.add('open')
}
function showGame6(){
    modal6.classList.add('open')
}
function showGame7(){
    modal7.classList.add('open')
}
function showGame8(){
    modal8.classList.add('open')
}
function showGame9(){
    modal9.classList.add('open')
}




function closeGame1(){
   modal1.classList.remove('open')
}
function closeGame2(){
   modal2.classList.remove('open')
}
function closeGame3(){
   modal3.classList.remove('open')
}
function closeGame4(){
   modal4.classList.remove('open')
}
function closeGame5(){
   modal5.classList.remove('open')
}
function closeGame6(){
   modal6.classList.remove('open')
}
function closeGame7(){
   modal7.classList.remove('open')
}
function closeGame8(){
   modal8.classList.remove('open')
}
function closeGame9(){
   modal9.classList.remove('open')
}
 


playgame1.addEventListener('click',showGame1 )
playgame2.addEventListener('click',showGame2 )
playgame3.addEventListener('click',showGame3 )
playgame4.addEventListener('click',showGame4 )
playgame5.addEventListener('click',showGame5 )
playgame6.addEventListener('click',showGame6 )
playgame7.addEventListener('click',showGame7 )
playgame8.addEventListener('click',showGame8 )
playgame9.addEventListener('click',showGame9 )


closeModal1.addEventListener('click',closeGame1)
closeModal2.addEventListener('click',closeGame2)
closeModal3.addEventListener('click',closeGame3)
closeModal4.addEventListener('click',closeGame4)
closeModal5.addEventListener('click',closeGame5)
closeModal6.addEventListener('click',closeGame6)
closeModal7.addEventListener('click',closeGame7)
closeModal8.addEventListener('click',closeGame8)
closeModal9.addEventListener('click',closeGame9)

const bigOut=document.querySelector('.js-big')
const smallOut=document.querySelector('.js-small')
const modal_bigSmaill=document.querySelector('.js-sub')
function showBig(){
   modal_bigSmaill.classList.add('big')
}
function showSmall(){
   modal_bigSmaill.classList.remove('big')
}
bigOut.addEventListener('click',showSmall)
smallOut.addEventListener('click',showBig)



const bigOut2=document.querySelector('.js-big2')
const smallOut2=document.querySelector('.js-small2')
const modal_bigSmaill2=document.querySelector('.js-sub2')
function showBig2(){
   modal_bigSmaill2.classList.add('big')
}
function showSmall2(){
   modal_bigSmaill2.classList.remove('big')
}
bigOut2.addEventListener('click',showSmall2)
smallOut2.addEventListener('click',showBig2)


const bigOut3=document.querySelector('.js-big3')
const smallOut3=document.querySelector('.js-small3')
const modal_bigSmaill3=document.querySelector('.js-sub3')
function showBig3(){
   modal_bigSmaill3.classList.add('big')
}
function showSmall3(){
   modal_bigSmaill3.classList.remove('big')
}
bigOut3.addEventListener('click',showSmall3)
smallOut3.addEventListener('click',showBig3)


const bigOut4=document.querySelector('.js-big4')
const smallOut4=document.querySelector('.js-small4')
const modal_bigSmaill4=document.querySelector('.js-sub4')
function showBig4(){
   modal_bigSmaill4.classList.add('big')
}
function showSmall4(){
   modal_bigSmaill4.classList.remove('big')
}
bigOut4.addEventListener('click',showSmall4)
smallOut4.addEventListener('click',showBig4)


const bigOut5=document.querySelector('.js-big5')
const smallOut5=document.querySelector('.js-small5')
const modal_bigSmaill5=document.querySelector('.js-sub5')
function showBig5(){
   modal_bigSmaill5.classList.add('big')
}
function showSmall5(){
   modal_bigSmaill5.classList.remove('big')
}
bigOut5.addEventListener('click',showSmall5)
smallOut5.addEventListener('click',showBig5)


const bigOut6=document.querySelector('.js-big6')
const smallOut6=document.querySelector('.js-small6')
const modal_bigSmaill6=document.querySelector('.js-sub6')
function showBig6(){
   modal_bigSmaill6.classList.add('big')
}
function showSmall6(){
   modal_bigSmaill6.classList.remove('big')
}
bigOut6.addEventListener('click',showSmall6)
smallOut6.addEventListener('click',showBig6)

const bigOut7=document.querySelector('.js-big7')
const smallOut7=document.querySelector('.js-small7')
const modal_bigSmaill7=document.querySelector('.js-sub7')
function showBig7(){
   modal_bigSmaill7.classList.add('big')
}
function showSmall7(){
   modal_bigSmaill7.classList.remove('big')
}
bigOut7.addEventListener('click',showSmall7)
smallOut7.addEventListener('click',showBig7)

const bigOut8=document.querySelector('.js-big8')
const smallOut8=document.querySelector('.js-small8')
const modal_bigSmaill8=document.querySelector('.js-sub8')
function showBig8(){
   modal_bigSmaill8.classList.add('big')
}
function showSmall8(){
   modal_bigSmaill8.classList.remove('big')
}
bigOut8.addEventListener('click',showSmall8)
smallOut8.addEventListener('click',showBig8)

const bigOut9=document.querySelector('.js-big9')
const smallOut9=document.querySelector('.js-small9')
const modal_bigSmaill9=document.querySelector('.js-sub9')
function showBig9(){
   modal_bigSmaill9.classList.add('big')
}
function showSmall9(){
   modal_bigSmaill9.classList.remove('big')
}
bigOut9.addEventListener('click',showSmall9)
smallOut9.addEventListener('click',showBig9)

// dang nhap tai khona
function checkLogin(){
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   if (username === "123" && password === "123") {
       document.getElementById("login-status").innerText = "Login Successfully ╰(*°▽°*)╯";
       window.location.href = "http://127.0.0.1:5501/View/LogIn.html";
       alert('Login Successfully ╰(*°▽°*)╯')
       // Điều hướng hoặc thực hiện hành động sau khi đăng nhập ở đây.
   } else {
       document.getElementById("login-status").innerText = "Invalid information !";
   }
}

const login=document.querySelector('.js-login')
const close_login=document.querySelector('.js-closee')
const modal_login=document.querySelector('.js-moo')
function them(){
   modal_login.classList.add('oppen')
}
function showSmall9(){
   modal_login.classList.remove('oppen')
   document.querySelector('.model-recovery').remove('oppen')
}
login.addEventListener('click',them)
close_login.addEventListener('click',showSmall9)



function logout() {
   var okey=confirm('Do you actually want to log out ?')
   if(okey){
      window.location.href = "http://127.0.0.1:5501/View/index.html";
        }
   }
   // Điều hướng đến trang đăng xuất bằng đường link

const forgot_pass = document.querySelector('.forgot')
console.log(forgot_pass)
forgot_pass.onclick = function(){
   console.log(12213)
   modal_login.classList.remove('oppen')
   document.querySelector('.model-recovery').add('oppen')
}



   