let songBtn = document.getElementById("singBtn");

songBtn.addEventListener("click", function (e) {

    let lines;
    let linesRemaining;

    let kelsieDiv = document.createElement("div");
    kelsieDiv.className = "friend"
    let kelsieH3 = document.createElement("h3");
    document.body.appendChild(kelsieDiv);
    kelsieDiv.appendChild(kelsieH3);
    kelsieH3.innerHTML = "Kelsie";
    for (let i = 99; i >= 1; i--) {
        let kelsiePar = document.createElement("p");
        kelsieDiv.appendChild(kelsiePar);

        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        let kelsieText = document.createTextNode((i + " " + lines + " of code in the file, " + i + " " + lines + " of code; Kelsie strikes one out, clears it all out, " + linesRemaining + " of code in the file."));
        kelsiePar.appendChild(kelsieText);
    };


    let kelseyDiv = document.createElement("div");
    kelseyDiv.className = "friend"
    let kelseyH3 = document.createElement("h3");
    document.body.appendChild(kelseyDiv);
    kelseyDiv.appendChild(kelseyH3);
    kelseyH3.innerHTML = "Kelsey";
    for (let i = 99; i >= 1; i--) {
        let kelseyPar = document.createElement("p");
        kelseyDiv.appendChild(kelseyPar);

        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        let kelseyText = document.createTextNode((i + " " + lines + " of code in the file, " + i + " " + lines + " of code; Kelsey strikes one out, clears it all out, " + linesRemaining + " of code in the file."));
        kelseyPar.appendChild(kelseyText);
    };

    let tinaDiv = document.createElement("div");
    tinaDiv.className = "friend"
    let tinaH3 = document.createElement("h3");
    document.body.appendChild(tinaDiv);
    tinaDiv.appendChild(tinaH3);
    tinaH3.innerHTML = "Tina";
    for (let i = 99; i >= 1; i--) {
        let tinaPar = document.createElement("p");
        tinaDiv.appendChild(tinaPar);

        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        let tinaText = document.createTextNode((i + " " + lines + " of code in the file, " + i + " " + lines + " of code; Tina strikes one out, clears it all out, " + linesRemaining + " of code in the file."));
        tinaPar.appendChild(tinaText);
    };

    let jtDiv = document.createElement("div");
    jtDiv.className = "friend"
    let jtH3 = document.createElement("h3");
    document.body.appendChild(jtDiv);
    jtDiv.appendChild(jtH3);
    jtH3.innerHTML = "JT";
    for (let i = 99; i >= 1; i--) {
        let jtPar = document.createElement("p");
        jtDiv.appendChild(jtPar);

        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        let jtText = document.createTextNode((i + " " + lines + " of code in the file, " + i + " " + lines + " of code; JT strikes one out, clears it all out, " + linesRemaining + " of code in the file."));
        jtPar.appendChild(jtText);
    };

    let aaronDiv = document.createElement("div");
    aaronDiv.className = "friend"
    let aaronH3 = document.createElement("h3");
    document.body.appendChild(aaronDiv);
    aaronDiv.appendChild(aaronH3);
    aaronH3.innerHTML = "Aaron";
    for (let i = 99; i >= 1; i--) {
        let aaronPar = document.createElement("p");
        aaronDiv.appendChild(aaronPar);

        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        let aaronText = document.createTextNode((i + " " + lines + " of code in the file, " + i + " " + lines + " of code; Aaron strikes one out, clears it all out, " + linesRemaining + " of code in the file."));
        aaronPar.appendChild(aaronText);
    };
});