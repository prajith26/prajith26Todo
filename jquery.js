var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var output;
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].completed == true) {
                output = "<input id ='check' type='checkbox'>"
                output += "<label id ='compltd'>&nbsp" + obj[i].title + "</label>" + "</br>";
                $("#list").append(output);
            }
            else {
                output = "<input id ='check1' type='checkbox'>"
                output += "<label>&nbsp" + obj[i].title + "</label>" + "</br>";
                $("#list").append(output);
            }
        }
        $(check).attr('checked', true);
        $(check).attr('disabled', true);
        $(compltd).addClass('disable');
        // console.log(check1.length);

        let p = new Promise((resolve, reject) => {
            $(check1).click(function () {
                var checkboxes = $('input#check1:checked').length;
                if (checkboxes == 5) {
                    resolve("Congrats.5 Tasks have been Successfully Completed");
                }
            });
        });
        p.then((message) => {
            alert(message);
        });
    }
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();