//general purpose server code
Meteor.publish('snippets', function(){
    return Snippets.find({owner:this.userId});
    //this.userId is the logged in user ID for the publish "session"
})

Snippets.allow({
    insert: function(userId, fields){
        return(userId); //make sure user is logged in
    }
})
