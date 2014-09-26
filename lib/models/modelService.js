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
	console.log("OBJ "+model);
	var me = this;
	if(!obj){
		obj = {};
	}
	var cpt = 0;
	for(field in model){
		me.validateField(model[field], obj[field], function(isValid){
				if(!isValid){
					return callback(false);
				}
				cpt += 1;
				if(cpt == length) {
					return callback(true);
				}
		});
	}
};

exports.MODELS.prototype.validateField = function(model, field,callback) {
	var me = this;
	console.log("FIELD "+model);
	if(model && typeof model == 'object'){
		if(model.required && !field) {
			return callback(false);
		}
		if(!field){
			field = {};
		}

		if(model.fields){
			//TODO recursive
			me.validateObj(model.fields, field, function(isValid){
				if(!isValid){
						return callback(false);
					}
					return callback(true);
			});

			/*for(fieldName in model.fields){
				me.validateField(model.fields[fieldName], field[fieldName], function(isValid){
					
				});
			}*/
		}
	} else {
		return callback(true);
	}
};

exports.MODELS.prototype.validate = function(model, data, callback) {
	var me = this;
	console.log("MODEL "+model);
	if(me._models[model]) {
		var fields = me._models[model].fields;
		var length = Object.keys(fields).length;
		var cpt = 0;
		for(field in fields){
			me.validateField(fields[field], data[field], function(isValid){
				if(!isValid){
					return callback(false);
				}
				cpt += 1;
				if(cpt == length) {
					return callback(true);
				}
			});
		}
	}
};
