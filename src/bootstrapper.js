import _ from 'lodash';
import hljs from 'highlightjs';
import $ from 'jquery';


export function bootstrapper() {

    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    function log() {
        console.log('Hello World!');
    }

    function err() {
        console.error('This is an error log. Draws attention!');
    }

    function warn() {
        console.warn('Warning! this is a warning message');
    }

    function assert() {
        var count = 100;
        console.assert(count < 100, 'Count is not less than 100');
    }

    function stackMessages() {
        var i = 0;
        for (i = 0; i < 10; i++) {
            console.log('Single message, logged 10 times');
        }

    }

    function groupLog() {
        var user = "jsmith",
            authenticated = true,
            authorized = true;
        // Top-level group
        console.group("Authenticating user '%s'", user);
        if (authenticated) {
            console.log("User '%s' was authenticated", user);
            // Start nested group
            console.group("Authorizing user '%s'", user);
            if (authorized) {
                console.log("User '%s' was authorized.", user);
            }
            // End nested group
            console.groupEnd();
        }
        // End top-level group
        console.groupEnd();
        console.log("A group-less log trace.");

    }

    function logGeneral() {
        var people = [
            {
                "Value": "551d45824eb07d2e530cb409",
                "Name": "laboris sit fugiat",
                "Age": 20
  },
            {
                "Value": "551d4582a617fd5e54680048",
                "Name": "cillum labore amet",
                "Age": 47
  },
            {
                "Value": "551d45829c008436df84c691",
                "Name": "minim dolore esse",
                "Age": 34
  },
            {
                "Value": "551d4582f397aa504e04dbda",
                "Name": "adipisicing aute eiusmod",
                "Age": 48
  },
            {
                "Value": "551d4582ae9a978169c9edaf",
                "Name": "ea enim eu",
                "Age": 27
  },
            {
                "Value": "551d45826eeb72207740e65e",
                "Name": "proident adipisicing consequat",
                "Age": 34
  },
            {
                "Value": "551d45823dee514210659356",
                "Name": "est et laborum",
                "Age": 11
  },
            {
                "Value": "551d4582bcc97611ee2318b3",
                "Name": "pariatur proident qui",
                "Age": 38
  },
            {
                "Value": "551d45824ae1fe7a26712650",
                "Name": "nulla magna eu",
                "Age": 50
  },
            {
                "Value": "551d45825c7aed0725489504",
                "Name": "fugiat sit aliqua",
                "Age": 30
  }
];

        console.log(people);


    }

    function logTable() {
        var people = [
            {
                "Value": "551d45824eb07d2e530cb409",
                "Name": "laboris sit fugiat",
                "Age": 20
  },
            {
                "Value": "551d4582a617fd5e54680048",
                "Name": "cillum labore amet",
                "Age": 47
  },
            {
                "Value": "551d45829c008436df84c691",
                "Name": "minim dolore esse",
                "Age": 34
  },
            {
                "Value": "551d4582f397aa504e04dbda",
                "Name": "adipisicing aute eiusmod",
                "Age": 48
  },
            {
                "Value": "551d4582ae9a978169c9edaf",
                "Name": "ea enim eu",
                "Age": 27
  },
            {
                "Value": "551d45826eeb72207740e65e",
                "Name": "proident adipisicing consequat",
                "Age": 34
  },
            {
                "Value": "551d45823dee514210659356",
                "Name": "est et laborum",
                "Age": 11
  },
            {
                "Value": "551d4582bcc97611ee2318b3",
                "Name": "pariatur proident qui",
                "Age": 38
  },
            {
                "Value": "551d45824ae1fe7a26712650",
                "Name": "nulla magna eu",
                "Age": 50
  },
            {
                "Value": "551d45825c7aed0725489504",
                "Name": "fugiat sit aliqua",
                "Age": 30
  }
];

        console.table(people);


    }

    function logWithSubstitution() {
        //string and integer
        console.log("%s has %d points", "Sam", 100);
        //string and integer
        console.log("%s has %i points", "Sam", 100);
        //string and DOM element expandable
        console.log("%s has %o points", "Sam", $('#logWithSubstitution'));
        //string and expandable JSON
        console.log("%s has %O points", "Sam", {
            name: 'hello',
            last: 'world'
        });
        //string and style
        console.log("%s has %c points", "Sam", 'background-color: red');


    }


    function timeLog() {
        console.time("Array initialize");
        var array = new Array(1000000);
        for (var i = array.length - 1; i >= 0; i--) {
            array[i] = new Object();
        };
        console.timeEnd("Array initialize");
    }

    function addResult() {
        var name = 'Demo',
            result = 100;
        for(var i = 0; i < 100; i ++){
            setTimeout(function(){
                if(i % 5 === 0){
                console.timeStamp("Adding result " + i);        
            }
        
            var text = name + ': ' + result;
            var results = document.getElementById("results");
            results.innerHTML += (text + "<br>");    
                
            }, 1000);
            
        }
        
    }
    
    function debugging(){
        var people = [
  {
    "_id": "551d4b3386e8174f2173e423",
    "index": 0,
    "guid": "3be20dd1-c365-4987-a9e6-e9503732fdd5",
    "isActive": false,
    "balance": "$1,962.27",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Hewitt Kelly",
    "gender": "male",
    "company": "PREMIANT",
    "email": "hewittkelly@premiant.com",
    "phone": "+1 (919) 587-2891",
    "address": "655 Clymer Street, Grazierville, Rhode Island, 230",
    "about": "Proident laboris dolor Lorem elit occaecat et exercitation. Occaecat anim sunt irure irure amet enim occaecat occaecat laborum Lorem id. Aliquip et non eu dolore mollit deserunt. Non veniam magna ut minim commodo pariatur esse.\r\n",
    "registered": "2014-03-27T13:40:34 +04:00",
    "latitude": 54.079888,
    "longitude": 111.534793,
    "tags": [
      "consequat",
      "mollit",
      "qui",
      "do",
      "labore",
      "nisi",
      "commodo"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Earnestine Sweeney"
      },
      {
        "id": 1,
        "name": "Patty Conway"
      },
      {
        "id": 2,
        "name": "Craig David"
      }
    ],
    "greeting": "Hello, Hewitt Kelly! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "551d4b3335245c62437eaba6",
    "index": 1,
    "guid": "3c216cff-ba5f-46bb-a524-5e347dd2d0fd",
    "isActive": false,
    "balance": "$3,892.09",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Simpson George",
    "gender": "male",
    "company": "EXTREMO",
    "email": "simpsongeorge@extremo.com",
    "phone": "+1 (963) 439-3963",
    "address": "267 Sutter Avenue, Jeff, South Carolina, 9083",
    "about": "Consequat amet deserunt excepteur dolore nostrud duis eiusmod. Pariatur adipisicing sit laboris occaecat amet velit est ex nisi ullamco quis amet consectetur. Enim ea ut fugiat non laboris anim ea qui dolore.\r\n",
    "registered": "2014-03-04T16:02:44 +05:00",
    "latitude": 61.633514,
    "longitude": 50.425464,
    "tags": [
      "incididunt",
      "laboris",
      "qui",
      "dolore",
      "cupidatat",
      "ad",
      "duis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lucas Dixon"
      },
      {
        "id": 1,
        "name": "Marguerite Mcclure"
      },
      {
        "id": 2,
        "name": "Priscilla Barnes"
      }
    ],
    "greeting": "Hello, Simpson George! You have 4 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "551d4b33c24838749c3064e1",
    "index": 2,
    "guid": "da873907-7966-46f3-8dc4-3b6624edb145",
    "isActive": true,
    "balance": "$2,236.73",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "blue",
    "name": "Leanna Fischer",
    "gender": "female",
    "company": "QNEKT",
    "email": "leannafischer@qnekt.com",
    "phone": "+1 (964) 512-2739",
    "address": "877 Rockaway Avenue, Cedarville, Maryland, 5740",
    "about": "Nulla deserunt Lorem aute officia commodo. Do cupidatat aute deserunt incididunt consectetur laboris proident aliquip magna fugiat. Velit tempor officia fugiat eiusmod. Amet irure Lorem labore aliquip commodo. Eiusmod laboris dolor officia do velit exercitation magna minim non labore eiusmod et fugiat.\r\n",
    "registered": "2014-12-27T12:04:31 +05:00",
    "latitude": -29.569523,
    "longitude": -65.220718,
    "tags": [
      "esse",
      "nulla",
      "sit",
      "ipsum",
      "incididunt",
      "do",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Clare Grimes"
      },
      {
        "id": 1,
        "name": "Banks Moses"
      },
      {
        "id": 2,
        "name": "Hurst Jenkins"
      }
    ],
    "greeting": "Hello, Leanna Fischer! You have 1 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "551d4b33fc2dc9466fd7dcfd",
    "index": 3,
    "guid": "3b77e6a5-2593-401e-a2d9-f65d0d3f8a03",
    "isActive": false,
    "balance": "$3,541.73",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Araceli Kemp",
    "gender": "female",
    "company": "IMAGINART",
    "email": "aracelikemp@imaginart.com",
    "phone": "+1 (919) 530-3372",
    "address": "701 Lake Street, Elfrida, New Jersey, 7681",
    "about": "Officia id dolore consequat est irure non exercitation laborum sit Lorem aute aliqua eu. Ex ipsum tempor sunt esse sunt. Excepteur velit consectetur cupidatat ullamco irure mollit cillum ullamco excepteur. Nisi irure aliqua deserunt ullamco elit cupidatat consectetur et consectetur deserunt voluptate. Mollit do id aliqua consequat. Aliquip incididunt exercitation veniam sit officia amet. Enim cupidatat proident exercitation deserunt aute ad Lorem reprehenderit.\r\n",
    "registered": "2014-09-05T03:46:17 +04:00",
    "latitude": 89.89797,
    "longitude": 70.039924,
    "tags": [
      "ad",
      "occaecat",
      "adipisicing",
      "enim",
      "adipisicing",
      "laboris",
      "veniam"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Calderon Hurley"
      },
      {
        "id": 1,
        "name": "Hodges Hull"
      },
      {
        "id": 2,
        "name": "Bettie Roy"
      }
    ],
    "greeting": "Hello, Araceli Kemp! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "551d4b3327cd9522b4b4fee5",
    "index": 4,
    "guid": "5df2e516-28ad-425e-a2fd-3437e075de52",
    "isActive": true,
    "balance": "$2,950.11",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": "Renee Horne",
    "gender": "female",
    "company": "SNOWPOKE",
    "email": "reneehorne@snowpoke.com",
    "phone": "+1 (954) 478-2713",
    "address": "587 Garnet Street, Tedrow, California, 1209",
    "about": "Eiusmod id velit voluptate ipsum laboris eu in. Labore ut dolor fugiat amet est adipisicing ullamco. Ad exercitation Lorem officia eiusmod culpa duis nostrud ad.\r\n",
    "registered": "2014-05-22T14:19:00 +04:00",
    "latitude": -38.611291,
    "longitude": 1.824762,
    "tags": [
      "eu",
      "elit",
      "ut",
      "Lorem",
      "ad",
      "in",
      "culpa"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Delacruz Meyers"
      },
      {
        "id": 1,
        "name": "Holt Avila"
      },
      {
        "id": 2,
        "name": "Kramer Montoya"
      }
    ],
    "greeting": "Hello, Renee Horne! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "551d4b33c06d37875d274efb",
    "index": 5,
    "guid": "6250e1d0-a4d2-4a9a-ad7e-d33104799278",
    "isActive": true,
    "balance": "$2,125.34",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": "Solomon Olsen",
    "gender": "male",
    "company": "DEEPENDS",
    "email": "solomonolsen@deepends.com",
    "phone": "+1 (820) 523-2858",
    "address": "373 Portal Street, Umapine, Nebraska, 1828",
    "about": "Proident dolor eiusmod pariatur excepteur non. Sunt proident officia commodo ipsum veniam anim duis. Eiusmod culpa magna do pariatur quis sit quis velit magna nostrud. Ullamco consequat tempor enim et quis. Anim labore anim do sint.\r\n",
    "registered": "2015-01-30T19:52:46 +05:00",
    "latitude": -2.336111,
    "longitude": -138.840846,
    "tags": [
      "ea",
      "non",
      "sunt",
      "in",
      "anim",
      "dolore",
      "labore"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Forbes Chapman"
      },
      {
        "id": 1,
        "name": "Patti Bates"
      },
      {
        "id": 2,
        "name": "Ester Higgins"
      }
    ],
    "greeting": "Hello, Solomon Olsen! You have 2 unread messages.",
    "favoriteFruit": "banana"
  }
];
        
        debugger;
        
    }

    $('#log').on('click', log);
    $('#error').on('click', err);
    $('#warn').on('click', warn);
    $('#assert').on('click', assert);
    $('#stack').on('click', stackMessages);

    $('#group').on('click', groupLog)

    $('#logGeneral').on('click', logGeneral);
    $('#logTable').on('click', logTable);

    $('#logWithSubstitution').on('click', logWithSubstitution);

    $('#timeLog').on('click', timeLog);
    $('#timeline').on('click', addResult);
    
    $('#debugging').on('click', debugging);
}