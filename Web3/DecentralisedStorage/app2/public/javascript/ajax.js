function ajaxCall(route, req, callback) {
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: '/' + route,
    data: JSON.stringify(req),
    dataType: 'json',
    success: (response) => {
      if (response[0] !== null) {
        if (callback) callback(response);
      }
    },
    error: (e) => {
      console.log('ERROR:', e);
    },
  });
}
