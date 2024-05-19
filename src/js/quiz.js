let score = 0;
let error = 0;
let normalColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-color');

let validCountryCode3;
let InputMapFlag;
let randomCountry = null;
const GetInputMapFlag = () =>{
    InputMapFlag = document.getElementById('InputMapFlag');
    console.log(InputMapFlag.value);
}
// GetInputMapFlag();
console.log(InputMapFlag);

function Init(mode){
    let header = document.getElementById('header');
    let main = document.getElementById('main');

    let section = document.getElementById('section');

    let stats = document.getElementById('stats');

    let nbButton = 4;

    let h1 = document.createElement('h1');
    let img = document.createElement('img');

    switch (mode){
        case "capital" :
        case "currency" :
        case "country":

            h1.id = 'questionTitle';
            img.id = "picture";

            header.insertBefore(h1, stats);
            main.insertBefore(img, section);

            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;


            for (let i = 0; i < nbButton; i++){
                input = document.createElement("input");
                input.setAttribute('type', 'button');
                input.setAttribute('onclick', `Check(this, '${mode}')`);
                input.className = "proposition";
                input.id = "questionButton";
                
                section.insertBefore(input, null);
            }

            StartingGame(mode);
            break;
        case "country":

            h1.id = 'questionTitle';
            img.id = "picture";

            header.insertBefore(h1, stats);
            main.insertBefore(img, section);

            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;

            for (let i = 0; i < nbButton; i++){
                input = document.createElement("input");
                input.setAttribute('type', 'button');
                input.setAttribute('onclick', `Check(this, '${mode}')`);
                input.className = "proposition";
                input.id = "questionButton";
                
                section.insertBefore(input, null);
            }

            StartingGame(mode);
            break;
        case "countryByCapital":

            h1.id = 'questionTitle';
            img.id = "picture";

            header.insertBefore(h1, stats);
            main.insertBefore(img, section);

            img.src = `../../userContent/pictures/unknow.png`;
            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/unknow.png`;

            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;

            for (let i = 0; i < nbButton; i++){
                input = document.createElement("input");
                input.setAttribute('type', 'button');
                input.setAttribute('onclick', `Check(this, '${mode}')`);
                input.className = "proposition";
                input.id = "questionButton";
                
                section.insertBefore(input, null);
            }

            StartingGame(mode);
            break;
        case "flag":
            h1.id = 'questionTitle';

            header.insertBefore(h1, stats);

            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/unknow.png`;

            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;

            for (let i = 0; i < nbButton; i++){
                img = document.createElement('img');
                img.className = "propositionPicture";
                img.setAttribute('onclick', `CheckPicture(this, '${mode}')`);
                section.insertBefore(img, null);
            }

            StartingGame(mode);

            break;
        case "revision":
            let check = ["code", "name", "capital"];
            let tbody = document.getElementById('revisionTableBody');
            for (country of Countries){
                let tr = document.createElement('tr');
                let a1 = document.createElement('a');
                let a = document.createElement('a');
                a1.href =  `#${country.name}`;
                a.href =  `./country.html?country=${country.name}`;
                tr.id = country.name;
                tbody.insertBefore(tr ,null);
                //console.log(country);
                for (const [key, value] of Object.entries(country)) {
                    if (check.includes(key)){
                        if (key == "code"){
                            let th = document.createElement('th');
                            let img = document.createElement('img');
                            img.src = `../../userContent/pictures/countries/${value.toLowerCase()}.svg`;
                            img.id = "revisionFlag";
                            tr.insertBefore(a1,null);
                            a1.insertBefore(th,null);
                            th.insertBefore(a,null);
                            a.insertBefore(img,null);
                            //console.log(`${key}: ${value}`);
                        }
                        else{
                            let th = document.createElement('th');
                            //th.innerHTML = value;
                            a = document.createElement('a');
                            a.href =  `./country.html?country=${country.name}`;
                            a.innerHTML = value;
                            tr.insertBefore(th,null);
                            th.insertBefore(a,null);
                            //console.log(`${key}: ${value}`);
                        }
                    }
                  }
            }
            break;
        case 'mapFlag':
            //h1.id = 'questionTitle';
            img.id = "picture2";

            //input = document.createElement("input");
            //input.value = "Confirmer";
            //input.id = "InputMapFlag";
            //input.setAttribute('type', 'button');

            //input.setAttribute('onclick', `CheckCountryMap()`);

            //header.insertBefore(h1, stats);
            header.insertBefore(img, document.getElementById('stats2'));
            //section.insertBefore(input, null);

            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;

            StartingGame(mode);
            break;
    }
}   

function StartingGame(mode){
    let title = document.getElementById('questionTitle');
    let picture = document.getElementById('picture');
    let buttonList = GetButtonList();
    let pictureList = GetPictureList();

    let coutriesNames = [];
        
    randomCountry = Math.floor(Math.random() * Countries.length);

    switch(mode){
        case "capital":  
            ResetButton(buttonList);
        
            title.innerHTML = "La capitale de : " + Countries[randomCountry].name;
            picture.src = `../../userContent/pictures/countries/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `https://flagicons.lipis.dev/flags/4x3/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            //document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            //document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${country.code.toLowerCase()}.svg`;
            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${Countries[randomCountry].code.toLowerCase()}.svg`;
            
            correctCountry = Countries[randomCountry].name;
            correctAnswer = Countries[randomCountry].capital;
            
            coutriesNames[0] = Countries[randomCountry].capital;
            
            for (let j = 1; j < buttonList.length; j++){
                if (Countries[randomCountry].name == correctCountry || coutriesNames.includes(Countries[randomCountry].capital)){
                    randomCountry = Math.floor(Math.random() * Countries.length);
                    j--;
                }
                else{
                    coutriesNames[j] = Countries[randomCountry].capital;
                }
            }
        
            numberList = [];
        
            for (let k = 0; k < coutriesNames.length; k++){
                let rdm = Math.floor(Math.random() * coutriesNames.length);
                if (! numberList.includes(rdm) ){
                    buttonList[k].value = coutriesNames[rdm];
                    numberList[k] = rdm;
                }
                else{
                    k--;
                }
            }
            break;
        case "country":        
            ResetButton(buttonList);
        
            title.innerHTML = "A qui appartient ce drapeau ?";
            picture.src = `../../userContent/pictures/countries/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `https://flagicons.lipis.dev/flags/4x3/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            //document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${Countries[randomCountry].code.toLowerCase()}.svg`;

            correctCountry = Countries[randomCountry].name;
            coutriesNames[0] = Countries[randomCountry].name;

            correctAnswer = correctCountry;
            
            for (let j = 1; j < buttonList.length; j++){
                if (Countries[randomCountry].name == correctCountry || coutriesNames.includes(Countries[randomCountry].name)){
                    randomCountry = Math.floor(Math.random() * Countries.length);
                    j--;
                }
                else{
                    coutriesNames[j] = Countries[randomCountry].name;
                }
            }
        
            numberList = [];
        
            for (let k = 0; k < coutriesNames.length; k++){
                let rdm = Math.floor(Math.random() * coutriesNames.length);
                if (! numberList.includes(rdm) ){
                    buttonList[k].value = coutriesNames[rdm];
                    numberList[k] = rdm;
                }
                else{
                    k--;
                }
            }

            break;
        case "countryByCapital":        
            ResetButton(buttonList);
        
            title.innerHTML = `A qui appartient la capitale : ${Countries[randomCountry].capital}`;

            correctCountry = Countries[randomCountry].name;
            coutriesNames[0] = Countries[randomCountry].name;

            correctAnswer = correctCountry;
            
            for (let j = 1; j < buttonList.length; j++){
                if (Countries[randomCountry].name == correctCountry || coutriesNames.includes(Countries[randomCountry].name)){
                    randomCountry = Math.floor(Math.random() * Countries.length);
                    j--;
                }
                else{
                    coutriesNames[j] = Countries[randomCountry].name;
                }
            }
        
            numberList = [];
        
            for (let k = 0; k < coutriesNames.length; k++){
                let rdm = Math.floor(Math.random() * coutriesNames.length);
                if (! numberList.includes(rdm) ){
                    buttonList[k].value = coutriesNames[rdm];
                    numberList[k] = rdm;
                }
                else{
                    k--;
                }
            }
            break;
        case "currency":  
            ResetButton(buttonList);
        
            title.innerHTML = "Quelle monnaie possède le  : " + Countries[randomCountry].name;
            picture.src = `../../userContent/pictures/countries/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `https://flagicons.lipis.dev/flags/4x3/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            //document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${Countries[randomCountry].code.toLowerCase()}.svg`;

            correctCountry = Countries[randomCountry].name;
            correctAnswer = Countries[randomCountry].currency_symbol;
            
            coutriesNames[0] = Countries[randomCountry].currency_symbol;
            
            for (let j = 1; j < buttonList.length; j++){
                if (Countries[randomCountry].name == correctCountry || coutriesNames.includes(Countries[randomCountry].currency_symbol)){
                    randomCountry = Math.floor(Math.random() * Countries.length);
                    j--;
                }
                else{
                    coutriesNames[j] = Countries[randomCountry].currency_symbol;
                }
            }
        
            numberList = [];
        
            for (let k = 0; k < coutriesNames.length; k++){
                let rdm = Math.floor(Math.random() * coutriesNames.length);
                if (! numberList.includes(rdm) ){
                    buttonList[k].value = coutriesNames[rdm];
                    numberList[k] = rdm;
                }
                else{
                    k--;
                }
            }
            break;
        case "flag":  
            ResetPicture(buttonList, mode);
        
            title.innerHTML = "Le drapeau du pays : " + Countries[randomCountry].name;
            //picture.src = `https://flagicons.lipis.dev/flags/4x3/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            //picture.src = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            //document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/${Countries[randomCountry].name.toLowerCase().replaceAll(' ', '')}.png`;
            
            correctCountry = Countries[randomCountry].name;
            correctAnswer = Countries[randomCountry].code;
            
            coutriesNames[0] = Countries[randomCountry].code;
            
            for (let j = 1; j < pictureList.length; j++){
                if (Countries[randomCountry].name == correctCountry || coutriesNames.includes(Countries[randomCountry].code)){
                    randomCountry = Math.floor(Math.random() * Countries.length);
                    j--;
                }
                else{
                    coutriesNames[j] = Countries[randomCountry].code;
                }
            }
        
            numberList = [];
        
            for (let k = 0; k < coutriesNames.length; k++){
                let rdm = Math.floor(Math.random() * coutriesNames.length);
                if (! numberList.includes(rdm) ){
                    pictureList[k].src = `../../userContent/pictures/countries/${(coutriesNames[rdm]).toLowerCase()}.svg`;
                    numberList[k] = rdm;
                }
                else{
                    k--;
                }
            }
            //console.log(coutriesNames);
            break;
        case "mapFlag":
            //title.innerHTML = "Localiser le pays par son drapeau";
            picture = document.getElementById('picture2');
            picture.src = `../../userContent/pictures/countries/${(Countries[randomCountry].code).toLowerCase()}.svg`;
            document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${Countries[randomCountry].code.toLowerCase()}.svg`;

            correctCountry = Countries[randomCountry].name;
                    
            validCountryCode3 = Countries[randomCountry].alpha_3;
            break;
    }
}

function ResetButton(buttonList, state=true){
    for (let i = 0; i < buttonList.length; i++){
        if (state){
            /*buttonList[i].style.backgroundColor = normalColor;*/
            buttonList[i].id = "questionButton";
            buttonList[i].disabled = false;
        }
        else{
            buttonList[i].disabled = true;
        }
    }
}

function ResetPicture(pictureList, mode){
    for (picture of pictureList){
        picture.className = "propositionPicture";
        picture.setAttribute('onclick', `CheckPicture(this, '${mode}')`);
    }
}

function GetButtonList(){
    return document.getElementsByClassName('proposition');
}

function GetPictureList(){
    return document.getElementsByClassName('propositionPicture');
}


function Check(answer, mode){
    if (answer.value == correctAnswer){
        //console.log("oui");
        //console.log(answer);
        answer.id = "welcomeButtonCorrect";
        ResetButton(GetButtonList(), false);

        score++;
        document.getElementById('score').innerHTML = score;

        setTimeout(function() {StartingGame(mode)}, "800");
    }
    else{
        //console.log("non");
        //console.log(answer);
        answer.id = "welcomeButtonWrong";
        answer.disabled = true;
        error++;
        document.getElementById('error').innerHTML = error;
    }
}

function CheckPicture(answer, mode){
    let value = answer.src.substr(answer.src.indexOf('.svg') - 2,2).toUpperCase();
    //console.log(answer.src);
    //console.log(value);
    if (value == correctAnswer){
        //console.log("oui");
        //console.log(answer);
        answer.className = "propositionPicture correct";
        answer.setAttribute('onclick', ``);
        
        score++;
        document.getElementById('score').innerHTML = score;

        setTimeout(function() {ResetPicture(GetPictureList(), mode); StartingGame(mode);}, "800");
    }
    else{
        //console.log("non");
        //console.log(answer);
        answer.className = "propositionPicture wrong";
        answer.setAttribute('onclick', ``);
        error++;
        document.getElementById('error').innerHTML = error;
    }
}

/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blabla(title, picture){
    for (let i = 0; i < Countries.length; i++){
        wtf(i, title, picture);
        await sleep(1000);
    }
}

function wtf(number, title, picture){
    console.log(Countries[number].name);
    console.log(Countries[number].name.toLowerCase().replaceAll(' ', ''));
    console.log(number);
    title.innerHTML = Countries[number].name;
    picture.src = `https://flagicons.lipis.dev/flags/4x3/${(Countries[number].code).toLowerCase()}.svg`;
}
*/