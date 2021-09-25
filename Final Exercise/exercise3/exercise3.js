const arr = ['hello', 'Two11', '11Five111' ,'One1', 'pro1m1in1en1t', 'H1a1r1s1h'];

console.log(filterAndReplace(arr, '1', 'e'));

function filterAndReplace(strArr, search, replace){
    const  filteredArr = strArr.filter((element)=>{
        let count = 0;
        element.split('').map(ch => ch==='1' ? count++ : '');
        return count>=3;
    })
    
    const resultArr = filteredArr.map((element)=>{
        return element.split(search).join(replace);
    })

    return(resultArr.join('|'));
}




