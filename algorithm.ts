function bubbleSort(arr: number[]){
    for(let i=0; i < arr.length - 1; i++)
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
            const a = arr[j]
            const b = arr[i]
            arr[i] = a
            arr[j] = b
        }
    }
        return arr
}

function selectionSort(arr: number[]){
    let minIndex = 0;

    for(let i = 0; i < arr.length - 1; i++){
        minIndex = i;
        for(let j= i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            const a = arr[minIndex]
            const b = arr[i]
            arr[minIndex] = b
            arr[i] = a
            
        }
    }
    return arr
}

function binarySearch(arr: number[], target: number ){
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] > target){
            right = mid - 1;
        }else{
        left = mid + 1;
        }
}
return -1;

}

function reverseArr(arr: number[]){
    let left = 0;
    let right = arr.length - 1
    
    while(left < right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
}
return arr;
}
const res = selectionSort([5,3,8,4,2,7,1,9,6]);
const rev = reverseArr([1,2,3,4,5,6,7,8,9]);
console.log(res);
console.log(rev);