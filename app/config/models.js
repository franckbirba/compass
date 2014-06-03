"use strict";

angular.module("models", [])

.constant("MODELS", {
    indices:{
        title:'Indices',
        genYears:true,
        cols: [
        {
            name: 'name'
        }
        ],
        rows: [],
        action: 'new indice',
        url: 'ind',
        noProject: true,
        icon: 'glyphicon glyphicon-tree-deciduous'
    },
    fluids:{
        title:'Fluid',
        genYears: true,
        cols: [
        {
            name: 'name'
        }
        ],
        rows: [],
        action: 'new fluid',
        url: 'fld',
        icon: 'glyphicon glyphicon-tree-deciduous'
    },
    fluidType:{
        title: "FluidType",
        url:"fldt",
        cols: [
            {
            name: 'name'
            }
        ],
             rows: [
            {
                _id: 'elec',
                name: 'Electricité'
            },
            {
                _id: 'chaleur',
                name: 'Chaleur'
            },
            {
                _id: 'eau',
                name: 'Eau'
            }
        ]
    },
    vendor:{
        title:'Provider',
        url:"pvr",
        cols: [
            {
            name: 'name'
            }
        ],
             rows: [
            {
                _id: 'edf',
                name: 'EDF'
            },
            {
                _id: 'gdf',
                name: 'GDF'
            }
        ]
    },
    lbtype: {
        rows: [

        ]
    },
    loadbalancer: {
        title:'Load Balancer',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'servers',
            link: 'server',
            type: 'multi'
        },
        {
            name: 'private',
            type: 'checkbox'
        }
        ],
        rows: [],
        action: 'new load balancer',
        url: 'lb'
    },
    app : {
        title:'Apps',
        cols: [
        {
            name: 'name'
        }
        ],
        rows: [],
        action: 'new app',
        url: 'app',
        icon: 'glyphicon glyphicon-phone'
    },
    config : {
        title:'App configs',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'app',
            link: 'app',
            type: 'single'
        },
        {
            name: 'subdomain'
        },
        {
            name: 'domain',
            link: 'domain',
            type: 'single'
        },
        {
            name: 'sourceUrl'
        },
        {
            name: 'startFilePath'
        },
        {
            name: 'version'
        },
        {
            name: 'backendURL'
        },
        {
            name: 'port'
        },
        {
            name: 'host'
        }
        ],
        rows: [],
        action: 'new config',
        url: 'cfg',
        icon: 'glyphicon glyphicon-wrench'
    },
    keypair : {
        title:'Keypairs',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'sshkey'
        }
        ],
        rows: [],
        action: 'new keypair',
        url: 'kpr',
        icon: 'glyphicon glyphicon-briefcase'
    },
    db : {
        title:'Databases',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'dbtype',
            link: 'dbtype',
            type: 'single'
        },
        {
            name: 'dbpath'
        },
        {
            name: 'config'
        }
        ],
        rows: [],
        action: 'new database',
        url: 'db',
        icon: 'glyphicon glyphicon-tasks'
    },
    server : {
        title:'Servers',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'env',
            link: 'env',
            type: 'single'
        },
        {
            name: 'apps',
            link: 'config',
            type: 'multi'
        },
        {
            name: 'power',
            link: 'power',
            type: 'single'
        },
        {
            name: 'serverType',
            link: 'type',
            type: 'single'
        },
        {
            name: 'running',
            type: 'checkbox'
        },
        {
            name: 'action',
            type: 'toggleaction',
            states: {
                running: {
                    action: 'stop',
                    state: true,
                    icon: 'off'
                },
                stopped: {
                    action: 'start',
                    state: false,
                    icon: 'play-circle'
                }
            }
        }
        ],
        rows: [],
        action: 'new server',
        url: 'srv',
        icon: 'glyphicon glyphicon-hdd'
    }, 
    domain : {
        title:'Domain configs',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'domainroot'
        }
        ],
        rows: [],
        action: 'new domain',
        url: 'dmn',
        icon: 'glyphicon glyphicon-globe'
    },
    power : {
        rows: [
        {
            _id: 'micro',
            name: 'micro'
        },
        {
            _id: 'medium',
            name: 'medium'
        },
        {
            _id: 'large',
            name: 'large'
        }
        ]
    },
    type: {
        rows: [
        {
            _id: 'nodejs',
            name: 'nodejs'
        },
        {
            _id: 'ruby',
            name: 'ruby'
        },
        {
            _id: 'varnish',
            name: 'varnish'
        },
        {
            _id: 'apache',
            name: 'apache'
        },
        {
            _id: 'ubuntu',
            name: 'ubuntu'
        },
        {
            _id: 'lamp',
            name: 'lamp'
        },
        {
            _id: 'mongodb',
            name: 'mongodb'
        },
        {
            _id: 'redis',
            name: 'redis'
        },
        {
            _id: 'couchbase',
            name: 'couchbase'
        }
        ]
    },
    dbtype: {
        rows: [
        {
            _id: 'mongodb',
            name: 'mongodb'
        },
        {
            _id: 'redis',
            name: 'redis'
        },
        {
            _id: 'couchbase',
            name: 'couchbase'
        }
        ]
    },
    deployment : {
        title:'Deployments',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'apps',
            link: 'config',
            type: 'multi'
        },
        {
            name: 'config'
        },
        {
            name: 'cloud',
            link: 'cloud',
            type: 'single'
        },
        {
            name: 'databases',
            link: 'db',
            type: 'multi'
        },
        {
            name: 'packages',
            link: 'npm',
            type: 'multi'
        },
        {
            name: 'keypair',
            link: 'keypair',
            type: 'single'
        },
        {
            name: 'action',
            type: 'action',
            action: 'apply'
        }
        ],
        rows: [],
        action: 'new deployment',
        url: 'dpm',
        icon: 'glyphicon glyphicon-cloud-upload'
    },
    npm : {
        title:'Npm packages',
        cols: [
        {
            name: 'name'
        },
        {
            name: 'version'
        }
        ],
        rows: [],
        action: 'new pck',
        url: 'npm',
        icon: 'glyphicon glyphicon-folder-close'
    }
})
;