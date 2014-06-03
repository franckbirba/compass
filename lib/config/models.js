"use strict";

angular.module("models", [])

.constant("MODELS", {
    event:{
        title:'Event',
        cols: [
        {
            name: 'name'
        }
        ],
        rows: [],
        action: 'new event',
        url: 'event',
        noProject: true
    }
})
;