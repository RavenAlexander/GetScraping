/* I keep getting some sort of error 'Cant set headers after they are sent' when I run locally. 
Have tried to research and correct but unfortunately I don't know how to solve this 
on my own without completely rewriting all the logic and all routes. 
I used the Solved video as a reference for this project but the code 
appears to be outdated... So I've greentexted/pseudocoded a lot of this for now. */


var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb) {
        scrape(function(data) {
            var articles = data;
            for (var i=0; i < articles.length; i++) {
                articles[i].date = makeDate();
                //articles[i].saved = false;
            }

//             Headline.collection.insertMany(articles, {ordered: false}, function(err, docs) {
//                 cb(err, docs);
//             });
//         });
//     },
//     delete: function(query, cb) {
//         Headline.remove(query, cb);
//     },
//     get: function(query, cb) {
//         Headline.find(query)
//         .sort({
//             _id: -1
//         })
//         .exec(function(err, doc) {
//             cb(doc);
//         });
//     }, 
//     update: function(query, cb) {
//         Headline.update({_id: query._id}, {
//             $set: query
//         }, {}, cb);
//
        }
        )}
};