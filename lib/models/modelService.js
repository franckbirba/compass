var path = require('path'),
fs = require('fs');

exports.MODELS = function() {
	var me = this;
	me._models = {};
	me.init();
};

exports.MODELS.prototype.init = function(callback) {
	var me = this;
	var modelsPath = path.join(__dirname, "./");
	fs.readdirSync(modelsPath).forEach(function (file) {
		if (/(.*)\.(json$)/.test(file)) {
			fs.readFile(__dirname+"/"+file, "utf8",function(err, data){
				if(err)
					console.log(err);
				var modelName = file.substr(0,file.indexOf(".json"), 5);
				try{
					me._models[modelName] = JSON.parse(data);
				} catch(e){
					console.log(e);
				}
			});
		}
	});
};

exports.MODELS.prototype.get = function() {

};

exports.MODELS.prototype.validateObj = function(model, obj, callback){
	var length = Object.keys(model).length;
	var me = this;
	if(!obj){
		obj = {};
	}
	var cpt = 0;
	for(field in model){
		me.validateField(field,model[field], obj[field], function(isValid){
				if(!isValid){
										console.log("NOT VALID");

					return callback(false);
				}
				cpt += 1;
	//			console.log("validateObj",field,cpt,length);
				if(cpt == length) {
		//			console.log(model, "OK");
					return callback(true);
				}
		});
	}
};

exports.MODELS.prototype.validateField = function(fieldName,model, field,callback) {
	var me = this;
//	console.log("FIELD "+fieldName);
	if(model && typeof model == 'object'){
		if(model.required && !field) {
			return callback(false);
		}
		if(!field){
			field = {};
		}

		if(model.fields){
			//TODO recursive
			//console.log("CONTAINS: ", JSON.stringify(model.fields));
			me.validateObj(model.fields, field, function(isValid){
		//		console.log(fieldName,'VALID?',isValid);
				return callback(isValid);
			});
//return callback(true);
		}
		else if(model.type == "collection"){
			return callback(true);
		}
		else {
			return callback(true);
		}
	} else {
		return callback(true);
	}
};

exports.MODELS.prototype.validate = function(model, data, callback) {
	var me = this;
	//console.log("MODEL "+model,JSON.stringify(me._models[model].fields), Object.keys(me._models[model].fields));
	if(me._models[model]) {
		var fields = me._models[model].fields;
		var length = Object.keys(fields).length;
		var cpt = 0;
		var errors = 0;
		for(field in fields){
			me.validateField(field, fields[field], data[field], function(isValid){
				cpt += 1;

				if(!isValid){
					errors += 1;
				}
				//console.log("validate",cpt, length);
				if(cpt == length) {
					return callback(errors === 0);
				}
			});
		}
	}
};
