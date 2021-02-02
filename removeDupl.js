let ard = Array();
let dup = 0;
function addDupar(adde){
        var adde = adde.value;
        ard[dup] = adde;
        dup++;
        document.getElementById('addd').value = '';
        document.getElementById('adddtoar').innerText =`[${ard}]`;
}
function rmvDp(){
    var i, j, count = 0;
    var k=0;
    var ar = Array();
    // var arr = [3,'a','a','A',2,3,'a',3,'a',2,4,9,3];
    for(i = 0; i < ard.length; i++){
        j = i;         
        while (j < ard.length){
            if(ard[i] == ard[j]){
                count++;
            }
            if(count>1){
                ard[j]=null;
                count--;
            }
            j++;
            
        }
        count = 0;
        if(ard[i] != null){
            ar[k] = ard[i];
            k++;
        }
    }
    document.getElementById('rmvDup').innerHTML = `Array after removing duplicate items :- [${ar}]`;
}