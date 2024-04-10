
let arrayy = []
// for get deta from storage
let save = JSON.parse(localStorage.getItem("save data")) || []
let ary = -1;
function btn() {

    // if (ary = -1)
    // return 


    const date = new Date()
    let name1 = document.getElementById("email").value;
    // console.log(name1)

    let name2 = document.getElementById("fname").value;
    // console.log(name2);

    let name3 = document.getElementById("uname").value;
    // console.log(name3);

    let name4 = document.getElementById("password").value;
    // console.log(name4);

    const v = { p1: name1, p2: name2, p3: name3, p4: name4 }

    let b = ""
    for (let x in v) {
        b += console.log(v[x]); + "<br>";
    }
    console.log(date);


   
    if (ary !== -1) {
        const update = save.map((item, index) => {
            if (ary === index) {
                return v
            }
            return item

        });

        save = update;
        table();
        ary = -1      
    }
    else { save.push(v) }
    
    table()

    // for save data in storage
    localStorage.setItem("saved data", JSON.stringify(save))


}

function table() {
    document.getElementById("display").innerHTML =
        save.map((item, index) =>
            `<tr>
            <td>${item.p1}</td>
            <td>${item.p2}</td>
            <td>${item.p3}</td>
            <td>${item.p4}</td>
            <td><button class="delete-button" onclick=deletee(${index})>Delete</button></td>
            <td><button class="edit-button" onclick="edit(${index})" id="edit" > Edit </button></td>
            </tr>`

        )


}


function deletee(idx) {

    const b = save.filter((item, indexs) => indexs !== idx)
    console.log(b);
    save = b
    table()
}

function edit(idx) {
    ary = idx
    const t = save.find((item, indexs) => indexs === idx)
    console.log(t);

    document.getElementById("email").value = t.p1
    document.getElementById("fname").value = t.p2
    document.getElementById("uname").value = t.p3
    document.getElementById("password").value = t.p4

  
}
