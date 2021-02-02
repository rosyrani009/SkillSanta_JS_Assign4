let mrgsort = Array();
let msrt = 0;

function add_sort(adde){
        var adde = parseInt(adde.value);
        mrgsort[msrt] = adde;
        msrt++;
        document.getElementById('sortadd').value = '';
        document.getElementById('marr').innerText =`[${mrgsort}]`;
}
function mSort (array) {
    if (array.length === 1) {
		return array;                            // return once we hit an array with a single item
	}
	const middle = Math.floor(array.length / 2); // get the middle item of the array rounded down
	const left = array.slice(0, middle);         // items on the left side
	const right = array.slice(middle);          // items on the right side
	//  document.write(middle);
	return merge(mSort(left),mSort(right));
 }
function merge(left_part,right_part)    //function to merge elements
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			results.push(right_part[j]);
			j++;
		} 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
			results.push(left_part[i]);
			i++;
		} else {
			results.push(right_part[j]);
			j++;
		}
	}
	return results;
}

function passval(){
    
	document.getElementById('sortmAry').innerText =`Array after sorting :-[${mSort(mrgsort)}]`;
	
}
