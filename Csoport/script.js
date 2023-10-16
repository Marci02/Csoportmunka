let allapot = JSON.parse(localStorage.getItem("feladatokAllapot"))||{
    feladatok:[]
};

function beolvasas(){
    let feladatHTML=""
    for (const feladat of allapot.feladatok) {
        feladatHTML += `
        <div class="col">
            <input type="text" disabled id="todo" value="${feladat.work}">
            <button>Töröl</button>
            <button>Módosít</button>
            <button>Elvégezve</button>
        </div>
        `

        document.getElementById("todo-list").innerHTML=feladatHTML;

    }
}

window.onload = beolvasas();


function mentes(){
    let Feladat1 = document.getElementById("text").value;

    let UjFeladat = {
        work : Feladat1
    };

    allapot.feladatok.push(UjFeladat);

    mentesLocalStoregba();

}

function mentesLocalStoregba(){
    localStorage.setItem('csokiAllapot', JSON.stringify(allapot));
}