
$(document).ready(function(){
	
	var addRoleForm = $("#addRole");
	var validatorAdd = addRoleForm.validate({
		rules:{
			status :{ required : true, selected : true},
			role : { required : true}
		},
		messages:{
			status :{ required : "This field is required", selected : "Please select atleast one option" },
			role : { required : "This field is required" },
		}
	});

	var editRoleForm = $("#editRole");
	var validatorEdit = editRoleForm.validate({
		rules:{
			status :{ required : true, selected : true},
			role : { required : true}
		},
		messages:{
			status :{ required : "This field is required", selected : "Please select atleast one option" },
			role : { required : "This field is required" },
		}
	});
});
