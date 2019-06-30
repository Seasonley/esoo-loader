const babel =require( '@babel/core');
const plugin =require('esoo-babel-plugin');
module.exports= function(source){
    var out = babel.transform(source, {
	    plugins: [plugin]
    });
    return out.code
}