// just a skin over ajax, make fancy is you really want
function fetch(url, callback) {
  let ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      callback(false, ajax.responseText);
    } else {
      // hmmm look deeper into this
      if (ajax.status == 200) {
        callback(new Error('Request not found'), false);
      }
    }
  };
}

export default fetch;
