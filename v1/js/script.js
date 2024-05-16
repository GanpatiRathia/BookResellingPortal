function checkblank(){

	var name[0]  =  document.formname.fname.value;
	
	var name[1]  =  document.formname.lname.value;
	
	var name[2] =  document.formname.email.value;
	
	var name[3] =  document.formname.mobile.value;
	
	var name[4] =  document.formname.password.value;
	
	var name[5]  =  document.formname.city.value;
	
	for (var i = 0; i  <6 ; i++) {
		if(name[i]== ''){
			alert(" give input");
		}
	}
}
