const firebase = require('firebase-admin');

module.exports = (request, response) => {
  const ref = firebase.database().ref('/rhythm');
  return (
      ref.once('value',snapshot => {
         const data = snapshot.val();
         for ( let key in data) {
           delete data[key]['uid'];
         }
         return response.send(data);
         }
      )
  );
};
