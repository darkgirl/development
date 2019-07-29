 
(function () {
	console.log("webChannelTransport");
    window.webChannel = new QWebChannel(qt.webChannelTransport, function(channel) {
                window.loginObj = channel.objects.loginObj;
				var usernameEdit = window.document.getElementById("TPL_username_1");
				var passwordEdit = window.document.getElementById("TPL_password_1");
				var submitButton = window.document.getElementById("J_SubmitStatic");
				// console.log(usernameEdit);
				window.document.getElementById("J_SubmitStatic").addEventListener("click", function(){
					// console.log(usernameEdit.value);
					// console.log(passwordEdit.value);
                    window.loginObj.sendAccountInfo(usernameEdit.value, passwordEdit.value);
				});

				window.loginObj.fillInAccount.connect(function(username, password) {       //接收信号，响应函数
					let labelList = document.getElementsByClassName("ph-label");
					if (labelList.length > 0) {
						labelList[0].innerText = "";
					}
					usernameEdit.value = username;
					passwordEdit.value = password;
					submitButton.click();
                });  
	});
})();
