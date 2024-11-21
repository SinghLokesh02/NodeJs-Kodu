import  generator  from "generate-password";
import _ from "lodash";

var password = generator.generate({
	length: 10,
	numbers: true
});

let uiq = _.uniq(password).join('');

console.log(uiq);
