
export function getData(key){

    const arrayString = localStorage.getItem(key);
    let arrayData = []
    if(arrayString !== null){
        arrayData = JSON.parse(arrayString)
    }
    
    return arrayData

}

export function addData(Object){

    let arrayData = getData('data')
    if(arrayData !== null){
        if(arrayData.length === 7){
            arrayData.pop();
        }
    }else{
        arrayData = []
    }
    arrayData.push(Object)


    saveData('data', arrayData)
}

export function saveData(key, arrayData){
    localStorage.setItem(key, JSON.stringify(arrayData))
}

export function clearData(key){
    const arrayData = []
    localStorage.setItem(key, JSON.stringify(arrayData))
}