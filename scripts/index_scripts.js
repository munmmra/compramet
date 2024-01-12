// index_scripts.js

var archivoExcel = 'ruta/al/archivo.xlsx';
var xhr = new XMLHttpRequest();
xhr.open('GET', archivoExcel, true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var arraybuffer = xhr.response;
  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, {type: 'array'});
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(xlData);
};

xhr.send();
