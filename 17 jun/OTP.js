(
    function () {
        let origionalOTP = "704601";
        let userOTP = prompt("Enter Your OTP : ");

        if (userOTP.length == 6 && userOTP === origionalOTP) {
            alert("Your OTP Is True");
            alert("Your Vallidation Completed Successfully....");
        }

        else if(userOTP.length == 3)
        {
            alert("Please Enterd 6 Digits Number..")
        }

        else {
            alert("You Entered Invlid OTP.!!");
            alert("Please Enter A Valid OTP..");
        }
    }
)();