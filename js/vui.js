var myObject = new Vue({
	el: '#app',
	data: {numattrs: 0, res: "", attrs: ""}
})

function sumattr(){
	if (myObject.res != "" && myObject.attrs != "") {
		if(myObject.res < 0 || myObject.attrs < 0){
			alert("Please enter a number >= 0")
		}else{
			myObject.numattrs = (parseInt(myObject.res) * parseInt(myObject.attrs));
		}
		
	}
}
