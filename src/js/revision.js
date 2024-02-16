function Search(event = "pass"){
    if (event == "pass" || event.keyCode == 13){
        console.log("search");
        let content = document.getElementById('searchBar');
        let textContent = document.getElementById('searchBar').value;
        console.log(content);
        console.log(Countries);
        let paramName = textContent;
        for (country of Countries){
            for (const [key, value] of Object.entries(country)){
                if(key == "name"  && value.toUpperCase() == textContent.toUpperCase()){
                    paramName = country.code;
                    console.log(country);
                }
            }
        }
        window.location.href = `./country.html?code=${paramName}`;
    }
}

function Proposition(){
    let searchLimit = 4;
    let searchBarLi = document.getElementById('searchBarLi');
    let textContent = document.getElementById('searchBar').value;
    DeletePropositions();
    countryObjectList = [];
    if (textContent != ""){
        console.log(document.getElementById('searchPart').childElementCount);
        DeletePropositions();
        let ul = document.getElementById('searchPart');
        for (country of Countries){
            for (const [key, value] of Object.entries(country)){
                if(key == "name"  && (value.toUpperCase().includes(textContent.toUpperCase()) || toNormalForm(value).toUpperCase().includes(textContent.toUpperCase()))){
                    countryObjectList.push(country);
                }
            }
        }
        //console.log(`before :`);
        //console.log(countryObjectList);
        //console.log(countryList);
        countryObjectList = AlphabeticalSort(countryObjectList);
        //console.log(`after :`);
        //console.log(countryObjectList);

        for (country of countryObjectList){
            for (const [key, value] of Object.entries(country)){
                if(key == "name"  && (value.toUpperCase().includes(textContent.toUpperCase()) || toNormalForm(value).toUpperCase().includes(textContent.toUpperCase()))){
                    li = document.createElement('li');
                    li.innerHTML = value;
                    li.id = "searchResultSelection";
                    li.className = "searchResultSelection";
                    li.setAttribute('onclick', `Select(this)`);
                    ul.insertBefore(li, null);
                }
            }
        }
        //console.log(`document.getElementsByClassName('searchResultSelection').length = ${document.getElementsByClassName('searchResultSelection').length}`);
        if (document.getElementsByClassName('searchResultSelection').length > 0){
            searchBarLi.style.borderRadius = "9px 9px 0px 0px";
        }
        else{
            searchBarLi.style.borderRadius = "25px";
        }
    }
    else{
        searchBarLi.style.borderRadius = "25px";
    }
}

function AlphabeticalSort(list){
    let tempList = [];
    for (let i = list.length - 1; i > 0; i--){
        //console.log("elem.name.slice(0, document.getElementById('searchBar').value.length).toUpperCase() == toNormalForm(document.getElementById('searchBar').value).toUpperCase())");
        //console.log(elem.name.toUpperCase());
        //console.log(elem.name.slice(0, document.getElementById('searchBar').value.length).toUpperCase());
        //console.log(toNormalForm(document.getElementById('searchBar').value).toUpperCase());
        //console.log(document.getElementById('searchBar').value.toUpperCase());
        //console.log(elem.name.slice(0, document.getElementById('searchBar').value.length).toUpperCase() == toNormalForm(document.getElementById('searchBar').value).toUpperCase());
        //console.log(`i1 = ${i}`);
        //console.log(`list.length = ${list.length}`);
        //console.log(list);
        if ((list[i].name.slice(0, document.getElementById('searchBar').value.length).toUpperCase() == document.getElementById('searchBar').value.toUpperCase()) ||
        (toNormalForm(list[i].name.slice(0, document.getElementById('searchBar').value.length).toUpperCase()) == document.getElementById('searchBar').value.toUpperCase()) ||
        (list[i].name.slice(0, document.getElementById('searchBar').value.length).toUpperCase() == toNormalForm(document.getElementById('searchBar').value).toUpperCase())){
            //tempList.push(elem);
            //console.log("blob of");
            //console.log(list);
            //console.log(`i2 = ${i}`);
            //console.log(list[i]);
            //console.log(list[i].name);
            tempList.push(list.splice(i, 1)[0]);
        }
    }
    //console.log(`tempList :`);
    //console.log(tempList);
    //console.log(`list :`);
    //console.log(list);
    
    //console.log('tppppemplist :');
    //console.log(tempList);
    
    tempList.sort((a, b) => a.name.localeCompare(b.name));
    tempList.push(...list);
    
    
    //console.log('ttttemplist :');
    //console.log(tempList);
    if (tempList.length > 4){
        tempList.splice(4, tempList.length - 4);
    }
    console.log('templist :');
    console.log(tempList);
    return tempList;
}

function DeletePropositions(limit = 0){
    let c = document.getElementById('searchPart').childElementCount;
    if (c > 1){
        for (let i = c - 1; c > limit + 1; c--){
            document.getElementById('searchPart').children.item(document.getElementById('searchPart').childElementCount-1).remove();
        }
    }
}

function Select(li){
    let content = li.innerHTML;
    document.getElementById('searchBar').value = content;
    Search();
}

//This method come from javascriptf1.com
function toNormalForm(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}



function Test(){
    Countries.sort((a, b) => a.name.localeCompare(b.name));
    console.log(Countries);
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
  