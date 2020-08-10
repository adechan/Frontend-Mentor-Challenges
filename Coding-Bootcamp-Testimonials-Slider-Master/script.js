var information_users = { 
    0: { 
        "description": "“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”",
        "picture": "images/image-tanya.jpg",
        "name": "Tanya Sinclair",
        "job": "UX Engineer"
    },
    1: {
        "description": "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        "picture": "images/image-john.jpg",
        "name": "John Tarkpor",
        "job": "Junior Front-end Developer"
    },
};


var current_id = 0;

// Should happen every time you change something in DOM
// var arrow_left = document.getElementById("arrow-left");
// var arrow_right = document.getElementsByClassName("arrow-right");

// if (window.current_id == 0) {
//     arrow_left.style.backgroundColor = "#ebebeb";
//     // borderTopLeftRadius borderTopRightRadius borderBottomRightRadius borderBottomLeftRadius
//     arrow_left.style.borderRadius = "50px 0 0 50px";
// }
// else {
//     arrow_left.style.backgroundColor = "white";
//     // borderTopLeftRadius borderTopRightRadius borderBottomRightRadius borderBottomLeftRadius
//     arrow_left.style.borderRadius = "50px 0 0 50px";
// }

function ChangeInfo() {

    var arrow_left = document.getElementById("arrow-left");
    var arrow_right = document.getElementById("arrow-right");

    // for (const arrow of arrow_left) {
        arrow_left.addEventListener("click", PrevInfo);
    // }

    // for (const arrow of arrow_right ){
        arrow_right.addEventListener("click", NextInfo);
    // }
}

function PrevInfo() {
    var description = document.getElementById("description");
    var picture = document.getElementById("profile");
    var name = document.getElementById("name");
    var job = document.getElementById("job");

    var current_id = window.current_id;

    if (current_id != 0 && current_id > 0) {
        current_id = window.current_id - 1;

        description.innerHTML = information_users[current_id]["description"];
        picture.src = information_users[current_id]["picture"];
        name.innerHTML = information_users[current_id]["name"];
        job.innerHTML = information_users[current_id]["job"];
    }

    window.current_id = current_id;
}

function NextInfo() {
    var description = document.getElementById("description");
    var picture = document.getElementById("profile");
    var name = document.getElementById("name");
    var job = document.getElementById("job");

    var current_id = window.current_id;

    if (current_id < Object.keys(information_users).length - 1) {
        current_id =  window.current_id + 1;

        description.innerHTML = information_users[current_id]["description"];
        picture.src = information_users[current_id]["picture"];
        name.innerHTML = information_users[current_id]["name"];
        job.innerHTML = information_users[current_id]["job"];
    
    }
    
    window.current_id = current_id;
}