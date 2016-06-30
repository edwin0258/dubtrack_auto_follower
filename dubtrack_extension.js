// - Written by edwin0258 - version 1 - //

//to keep track of how many additional people followed in a room
followed = 0;

var roomFunctions = {
  getRoomId: function(){
    var name = document.URL.split('/')[4];
    $.get('https://api.dubtrack.fm/room/' + name.toString()).then(function(result){
        var room_id = result.data._id;
        //once room id is aquired get users in room
        roomFunctions.getRoomUsers(room_id);
    });
  },
  getRoomUsers: function(room_id){
    $.get('https://api.dubtrack.fm/room/' + room_id +'/users').then(function(result){
      result.data.forEach(function(data_item){
        roomFunctions.followUser(data_item.userid)
      })
      console.log(followed);
    })
    // get how many users you have followed
    $.get('https://api.dubtrack.fm/user/' + your_id_here.toString() + '/follows').then(function(result){
	    console.log(result.data.length)
    });
    /*$.post('https://api.dubtrack.fm/chat/'+ room_id, {
      message: "hi"
    }, function(result){
      console.log(result)
    })*/ //Will post a message hi for you
  },
  followUser: function(user_id){
    $.post('https://api.dubtrack.fm/user/' + user_id + '/following').then(function(result){
      console.log(result)
      followed+=1;
      console.log(followed)
    }, function(err){
      console.log("Allready followed")
    })
  }
}

window.onload = function(){
  followed = 0;
  roomFunctions.getRoomId();
  //console.log(room_id)
  roomFunctions.getRoomUsers();
}



/*
function getSongInfo(){
  $.get("https://api.dubtrack.fm/room/" + room_id + "/playlist/active").then(function(result) {
      console.log(result.data.songInfo.name)
      console.log(result.data.songInfo.fkid)
  }, function(err) {
      console.log(err);
  });
}
*/
//Used for retrieving song information of room