import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('my_document') // leave as .doc() for a random unique doc name to be assigned
        .set({
          string_data: 'joe bloggs',
          number_data: 2,
        })
        .then(console.log('Success'));
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={sendData}>Send Data To Cloud Firestore</button>;
};

export default WriteToCloudFirestore;
