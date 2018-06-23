const firebase = require('firebase-admin');

module.exports = (request, response) => {
  const ref = firebase.database().ref('/rhythm');
  return(
    ref.once('value',snapshot => {
        const data = snapshot.val();
        const uid = request.body.uid;
        for (let key in data) {
          if (data[key]['uid'] === uid) {
            return response.send({ eventName: key });
          }
        }
        return response.status(422).send({ error: "You are not an organiser"});
      }
    )
  );
};
