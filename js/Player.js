class Player {
  constructor(){

this.index = null;
this.distance = 0;
this.name = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player/player" + this.index;
    database.ref(playerIndex).set({
      distance: this.distance,
      name: this.name
    });
  }

  static getPlayerInfo(){

    var piref = database.ref('player');
    piref.on("value",function(data){

      ap = data.val();

    })

  }


}
