var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var config = require('../config/config.js');

exports.CRUD = function() {
	var me = this;
    me.connectionString = config.mongo.uri;
    me.initDb(function(){
        console.log("connected to "+ me.connectionString);
    });
};

exports.CRUD.prototype.initDb = function(callback){
    var me = this
	MongoClient.connect(me.connectionString, {
	    db: {
	        forceServerObjectId: true,
            numberOfRetries: 10,
            retryMiliSeconds: 1000
	    },
        server: {
            auto_reconnect: true,
            poolSize: 10,
            socketOptions:{
                keepAlive: 1
            }
        }
	},function(err, db) {
		me.db = db;
        callback();
	});
};

exports.CRUD.prototype.get = function(collection,query, callback){
    var pageSize = query.query['$limit'] ? parseInt(query.query['$limit']) : 20;
    var pageNumber = query.query['$page'] ? parseInt(query.query['$page']) : 1;
    var sortQuery = query.query['$sort'] ?  /*JSON.parse(*/query.query['$sort']/*)*/ : {};
    var skip = query.query['$skip'] ? query.query['$skip'] : pageSize * (pageNumber - 1);
    var id = undefined;
    if (query.params.id){
        id = ObjectId(query.params.id);
        query.query._id = id;
    }
    if(skip){
        delete(query.query['$skip']);
    }
    if(pageSize)
        delete(query.query['$limit']);
    if(pageNumber)
        delete(query.query['$page']);
    if(sortQuery)
        delete(query.query['$sort']);
    if(query.query.deleted)
        query.query.deleted = query.query.deleted ==="true";
    if(query.query.retweetedBool)
        query.query.retweetedBool = query.query.retweetedBool ==="true";

        var me = this;
        var results = [];
        var errors = [];
    	var stream = me.db.collection(collection).find(query.query).sort(sortQuery).skip(skip).limit(pageSize).stream();
        stream.on('data', function(data){
            results.push(data);
        }).on('close', function(){
            if (errors.length <= 0)
                errors = null;
            callback(errors, results);
        }).on('error', function(err){
            errors.push(err);
        });


	/*this.db.collection(collection).find(query.query).skip(pageSize * (pageNumber - 1)).limit(pageSize).toArray(function(err, items){
		callback(err, items);
	});*/
};

exports.CRUD.prototype.put = function(collection,query, callback){
	var tmp = query.body;
    console.log('put here');
    console.log(query);
    var tmpId = query.params.id ? new ObjectId(query.params.id) : (query.body._id ? new ObjectId(query.body._id) : new ObjectId());

    if(tmp._id) delete tmp._id;

	this.db.collection(collection).update({_id:tmpId},{$set:tmp},{upsert:false},function(err, items){
		if (items == '1'|| typeof items != 'object'){
			items = [tmpId];
		}
		callback(err, items);
	});

};

exports.CRUD.prototype.delete = function(collection,query, callback){
    if(!query.params.id && !query.body._id)
        return callback({msg: 'no id provided'}, null);
    var tmpId = query.params.id ? new ObjectId(query.params.id) : new ObjectId(query.body._id);

	this.db.collection(collection).remove({_id: tmpId},{justOne: true},function(err, items){

		if (items == '1'|| typeof items != 'object'){
			items = [tmpId];
		}
		callback(err, items);
	});
};

exports.CRUD.prototype.post = function(collection,query, callback){
    var tmp = query.body;
    var tmpId = query.params.id ? new ObjectId(query.params.id) : (query.body._id ?  new ObjectId(query.body._id) : new ObjectId());

    if(tmp._id) delete tmp._id;

    this.db.collection(collection).update({_id:tmpId},{$set:tmp},{upsert:true},function(err, items){
        if (items == '1'|| typeof items != 'object'){

            items = {_id: tmpId};
            console.log(items);
        }
        callback(err, items);
    });
};
