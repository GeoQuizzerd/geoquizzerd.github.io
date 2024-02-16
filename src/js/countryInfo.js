let countryObject = null;
let countryCode;
let parameters;

function Init(){
    const searchParams = new URLSearchParams(window.location.search);
    let state;
    for (const param of searchParams) {
        //console.log(param);
        //console.log(param[0]);
        //console.log(param[1]);
        if (param[0] == "code"){
            countryCode = param[1];
            parameters = param[0];
            state = true;
            break;
        }
        else if (param[0] == "country"){
            countryCode = param[1];
            parameters = param[0];
            state = true;
            break;
        }
        else{
            countryCode = param[1];
            parameters = param[0];
            state = false;
        }
    }

    if (state){
        for (country of Countries){
            for (const [key, value] of Object.entries(country)){
                if(key == "code"  && value.toUpperCase() == countryCode.toUpperCase()){
                    //console.log(country);
                    countryObject = country;
                }
                else if(key == "name"  && value.toUpperCase() == countryCode.toUpperCase()){
                    //console.log(country);
                    countryObject = country;
                }
            }
        }
    }
    if (countryObject != null){
        //console.log("existant");
        CreateWebsite(countryObject);
    }
    else{
        //console.log("inexistant");
        CreateWebsite();
    }
}

function CreateWebsite(country = null){
    if (country != null){
        let name;

        document.querySelector("link[rel*='icon']").href = `../../userContent/pictures/countries/${country.code.toLowerCase()}.svg`;
        
        let main = document.getElementById('wiki');
        let footer = document.getElementById('footer');

        let h1 = document.createElement('h1');
        h1.innerHTML = countryObject.name;

        let table = document.createElement('table');
        let tbody = document.createElement('tbody');

        main.insertBefore(h1, null);
        main.insertBefore(table, null);
        table.insertBefore(tbody, null);

        for (const [key, value] of Object.entries(countryObject)){
            //console.log(`key = ${key}, value=${value}`);
            switch(key){
                case "name":
                    name = value;
                    break;
                case "phone":
                    tr = document.createElement('tr');

                    th = document.createElement('th');
                    th.innerHTML = key;

                    td = document.createElement('td');
                    td.innerHTML = "+" + value;

                    tbody.insertBefore(tr, null);
                    tr.insertBefore(th, null);
                    tr.insertBefore(td, null);
                    break;
                case "code":
                    tr = document.createElement('tr');

                    img = document.createElement('img');
                    img.src = `../../userContent/pictures/countries/${country.code.toLowerCase()}.svg`;

                    th = document.createElement('th');
                    th.innerHTML = "Drapeau";

                    td = document.createElement('td');

                    tbody.insertBefore(tr, null);
                    tr.insertBefore(th, null);
                    tr.insertBefore(td, null);
                    td.insertBefore(img, null)



                    tr = document.createElement('tr');

                    th = document.createElement('th');
                    th.innerHTML = key;

                    td = document.createElement('td');
                    td.innerHTML = value;

                    tbody.insertBefore(tr, null);
                    tr.insertBefore(th, null);
                    tr.insertBefore(td, null);
                    break;
                default:
                    tr = document.createElement('tr');

                    th = document.createElement('th');
                    th.innerHTML = key;

                    td = document.createElement('td');
                    td.innerHTML = value;

                    tbody.insertBefore(tr, null);
                    tr.insertBefore(th, null);
                    tr.insertBefore(td, null);
                    break;
            }
        }
        let a = document.createElement('a');
        a.target = "_Blank"
        let linkValue = `https://fr.wikipedia.org/wiki/${name}`;
        let linkInnerHTML = `For more information : Wikipedia`;
        a.href = linkValue;
        a.innerHTML = linkInnerHTML;
        
        footer.insertBefore(a, null);
    }
    else{
        let main = document.getElementById('wiki');

        let h1 = document.createElement('h1');
        h1.innerHTML = `Erreur 404`;
        let p = document.createElement('p');
        p.innerHTML = `Aucun "${parameters}" du nom de "${countryCode}" n'a été trouvé.`;
        p.style.textAlign = "center";
        main.insertBefore(h1, null);
        main.insertBefore(p, null);
    }
}