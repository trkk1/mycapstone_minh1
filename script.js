var setImage = document.getElementById("myImage");

function setNewImg()
{
    setImage.src = "https://media.istockphoto.com/id/1141057054/vector/cute-corgi-butt-cartoon-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=_ptkGtZVUcBnHiWFcl5huhR6CPIp3BY3wA3HfIU52wk="
}
function setOldImg()
{
    setImage.src = "https://media.istockphoto.com/id/1084252958/vector/lazy-dog-sleeping-cute-welsh-corgi-puppy-lying-on-back-cartoon-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=gVw4LvcjqwxQdfJQIiWu5lPv0sycar-YDSqvOYM2Vbg="
}

setImage.onmouseover = setNewImg;

setImage.onmouseout = setOldImg;

var paragraph = document.getElementById("changeName")

function text_1() 
{
    paragraph.style.color = "red"
    paragraph.style.background = "blue"
    paragraph.innerHTML = "Training Manangement Tool"

}

function originalText()
{
    paragraph.style.color = "black"
    paragraph.style.background = "white"
    paragraph.innerHTML = "Technology, Media, and Telecommunications"
}

function changeParagraph()
{
    if (paragraph.innerHTML == "Training Manangement Tool"){
        paragraph.style.color = "black"
        paragraph.style.background = "#edecb2"
        paragraph.innerHTML = "Technology, Media, and Telecommunications"
    } else if (paragraph.innerHTML == "Thermo Mechanically Treated") {
        paragraph.style.color = "red"
        paragraph.style.background = "orange"
        paragraph.innerHTML = "Training Manangement Tool"
    } else {
        paragraph.style.color = "blue"
        paragraph.style.background = "pink"
        paragraph.innerHTML = "Thermo Mechanically Treated"
    }
}


paragraph.onclick = changeParagraph;