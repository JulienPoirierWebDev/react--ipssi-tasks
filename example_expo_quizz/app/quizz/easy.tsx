import { ScrollView, StyleSheet, Text, View } from "react-native";

/*

Utiliser des hooks pour récupérer les questions a l'url : https://opentdb.com/api.php?amount=10&type=boolean
Afficher ces questions avec les composants react native :
https://reactnative.dev/docs/view VIEW pour avoir toute la question dedans.
https://reactnative.dev/docs/button BUTTON pour afficher les réponses cliquables.
https://reactnative.dev/docs/text TEXT pour afficher la question en elle-même.

Il faut gérer le score pour savoir si l'utilisateur trouve la bonne réponse ou non.


Si vous arrivez a faire apparaitre une question par une question,
c'est mieux. (cela suppose de garder en mémoire
dans le composant la question en cours, toutes les questions, le score, etc.)

*/
const Easy = () => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text>Hello world</Text>
      </View>
      <View>
        <Text style={styles.text}>Goodbye world</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    borderWidth: 4,
    borderColor: "red",
    backgroundColor: "black",
    padding: 32,
    color: "blue",
  },
  text: {
    color: "blue",
    fontSize: 12,
  },
});
export default Easy;
