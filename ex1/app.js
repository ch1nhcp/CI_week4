function sapXep() {
  let arr1 = document.getElementById("arr1").value.split(",");
  let arr2 = document.getElementById("arr2").value.split(",");
  let sum = arr1.concat(arr2);
  
 //Ham sap xep sau khi ghep 2 mang
  sum.sort(function (a, b) {
    return a - b;
  });
  
  console.log(arr1);
  console.log(arr2);
  console.log(sum);

  document.getElementById("sum").innerHTML = sum;
}
