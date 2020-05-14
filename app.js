// all non-status moves have an acc of 70% and pwr of 40
let pkmnList = ["Treecko", "Mudkip", "Torchic"];
var userHP = 100;
var opHP = 100;
playerMove = 0;

/* default constructor */
class pkmn {
  constructor(lvl, hp, att, def, spAtt, spDef, spd) {
    this.lvl = lvl;
    this.hp = hp;
    this.att = att;
    this.def = def;
    this.spAtt = spAtt;
    this.spDef = spDef;
    this.spd = spd;
  }

  // getter
  getLvl() {
    return this.lvl;
  }
  getHp() {
    return this.hp;
  }
  getAtt() {
    return this.att;
  }
  getDef() {
    return this.def;
  }
  getSpAtt() {
    return this.spAtt;
  }
  getSpDef() {
    return this.spDef;
  }
  getSpd() {
    return this.spd;
  }

  // setter
  setHp(hp) {
    this.hp = hp;
  }
  setAtt(att) {
    this.att = att;
  }
  setDef(def) {
    this.def = def;
  }
  setSpAtt(spAtt) {
    this.setSpAtt = spAtt;
  }
  setSpDef(spDef) {
    this.spDef = spDef;
  }
  setSpd(spd) {
    this.spd = spd;
  }

  /* treecko's moves */

}

/* pkmn list */
const mudkip = new pkmn(5, 50, 70, 50, 50, 50, 40);
const treecko = new pkmn(5, 40, 45, 35, 65, 55, 70);
const torchic = new pkmn(5, 45, 60, 40, 70, 50, 45);

/* stage builder */
$(function() {
  $(".treecko").click(function(){
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    $(".playerPokemon").attr("src", "https://img.pokemondb.net/sprites/black-white/anim/back-normal/treecko.gif")

    $(".playerName").text("Treecko")

    $(".message").text("What should TREECKO do?")
  })

  $(".mudkip").click(function(){
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    $(".playerPokemon").attr("src", "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mudkip.gif")

    $(".playerName").text("Mudkip")

    $(".message").text("What should MUDKIP do?")
  })

  $(".torchic").click(function(){
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    $(".playerPokemon").attr("src", "https://img.pokemondb.net/sprites/black-white/anim/back-normal/torchic.gif")

    $(".playerName").text("Torchic")

    $(".message").text("What should TORCHIC do?")
  })
})

/* moveHierarchy */


/* mudkip's moves */
function waterGun() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor(Math.random() * 10 + 1); // miss rate
    if (miss == 1) {
      document.getElementById("message").innerHTML =
        " Blastoises attack missed! ";
    } else {
      document.getElementById("message").innerHTML =
        " Blastoise used water cannon!"; // attack
      var critical = Math.floor(Math.random() * 10 + 1); // critical
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 30; // yes critical
        }
      } else {
        opHP = opHP - 30; // no critical
      }
      if (opHP < 0) {
        opHP = 0;
      } //faint
      document.getElementById("apHP").innerHTML = opHP; // update hp
      if (opHP == 0) {
        document.getElementById("message").innerHTML = " Charizard fainted!"; // update message
      }
    }
    //wait();
    playerMove = 1; // update player move
  }
}
function growl() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor(Math.random() * 10 + 1);
    if (miss == 1) {
      document.getElementById("message").innerHTML =
        " Blastoise's attack missed!";
    } else {
      document.getElementById("message").innerHTML =
        " Blastoise used water pulse!";
      var critical = Math.floor(Math.random() * 10 + 1);
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 20;
        }
      } else {
        opHP = opHP - 20;
      }
      if (opHP < 0) {
        opHP = 0;
      }
      document.getElementById("apHP").innerHTML = opHP;
      //document.getElementById("message").innerHTML = " Charizard2 "
      if (opHP == 0) {
        document.getElementById("message").innerHTML = " Charizard fainted! ";
      }
    }
    //wait();
    playerMove = 1;
  }
}
function tackle() {
  if (playerMove == 0 && userHP != 0) { // initial check
    
    var miss = Math.floor(Math.random() * 10 + 1); 
    if (miss == 1) {
      document.getElementById("message").innerHTML =
        " Mudkip's attack missed!";
    } else {
      document.getElementById("message").innerHTML = " Blastoise used tackle!";
      var critical = Math.floor(Math.random() * 10 + 1);
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 5;
        }
      } else {
        opHP = opHP - 5;
      }
      if (opHP < 0) {
        opHP = 0;
      }
      document.getElementById("apHP").innerHTML = opHP;
      //document.getElementById("message").innerHTML = " Charizard4 "
      if (opHP == 0) {
        document.getElementById("message").innerHTML = " Charizard fainted!";
      }
    }
    //wait();
    playerMove = 1;
  }
}

/* torhcic's moves */
function scratch() {
  var miss = Math.floor(Math.random() * 10 + 1); // miss rate
  if (miss == 1) {
    document.getElementById("message").innerHTML =
      " Charizard's attack missed!"; // attack missed
  } else {
    document.getElementById("message").innerHTML =
      " Charizard used flame thrower!"; // attack
    var critical = Math.floor(Math.random() * 10 + 1); // critical
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        // yes critical
        userHP = userHP - 30;
      }
    } else {
      userHP = userHP - 30; // no critical
    }
    if (userHP < 0) {
      userHP = 0;
    } // faint
    document.getElementById("myHP").innerHTML = userHP; // update hp
    if (userHP == 0) {
      // fainted
      document.getElementById("message").innerHTML = " Blastoise fainted!"; // fainted
    }
  }
}
function growl() {
  var miss = Math.floor(Math.random() * 10 + 1);
  if (miss == 1) {
    document.getElementById("message").innerHTML =
      " Charizard's attack missed!";
  } else {
    document.getElementById("message").innerHTML =
      " Charizard used dragon claw!";
    var critical = Math.floor(Math.random() * 10 + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 20;
      }
    } else {
      userHP = userHP - 20;
    }
    if (userHP < 0) {
      userHP = 0;
    }
    document.getElementById("myHP").innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById("message").innerHTML = " Blastoise fainted!";
    }
  }
}
function ember() {
  var miss = Math.floor(Math.random() * 10 + 1);
  if (miss == 1) {
    document.getElementById("message").innerHTML =
      " Charizard's attack missed!";
  } else {
    document.getElementById("message").innerHTML = " Charizard used ember!";
    var critical = Math.floor(Math.random() * 10 + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 10;
      }
    } else {
      userHP = userHP - 10;
    }
    if (userHP < 0) {
      userHP = 0;
    }
    document.getElementById("myHP").innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById("message").innerHTML = " Blastoise fainted!";
    }
  }
}

/* treecko's moves */

/* turn */
// function compPokemon() {
//   // continue
//   if (playerMove == 1 && opHP != 0) {
//     // whos move
//     var move = Math.floor(Math.random() * 4 + 1); // choose move randomly
//     opAttacks[move](); // call attack from array
//     playerMove = 0; // update player move
//   }
// }
