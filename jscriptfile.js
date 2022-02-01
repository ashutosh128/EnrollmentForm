// Function  to get input Data
function createData() {
    var x = document.getElementById("enroll_form")
    var name = x.name.value;
    var email = x.email.value;
    var gender = x.gender.value;
    var website = x.web.value;
    var img = x.img_url.value;
    var technology = "";
    if (document.getElementById("java").checked) {
        technology += "Java"}
    if (document.getElementById("html").checked) {
        if (technology.length > 0) technology += ", ";
        technology += "HTML";}
    if (document.getElementById("css").checked) {
        if (technology.length > 0) technology += ", ";
        technology += "CSS";}


    newData =
     `
    <tr>
        <td>
            <b>${name}</b><br>
            ${gender}<br>
            ${email}<br>
            <a href=${website}>${website} </a><br>
            ${technology}
        </td>
        <td><center><img  src=${img} style="width:100px;height:100px;"/><center></td>
    </tr>
    `
    

    // Saving data
    let getLs = localStorage.getItem("stu_data");
    if (getLs == null) {
        arr = [];

    } else {
        arr = JSON.parse(getLs)
    }
    arr.push(newData)
    localStorage.setItem("stu_data", JSON.stringify(arr));

    //calling show data to display updated data
    showData();
    document.getElementById("stu_form").reset();
}

// function to display all the data
function showData() {
    let getLs = localStorage.getItem("stu_data");
    console.log(getLs)
    if (getLs == null || getLs == '[]') { listarr = [];document.getElementById('display').style.display = 'none'; return;
        }
    else {
        listarr = JSON.parse(getLs);
        document.getElementById('display').style.display = 'block';
    }
    let newData = '';

    listarr.forEach((element,index) => {
        newData+=element;
    });
    const td = document.getElementById("table-data")
    td.innerHTML = newData;

}

// function to show saved data
showData();

//function to remove  data
function clearData(){
    localStorage.setItem('stu_data',JSON.stringify([]))
    showData();
}




