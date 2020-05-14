// all non-status moves have an acc of 70% and pwr of 40

/* playerPkmn */
let playerPkmn;

/* opponentPkmn */
let opponentPkmn;

/* stats */
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
  pound(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text("Treecko used POUND!");
    } else {
      $(".message").text("Treecko missed!");
    }
  }

  leer(pkmn) {
    let remainingDef = pkmn.getDef() - 3;
    $(".message").text("Treecko used LEER! Enemy defense lowered!");
  }

  absorb(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text(
        "Treecko used ABSORB! Treecko gained " + Math.round(dmg / 2) + " HP."
      );
      this.hp = this.hp + Math.round(dmg / 2);
    } else {
      $(".message").text("Treecko missed!");
    }
  }

  /* torchic's moves */
  scratch(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text("Torchic used SCRATCH!");
    } else {
      $(".message").text("Torchic missed!");
    }
  }

  torGrowl(pkmn) {
    let remainingDef = pkmn.getAtt() - 3;
    $(".message").text("Torchic used GROWL! Enemy attack lowered!");
  }

  ember(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text("Torchic used EMBER!");
    } else {
      $(".message").text("Torchic missed!");
    }
  }

  /* mudkip's moves */
  tackle(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text("Mudkip used TACKLE!");
    } else {
      $(".message").text("Mudkip missed!");
    }
  }

  mudGrowl(pkmn) {
    let remainingDef = pkmn.getAtt() - 3;
    $(".message").text("Mudkip used GROWL! Enemy attack lowered!");
  }

  watergun(pkmn) {
    /* pokemon's damage formula */
    let dmg =
      (((2 * this.lvl) / 5 + 2) * 40 * (this.att / pkmn.getDef())) / 50 + 2;
    let chance = Math.random() * 10;

    if (chance < 7) {
      // default ACC
      let remainingHp = pkmn.getHp() - Math.round(dmg);
      pkmn.setHp(remainingHp);
      $(".message").text("Mudkip used WATERGUN!");
    } else {
      $(".message").text("Mudkip missed!");
    }
  }
}

/* pkmn list */
const mudkip = new pkmn(5, 50, 70, 50, 50, 50, 40);
const treecko = new pkmn(5, 40, 45, 35, 65, 55, 70);
const torchic = new pkmn(5, 45, 60, 40, 70, 50, 45);

/* opponent generator */
let pkmnList = [mudkip, treecko, torchic];
let randomPoke = Math.round(Math.random() * 2);
opponentPkmn = pkmnList[randomPoke];

/* stage builder */
$(function () {
  $(".treecko").click(function () {
    /* hide intro and start game */
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    /* opponent generator */
    if (randomPoke == 0) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif"
      );
      $(".opponentName").text("Mudkip");
    } else if (randomPoke == 1) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif"
      );
      $(".opponentName").text("Treecko");
    } else {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif"
      );
      $(".opponentName").text("Torchic");
    }

    /* update js */
    playerPkmn = treecko;

    /* update player ui*/
    $(".playerPokemon").attr(
      "src",
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/treecko.gif"
    );
    $(".playerName").text("Treecko");
    $(".message").text("What should TREECKO do?");
    $(".move1").text("Pound");
    $(".move2").text("Leer");
    $(".move3").text("Absorb");
    $(".playerHp-count").text(playerPkmn.getHp());

    /* update opponent ui*/
    $(".opponentHp-count").text(opponentPkmn.getHp());
  });

  $(".mudkip").click(function () {
    /* hide intro and start game */
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    /* opponent generator */
    if (randomPoke == 0) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif"
      );
      $(".opponentName").text("Mudkip");
    } else if (randomPoke == 1) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif"
      );
      $(".opponentName").text("Treecko");
    } else {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif"
      );
      $(".opponentName").text("Torchic");
    }

    /* update js */
    playerPkmn = mudkip;

    /* update player ui*/
    $(".playerPokemon").attr(
      "src",
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mudkip.gif"
    );
    $(".playerName").text("Mudkip");
    $(".message").text("What should MUDKIP do?");
    $(".move1").text("Tackle");
    $(".move2").text("Growl");
    $(".move3").text("Water Gun");
    $(".playerHp-count").text(playerPkmn.getHp());

    /* update opponent ui*/
    $(".opponentHp-count").text(opponentPkmn.getHp());
  });

  $(".torchic").click(function () {
    /* hide intro and start game */
    $(".intro").hide();
    $(".box").show();
    $(".game").show();

    /* opponent generator */
    if (randomPoke == 0) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif"
      );
      $(".opponentName").text("Mudkip");
    } else if (randomPoke == 1) {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif"
      );
      $(".opponentName").text("Treecko");
    } else {
      $(".opponentPokemon").attr(
        "src",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif"
      );
      $(".opponentName").text("Torchic");
    }

    /* update js */
    playerPkmn = torchic;

    /* update player ui*/
    $(".playerPokemon").attr(
      "src",
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/torchic.gif"
    );
    $(".playerName").text("Torchic");
    $(".message").text("What should TORCHIC do?");
    $(".move1").text("Scratch");
    $(".move2").text("Growl");
    $(".move3").text("Ember");
    $(".playerHp-count").text(playerPkmn.getHp());

    /* update opponent ui*/
    $(".opponentHp-count").text(opponentPkmn.getHp());
  });
});

/* stats */
var userHP = playerPkmn.getHp();
var opHP = opponentPkmn.getHp();

/* moveCreator */
// player
function pMove1() {
  if (playerPkmn == torchic) {
    playerPkmn.scratch(opponentPkmn);
  }
  if (playerPkmn == mudkip) {
    playerPkmn.tackle(opponentPkmn);
  }
  if (playerPkmn == treecko) {
    playerPkmn.pound(opponentPkmn);
  }
  $(".opponentHp-count").text(opponentPkmn.getHp());
  $(".playerHp-count").text(playerPkmn.getHp());
}

function pMove2() {
  if (playerPkmn == torchic) {
    playerPkmn.torGrowl(opponentPkmn);
  }
  if (playerPkmn == mudkip) {
    playerPkmn.mudGrowl(opponentPkmn);
  }
  if (playerPkmn == treecko) {
    playerPkmn.leer(opponentPkmn);
  }
  $(".opponentHp-count").text(opponentPkmn.getHp());
  $(".playerHp-count").text(playerPkmn.getHp());
}

function pMove3() {
  if (playerPkmn == torchic) {
    playerPkmn.ember(opponentPkmn);
  }
  if (playerPkmn == mudkip) {
    playerPkmn.watergun(opponentPkmn);
  }
  if (playerPkmn == treecko) {
    playerPkmn.absorb(opponentPkmn);
  }
  $(".opponentHp-count").text(opponentPkmn.getHp());
  $(".playerHp-count").text(playerPkmn.getHp());
}

// enemy
function enemyMove() {
  if (opponentPkmn == torchic) {
    let randMove = Math.round(Math.random() * 2);
    if (randMove == 0) {
      opponentPkmn.scratch(playerPkmn);
    } else if (randMove == 1) {
      opponentPkmn.torGrowl(playerPkmn);
    } else {
      opponentPkmn.ember(playerPkmn);
    }
  }
  if (opponentPkmn == mudkip) {
    let randMove = Math.round(Math.random() * 2);
    if (randMove == 0) {
      opponentPkmn.tackle(playerPkmn);
    } else if (randMove == 1) {
      opponentPkmn.mudGrowl(playerPkmn);
    } else {
      opponentPkmn.watergun(playerPkmn);
    }
  }
  if (opponentPkmn == treecko) {
    let randMove = Math.round(Math.random() * 2);
    if (randMove == 0) {
      opponentPkmn.pound(playerPkmn);
    } else if (randMove == 1) {
      opponentPkmn.leer(playerPkmn);
    } else {
      opponentPkmn.absorb(playerPkmn);
    }
  }
  $(".opponentHp-count").text(opponentPkmn.getHp());
  $(".playerHp-count").text(playerPkmn.getHp());
}

/* end of round */
function endRound() {
  $(".opponentHp-count").text(opponentPkmn.getHp());
  $(".playerHp-count").text(playerPkmn.getHp());
  if (playerPkmn == torchic) {
    $(".message").text("What should TORCHIC do?");
  }
  if (playerPkmn == mudkip) {
    $(".message").text("What should MUDKIP do?");
  }
  if (playerPkmn == treecko) {
    $(".message").text("What should TREECKO do?");
  }
  if (playerPkmn.getHp() < 0) {
    $(".game").hide();
    $(".box").hide();
    $(".ending").show();
    $(".endingtextbox").text("Your pokemon fainted! Game over.");
  } else if (opponentPkmn.getHp() < 0) {
    $(".game").hide();
    $(".box").hide();
    $(".ending").show();
    $(".endingtextbox").text("Enemy pokemon fainted! You win!");
  }
}