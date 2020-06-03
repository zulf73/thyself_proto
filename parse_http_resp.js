function find_uniqueness_doc(ncounter) {
  const port = 8007;
  const query_server = 'http://localhost:' + port + '/?counter=' + ncounter;
  const axios = require('axios');
  var ans =  new Promise( (resolve,reject) => {

      axios.get(query_server)
	.then( (r)=>{
		ans = r.data;
		resolve(ans);
	});
  });
  return (ans);
}

dJSON = require('dirty-json');
var z=find_uniqueness_doc(2345);
z.then( (d)=>{
	console.log(d);
        console.log('-----------');
	var e = dJSON.parse(d);
	console.log(e["Curiosity"]);
});

