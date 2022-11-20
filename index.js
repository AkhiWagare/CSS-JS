function uploadDocs() {
    var fileName = document.getElementById("choose-file").value.toLowerCase();
    if (!fileName.endsWith('.pdf')) {
        alert('Please upload pdf file only!');
        return false;
    }
}

function signIn() {
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("password").value;

    if (uname === 'admin' && upass === 'admin123') {
        location.replace("./upload-docs.html") // window.open("./upload-docs.html", target = "_self")
    }
}

function dwnld() {
    window.open("D:/Akhi/PRMIT&amp;R/Sem - 5/DBMS/DocLock/public/data_files/1668970194313.pdf", null)
}