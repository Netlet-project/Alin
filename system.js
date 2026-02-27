// This is for the page itself

class CurrentPageManager {
    addElement(which, string, id) {
        if (which === 'button' || which === 'image') {
            console.error(`why are you adding a ${which} here? use addButton instead!`);
            return null;
        }
        if (id === null) {
            return document.body.innerHTML += `<${which}>${string}</${which}>`;
        }
        else {
            return document.body.innerHTML += `<${which} id=${id}>${string}</${which}>`;
        }
    }

    addButton(string, id, clicked) {
        if (id === null && clicked === null) {
            return document.body.innerHTML += `<button>${string}</button>`;
        }
        else if (id !== null && clicked === null) {
            return document.body.innerHTML += `<button id=${id}>${string}</button>`;
        }
        else if (clicked !== null && id === null) {
            return document.body.innerHTML += `<button onclick=${clicked}>${string}</button>`;
        }
        else {
            return document.body.innerHTML += `<button id=${id} onclick=${clicked}>${string}</button>`;
        }
    }

    removeElement(id) {
        return document.getElementById(`${id}`).remove();
    }

    changeTitle(title) {
        return document.title = `${title}`;
    }
}

// This is for styling the page

class CurrentPageStyle {
    changeBG(color) {
        return document.body.style.background = `${color}`;
    }
    changeObjectColor(id, color, type, color2) {
        if (type === "bg") {
            return document.getElementById(`${id}`).style.background = `${color}`;
        }
        else if (type === "color") {
            return document.getElementById(`${id}`).style.color = `${color}`;
        }
        if (type === "gradient") {
            return document.getElementById(`${id}`).style.backgroundImage = `linear-gradient(${color}, ${color2})`;
        }
    }
    changeObjectAlignment(id, position) {
        if (position === "center") {
            return document.getElementById(`${id}`).style.textAlign = "center";
        }
        else if (position === "left") {
            return document.getElementById(`${id}`).style.textAlign = "left";
        }
        else if (position === "right") {
            return document.getElementById(`${id}`).style.textAlign = "right";
        }
    }
}

// This is going to be the hardest part yet, making the page be able to change dimensions, so from 2D -> 3D and 3D -> 2D

class ChangeDimension {
    changeText(dimension, id) {
        if (dimension === "3d") {
            if (document.getElementById(`${id}`).innerHTML.includes('<h1>')) {
                document.getElementById(`${id}`).style.transform = "matrix3d()";
            }   
        }
    }
}

const currentPage = new CurrentPageManager;
const currentPageStyle = new CurrentPageStyle;
const currentElementDimension = new ChangeDimension;