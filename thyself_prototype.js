
function find_uniqueness_doc_fetch(ncounter) {
  const port = 8007;
  const query_server = 'http://localhost:' + port + '/?counter=' + ncounter;
  const fetch = require('node-fetch');
  var ans = '';
  (async () => {
    try {

      const response = await fetch(query_server)
      const json = await response.json()

      console.log(json);
      //console.log(json.explanation);
      ans = json;
    } catch (error) {
      console.log(error.response.body);
    }
  })();
  return (ans);
}

function find_uniqueness_doc_axios(ncounter) {
  const port = 8007;
  const query_server = 'http://localhost:' + port + '/?counter=' + ncounter;
  const fetch = require('node-fetch');
  var ans = '';
  const axios = require('axios');

  (async () => {
    try {
      const response = await axios.get(query_server);
      console.log(response.data);
      ans = JSON.parse(response.data);
    } catch (error) {
      console.log(error.response);
    }
  })();
  return (ans);
}


function list_of_virtues(x) {
  var vals = [
    x["Assertiveness"],
    x["Captiousness"],
    x["Blunt"],
    x["SocialConfidence"],
    x["Forgiveness"],
    x["Stubbornness"],
    x["Narcissism"],
    x["Deviousness"],
    x["Consideration"],
    x["Empathy"],
    x["Introversion"],
    x["SocialDominance"],
    x["PeopleVsThings"],
    x["DisciplinedIsolation"],
    x["Affable"],
    x["Sociability"],
    x["SocialDependence"],
    x["IndependentMinded"],
    x["Affable"],
    x["Aggression"],
    x["SensationSeeking"],
    x["StressResilience"],
    x["Antagonism"],
    x["Vigilance"],
    x["Optimism"],
    x["Surgency"],
    x["Vigor"],
    x["Frivolous"],
    x["Dysthymia"],
    x["EmotionalReactivity"],
    x["Negativity"],
    x["Callousness"],
    x["Psychopathy"],
    x["counter"],
    x["ConflictedRelationships"]
  ]


  const tnames = [
    "Assertiveness",
    "Captiousness",
    "Blunt",
    "SocialConfidence",
    "Forgiveness",
    "Stubbornness",
    "Narcissism",
    "Deviousness",
    "Consideration",
    "Empathy",
    "Introversion",
    "SocialDominance",
    "PeopleVsThings",
    "DisciplinedIsolation",
    "Autonomy",
    "Affable",
    "Sociability",
    "SocialDependence",
    "IndependentMinded",
    "Aggression",
    "SensationSeeking",
    "StressResilience",
    "Antagonism",
    "Vigilance",
    "Optimism",
    "Surgency",
    "Vigor",
    "Frivolous",
    "Dysthymia",
    "EmotionalReactivity",
    "Negativity",
    "Callousness",
    "Psychopathy",
    "ConflictedRelationships",
    "NervousAnxiety",
    "Inferiority",
    "Planfulness",
    "PracticalVsImaginative",
    "Impulse Control",
    "Caution",
    "Orderliness",
    "Detail Conscious",
    "Discipline",
    "Spontaneity",
    "Competence",
    "Unconventionality",
    "Traditionalism",
    "Intolerance",
    "Liberalism",
    "Punitiveness",
    "Simplicity",
    "Dishonest-Opportunism",
    "Novelty Seeking",
    "Resilience",
    "Endurance",
    "AchievementStriving",
    "Sensitivity",
    "ToleranceForAmbiguity",
    "Prejudice",
    "Abstractness",
    "Curiosity",
    "AestheticInterests",
    "CognitiveInterests",
    "Creativity",
    "Absorption",
    "Fantasy",
    "Perserverance",
    "Anxiety",
    "Worry",
    "Depression",
    "Rumination",
    "Anger",
    "Embarrassment"
  ]

  var chosen_list = []

  const thresh = 0.5;
  var i;
  for (i = 0; i < tnames.length; i++) {
    if (vals[i] > thresh) {
      chosen_list.push(tnames[i])
    }
  }
  return (chosen_list)
}

var http = require('http');
var virtue_text = "In the darkest night of your life, these are the virtues that will assist you.";
var individual_myth_text = "Character is this moral order seen throughthe medium of an individual nature. An individual is an encloser. Time and space, liberty and necessity, truth and thought, are left at large no longer. Now, the universe is a close or pound. All things exist in the man tinged with the manners of his soul. With what quality is in him, he infuses all nature that he can reach; nor does he tend to lose himself in vastness, but, at how long a curve soever, all his regards return into his own good at last. He animates all he can, and he sees only what he animates. He encloses the world, as the patriot does his country, as a material basis for his character, and a theatre for action. A healthy soul stands united with the Just and the True, as the magnet arranges itself with the pole, so that he stands to all beholders like a transparent object betwixt them and the sun, and whoso journeys towards the sun, journeys towards that person. He is thus the medium of the highest influence to all who are not on the same level. Thus, men of character are the conscience of the society to which they belong.";
var uniqueness_text = "You are unique among the billions of people of the world because you along among all have this combination of traits.";

//create a server object:
http.createServer(function (req, res) {
  var z = find_uniqueness_doc_axios(1234);
  console.log(z);
  //res.write(virtue_text); //write a response to the client
  res.write(z);
  //res.write(individual_myth_text);
  //res.write(uniqueness_text);
  res.end(); //end the response
}).listen(3002); //the server object listens on port 8080


