document.body.querySelector("div");

let text = document.body.querySelector("div").innerText;

document.body.querySelector("div").innerHTML = "";

let index = 0;

let right = 0;
let wrong = 0;
let space = 0;
let upper = 0;
let lower = 0;

for (const element of text)
{
    document.body.querySelector("div").innerHTML += `<span>${element}</span>`;
}

document.body.onkeypress = function (event)
{
    if(index >= document.querySelectorAll("span").length)
    {
        return;
    }

    if (event.key == document.querySelectorAll("span")[index].innerText)
    {
        document.querySelectorAll("span")[index].classList.remove("warn");
        document.querySelectorAll("span")[index].classList.add("success");

        right++;
        document.querySelectorAll("b")[0].innerText = right;

        if(event.key == " ")
        {
            space++;
            document.querySelectorAll("b")[1].innerText = space;
        }

        if(event.key >= "A" && event.key <= "Z")
        {
            upper++;
            document.querySelectorAll("b")[3].innerText = upper;
        }

        if(event.key >= "a" && event.key <= "z")
        {
            lower++;
            document.querySelectorAll("b")[4].innerText = lower;
        }

        index++;
    }
    else
    {
        document.querySelectorAll("span")[index].classList.add("warn");

        wrong++;
        document.querySelectorAll("b")[2].innerText = wrong;
    }
}