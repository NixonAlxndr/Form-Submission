const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".form-input");
const wrongEmailTxt = document.querySelector(".wrong-email");
const thxTxt = document.querySelector(".thanks-text");
const emailName = document.querySelector(".email-name");
const pBox = document.querySelector(".primary-box");
const thxBox = document.querySelector(".thanks-box");

function checkEmail(){
	if(input.value !== "halo@gmail.com" && input.value.length !== 0){
		input.style.borderColor = "#ed8c8c"
		input.style.backgroundColor="#ffb8b8";
		input.style.color ="#c45c5c";
		wrongEmailTxt.classList.remove('hidden');
	}else if(input.value === "halo@gmail.com"){
		emailName.innerHTML = "";
		pBox.classList.add('hidden');
		thxBox.classList.remove('hidden');
	}
}

function resetInput(){
	input.style.borderColor = "#b4b4b4"
	input.style.backgroundColor="white";
	input.style.color ="black";
	wrongEmailTxt.classList.add('hidden');
}

function goBack(){
	pBox.classList.remove('hidden');
	thxBox.classList.add('hidden');
	input.value = '';
	resetInput();
}

for(let i=0; i<btn.length; i++){
	btn[i].addEventListener("mouseover", () =>{
		btn[i].style.background="linear-gradient(to bottom right, var(--clr-graident2), var(--clr-gradient1))";
		btn[i].style.boxShadow = "0px 5px 30px 1px hsl(4, 100%, 67%)"
		btn[i].style.cursor ="pointer";
	})
}

for(let i=0; i<btn.length; i++){
	btn[i].addEventListener("mouseout", () =>{
		btn[i].style.background="var(--clr-btn)";
		btn[i].style.boxShadow="none";
	})
}

btn[0].addEventListener("click", checkEmail);
btn[1].addEventListener("click", goBack);

input.addEventListener("keydown", (event)=>{
	if(event.key === 'Backspace'){
		resetInput();
	}
})

input.addEventListener("keydown", (event)=>{
	if(event.key === 'Enter'){
		checkEmail();
	}
})
