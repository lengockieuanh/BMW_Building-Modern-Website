function showAlert()
{
    alert("You have clicked to show alert");
}

function showConfirm()
{
    var r = confirm("Are you sure to close Window");
    if(r){
        window.close();
    }
}

function showPrompt(){
    var n1 = prompt("Enter number 1");
    var n2 = prompt("Enter number 2");

    var sum = parseInt(n1) + parseInt(n2);
    alert("n1 + n2 = " +  sum);
    alert(`${n1} + ${n2} = ${sum}`);
}

function showKeyUp(){
    alert("ok");
}

function showFocus(param){
    param.style.backgroundColor = "pink";
    param.style.color = "white";
}

function showBlur(param){
    param.style.backgroundColor="yellow";
}

function showInfo(){
    var uname = document.getElementById("name").value;
    // bat dau la chu hoa, tiep theo la bat ky ki tu nao nhung ko bao gom ki tu dac biet
    // it nhat 3 ki tu
    var regexpName = /[A-Z]w{2,}/;
    if(!regexpName.test(uname))
    {
        alert("Tên không hợp lệ");
        return false;
    }

    var uemail = document.getElementById("email").value;
    // dinh dang: aaa@aaa.aaa, a la bat ky ki tu nao ko bao gom ki tu dac biet
    var regexEmail = /\w+@\w+\.\w+/;
    if(!regexpEmail.test(uemail))
    {
        alert("Email không hợp lệ");
        return false;
    }

    var uphone = document.getElementById("phone").value;
    var regexPhone = /\d{10}/;
    if(!regexpPhone.test(uphone))
    {
        alert("Số điện thoại không hợp lệ");
        return false;
    }

    alert("\n Name: " + uname
        + "\n Email: " + uemail
        + "\n Phone: " + uphone
    );
}