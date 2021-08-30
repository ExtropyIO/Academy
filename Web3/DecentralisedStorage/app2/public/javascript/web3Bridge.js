$(document).ready(() => {
  // DOM components
  const inputBox = document.getElementById('input-text');
  const cidBox = document.getElementById('ipfs-request');
  // Confirmation message
  console.log('web3Bridge.js loaded');
  // Function calls
  $('#add-data').click(() => {
    addData(inputBox.value);
  });
  $('#get-data').click(() => {
    getData(cidBox.value);
  });
});

async function addData(newData) {
  const route = 'addData';
  const req = { data: newData };
  function update(response) {
    $('#output-text').val(response.path);
  }
  ajaxCall(route, req, update);
}

async function getData(cid) {
  const route = 'getData';
  const req = { data: cid };
  function update(response) {
    $('#output-text').val(response[0]);
  }
  ajaxCall(route, req, update);
}
