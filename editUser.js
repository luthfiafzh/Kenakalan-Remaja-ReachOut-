$(document).ready(function(){
	
	var editUserForm = $("#editUser");
	
	var validator = editUserForm.validate({
		
		rules:{
			username :{ required : true },
			fname :{ required : true },
			email : { required : true, email : true, remote : { url : baseURL + "checkEmailExists", type :"post", data : { userId : function(){ return $("#userId").val(); } } } },	
			role : { required : true, selected : true}
		},
		messages:{
			username :{ required : "This field is required" },
			fname :{ required : "This field is required" },
			email : { required : "This field is required", email : "Please enter valid email address", remote : "Email already taken" },
			role : { required : "This field is required", selected : "Please select atleast one option" }			
		}
	});

	var editProfileForm = $("#editProfile");
	
	var validator = editProfileForm.validate({
		
		rules:{
			fname :{ required : true },
			mobile : { required : true, digits : true },
			email : { required : true, email : true, remote : { url : baseURL + "checkEmailExists", type :"post", data : { userId : function(){ return $("#userId").val(); } } } },
		},
		messages:{
			fname :{ required : "This field is required" },
			mobile : { required : "This field is required", digits : "Please enter numbers only" },
			email : { required : "This field is required", email : "Please enter valid email address", remote : "Email already taken" },
		}
	});

});