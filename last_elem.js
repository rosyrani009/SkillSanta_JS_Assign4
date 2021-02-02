let ar,n,i;
// ar = [7,9,0,-2];
ar = Array();
let u = 0;
function addar(adde){
        var adde = adde.value;
        ar[u] = adde;
        u++;
        document.getElementById('add').value = '';
        document.getElementById('addtoar').innerText =`[ ${ar}]`;
}
function last_elem_array(ar,n){
    n= parseInt(n.value);
    
    if (isNaN(n)) {
        i = ar.length - 1;
    }else{
        i = Math.max(ar.length - n,0);
    }
    document.getElementById("arr").innerHTML = `[ ${ar.slice(i)}]`;
    document.getElementById('num').value = '';
}
