(()=>{"use strict";class t extends Phaser.Scene{constructor(t,e){super(),this.playPreroll=t,this.callback=e}preload(){try{document.getElementsByClassName("grecaptcha-badge")[0].style.opacity=100}catch(t){console.log("captcha hasnt loaded yet")}}create(){this.footerdone=!1,this.redirect=!1;var t=!0;try{window.localStorage}catch(e){t=!1}try{this.music=this.sound.add("openingsound",{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!0,delay:0}),this.music.play()}catch(t){return}this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),this.background=this.add.image(0,0,"opening").setOrigin(0).setScrollFactor(0,0).setScale(2),this.footer=this.add.dom(this.canvas.width/2,this.canvas.height).createFromCache("footer").setOrigin(.5).setScale(this.mobile?1:2),this.footer.y=this.canvas.height+2*this.footer.height,this.background.displayHeight=this.canvas.height,this.background.displayWidth=this.canvas.width,this.nameBox=this.add.dom(this.canvas.width/2,0).createFromCache("title"),this.showPromo&&(this.promo=this.add.dom(0,0).createFromCache("promo"),this.promo.x=this.canvas.width/2,this.promo.y=this.canvas.height/2,this.promo.getChildByName("close").onclick=()=>{this.promo.destroy()}),this.input.keyboard.on("keydown",function(t){this.nameBox.getChildByName("name")&&(this.nameBox.getChildByName("name").value.length>=16||this.nameBox.getChildByName("name")!==document.activeElement)||("a"==t.key||"s"==t.key||"d"==t.key||"w"==t.key||32==t.which)&&(this.nameBox.getChildByName("name").value+=t.key)}.bind(this)),this.nameBox.getChildByName("name").value=t&&window.localStorage.getItem("oldName")?window.localStorage.getItem("oldName"):"",this.done=!1,this.text=this.add.text(this.canvas.width/2,0,"Swordbattle.io",{fontSize:"64px",fill:"#000000"}).setOrigin(.5);const e=()=>{let e=this.nameBox.getChildByName("name");if(e&&""!=e.value&&!this.done){this.done=!0,t&&window.localStorage.setItem("oldName",e.value);var i=e.value;this.playPreroll&&void 0!==aiptag.adplayer?(this.nameBox.getChildByName("btn").innerHTML="Connecting..",this.nameBox.getChildByName("btn").style.backgroundColor="grey",this.music.stop(),document.getElementById("admessage").style.display="block",aiptag.cmd.player.push((()=>{aiptag.adplayer=new aipPlayer({AD_WIDTH:960,AD_HEIGHT:540,AD_FULLSCREEN:!0,AD_CENTERPLAYER:!1,LOADING_TEXT:"loading advertisement",PREROLL_ELEM:function(){return document.getElementById("preroll")},AIP_COMPLETE:t=>{this.nameBox.destroy(),document.getElementById("game").focus(),document.getElementById("admessage").style.display="none",this.callback(i,this.music),console.log("Preroll Ad Completed: "+t)}})})),aiptag.cmd.player.push((()=>{aiptag.adplayer.startPreRoll()}))):(this.nameBox.destroy(),this.callback(i,this.music))}};this.nameBox.getChildByName("btn").onclick=()=>{this.promo&&this.promo.visible||e()},this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.promo&&this.promo.visible?this.promo.destroy():e()}));const i=()=>{this.game.scale.resize(this.canvas.width,this.canvas.height),this.background.displayHeight=this.canvas.height,this.background.displayWidth=this.canvas.width,this.nameBox.x=this.canvas.width/2,this.text.x=this.canvas.width/2;var t=this.canvas.height-this.footer.height;this.canvas.height<384&&(t=this.canvas.height-this.footer.height/2),this.footerdone&&(this.text.y=this.canvas.height/4),this.footerdone&&(this.footer.y=t);try{this.text.setFontSize(this.canvas.width/10)}catch(t){console.log("font size not set")}this.footer.x=this.canvas.width/2};window.addEventListener("resize",i,!1),i();var s=this.canvas.height-this.footer.height;this.canvas.height<384&&(s=this.canvas.height-this.footer.height/2),this.tweens.add({targets:this.footer,y:s,onComplete:()=>{this.footerdone=!0},duration:1e3,ease:"Power2"}),this.tweens.add({targets:this.text,y:this.canvas.height/4,duration:1e3,ease:"Power2"})}update(t){this.nameBox.y=this.mobile?this.text.y+this.text.height/2:this.text.y+this.text.height;var e=this.canvas.height-this.footer.height;this.canvas.height<384&&(e=this.canvas.height-this.footer.height/2),this.footerdone&&this.footer.y!=e&&(this.footer.y=e)}}const e=t,i=class{constructor(t,e,i,s,a,h=!1){this.custom=h,this.bar=new Phaser.GameObjects.Graphics(t).setDepth(99),this.x=e,this.y=i,this.maxValue=100,this.value=0,this.toLerp=0,this.height=a,this.width=s,t.add.existing(this.bar)}setHealth(t){var e,i;return this.value=(e=t,0,i=this.maxValue,Math.min(Math.max(e,0),i)),this.draw(),0===this.value}setLerpValue(t){this.toLerp=t}draw(){this.bar.clear(),this.bar.fillStyle(0),this.bar.fillRect(this.x,this.y,this.width,this.height),this.bar.fillStyle(16777215),this.bar.fillRect(this.x+2,this.y+2,this.width-4,this.height-4),this.custom?this.bar.fillStyle(65535):this.value/this.maxValue<.3?this.bar.fillStyle(16711680):this.value/this.maxValue<.5?this.bar.fillStyle(16776960):this.bar.fillStyle(65280);var t=Math.floor((this.width-4)*(this.value/this.maxValue));this.bar.fillRect(this.x+2,this.y+2,t,this.height-4)}update(){this.setHealth((1-.25)*this.value+.25*this.toLerp)}destroy(){this.bar.destroy()}};class s extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){try{document.getElementsByClassName("grecaptcha-badge")[0].style.opacity=0}catch(t){console.log(t)}this.ready=!1,this.loadrect=this.add.rectangle(0,0,2*this.canvas.width,2*this.canvas.height,25600).setDepth(200),this.ping=0}died(t){this.loseSound.play(),this.children.list.forEach((t=>{t.destroy()})),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.myObj.coins}),this.callback({win:!1,data:t})}win(t){this.winSound.play(),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.levels[this.levels.length-1].coins}),this.callback({win:!0,data:t})}create(){this.levels=[],grecaptcha.ready((()=>{grecaptcha.execute("6LdVxgYdAAAAAPtvjrXLAzSd2ANyzIkiSqk_yFpt",{action:"join"}).then((t=>{this.readyt=!0,this.openingBgm.stop();var e={mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0};this.coin=this.sound.add("coin",e),this.damage=this.sound.add("damage",e),this.hit=this.sound.add("hit",e),this.winSound=this.sound.add("winSound",e),this.loseSound=this.sound.add("loseSound",e),this.tps=0,this.background=this.add.tileSprite(0,0,this.canvas.width,this.canvas.height,"background").setOrigin(0).setDepth(2),this.background.fixedToCamera=!0,this.meSword=this.add.image(400,100,"sword").setScale(.25).setDepth(50).setAlpha(.5),this.mePlayer=this.add.image(400,100,"player").setScale(.25).setDepth(51).setAlpha(.5),this.swordAnim={go:!1,added:0},this.goTo={x:void 0,y:void 0},this.myObj=void 0,this.killCount=this.add.rexBBCodeText(15,10,"Kills: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(40).setDepth(101),this.killCount.addImage("coin",{key:"coin",width:45,height:45}),this.killCount.addImage("kill",{key:"kill",width:45,height:45}),this.killCount.setScrollFactor(0);try{this.playerCount=this.add.text(0,0,"Players: 0"+(this.mobile?"":"\nFPS: 0\nTPS: 0\nPing: 0 ms"),{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',align:"right"}).setFontSize(20).setDepth(101).setOrigin(1),this.playerCount.setScrollFactor(1),this.leaderboard=this.add.rexBBCodeText(0,10,"",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(25).setDepth(101),this.leaderboard.setScrollFactor(0)}catch(t){console.log(t)}const s=(t,e,i)=>i*e/t;this.miniMap={people:[],scaleFactor:s(1189,96,this.canvas.width),square:void 0},this.miniGraphics=this.add.graphics().setDepth(100);var a=13;this.miniMap.scaleFactor=s(1189,96,this.canvas.width),this.miniGraphics.x=this.canvas.width-(2*this.miniMap.scaleFactor+a),this.miniGraphics.y=this.canvas.height-(2*this.miniMap.scaleFactor+a),this.miniGraphics.lineStyle(5,16776960,1),this.miniGraphics.strokeRoundedRect(0,0,2*this.miniMap.scaleFactor,2*this.miniMap.scaleFactor,0),this.cameras.main.ignore(this.miniGraphics),this.mobile&&(this.joyStick=this.plugins.get("rexvirtualjoystickplugin").add(this,{x:this.canvas.width/6,y:this.canvas.height-this.canvas.height/2.5,radius:s(2360,250,this.canvas.width),base:this.add.circle(0,0,s(2360,250,this.canvas.width),8947848),thumb:this.add.circle(0,0,s(2360,100,this.canvas.width),13421772)})),this.meBar=new i(this,0,0,16,80),this.meBar.bar.setAlpha(.5),this.lvlBar=new i(this,0,0,0,0,!0),a=this.canvas.width/2,this.lvlBar.x=a/2,this.lastKill=Date.now(),this.streak=0,this.killtxts=[],this.lvlBar.width=this.canvas.width-a,this.lvlBar.height=this.canvas.height/30,this.lvlBar.y=this.canvas.height-this.lvlBar.height-this.canvas.height/40,this.lvlBar.draw(),this.coins=[],this.enemies=[],this.dead=!1,this.cursors=this.input.keyboard.createCursorKeys(),this.lvlText=this.add.text(this.canvas.width/2,this.canvas.height/5,"",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(s(1366,75,this.canvas.width)).setDepth(75).setAlpha(0).setOrigin(.5),this.lvlTextTween=void 0,this.lvlState=this.add.text(this.canvas.width/2,this.lvlBar.y-this.lvlBar.height,"",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(s(1366,50,this.canvas.width)).setDepth(75).setAlpha(1).setOrigin(.5),this.lvlState.y=this.lvlBar.y-this.lvlState.height/2,this.cameras.main.setZoom(1),this.UICam=this.cameras.add(this.cameras.main.x,this.cameras.main.y,this.canvas.width,this.canvas.height),this.cameras.main.ignore([this.killCount,this.playerCount,this.leaderboard,this.lvlBar.bar,this.lvlText,this.lvlState]),this.UICam.ignore([this.mePlayer,this.meBar.bar,this.meSword,this.background]),this.cameras.main.startFollow(this.mePlayer),this.input.addPointer(3),window.addEventListener("resize",(()=>{try{this.game.scale.resize(this.canvas.width,this.canvas.height),this.lvlText.y=this.canvas.height/5,this.lvlText.x=this.canvas.width/2,this.mobile&&(this.joyStick.x=this.canvas.width/8,this.joyStick.y=this.canvas.height-this.canvas.height/2.5,this.joyStick.base.radius=s(2360,250,this.canvas.width),this.joyStick.thumb.radius=s(2360,100,this.canvas.width),this.joyStick.radius=s(2360,250,this.canvas.width)),this.UICam.x=this.cameras.main.x,this.UICam.y=this.cameras.main.y,this.miniGraphics.clear();var t=13;this.miniMap.scaleFactor=s(1189,96,this.canvas.width),this.miniGraphics.x=this.canvas.width-(2*this.miniMap.scaleFactor+t),this.miniGraphics.y=this.canvas.height-(2*this.miniMap.scaleFactor+t),this.miniGraphics.lineStyle(5,16776960,1),this.miniGraphics.strokeRoundedRect(0,0,2*this.miniMap.scaleFactor,2*this.miniMap.scaleFactor,0),this.background.width=this.canvas.width,this.background.height=this.canvas.height,t=this.canvas.width/2,this.lvlBar.x=t/2,this.lvlBar.width=this.canvas.width-t,this.lvlBar.height=this.canvas.height/30,this.lvlBar.y=this.canvas.height-this.lvlBar.height-this.canvas.height/40,this.lvlBar.draw(),this.lvlState.x=this.canvas.width/2,this.lvlState.setFontSize(s(1366,50,this.canvas.width)),this.lvlState.y=this.lvlBar.y-this.lvlState.height/2,this.playerCount.x=this.miniGraphics.x+2*this.miniMap.scaleFactor,this.playerCount.y=this.canvas.height-2*this.miniMap.scaleFactor-17,this.lvlText.setFontSize(s(1366,75,this.canvas.width))}catch(t){console.log(t)}}),!0),this.socket=io(),this.socket.emit("go",this.name,t,window.localStorage.getItem("skinSecret")),this.input.on("pointerdown",(function(t){this.mobile&&this.joyStick.pointer&&this.joyStick.pointer.id==t.id||this.mouseDown||(this.gamePoint={x:t.x,y:t.y},this.mouseDown=!0,this.socket.emit("mouseDown",!0))}),this),this.input.on("pointerup",(function(t){this.mobile&&this.joyStick.pointer&&this.joyStick.pointer.id==t.id||this.mouseDown&&(this.gamePoint={x:t.x,y:t.y},this.mouseDown=!1,this.socket.emit("mouseDown",!1))}),this),this.mobile&&(this.gamePoint={x:0,y:0},this.input.on("pointermove",(t=>{this.joyStick.pointer&&this.joyStick.pointer.id==t.id||(this.gamePoint={x:t.x,y:t.y})}))),this.socket.on("tps",(t=>{this.tps=t;var e=Date.now();this.socket.emit("ping",(()=>{this.ping=Date.now()-e}))})),this.socket.on("ban",(t=>{document.write(t)})),this.graphics=this.add.graphics().setDepth(4);this.graphics.lineStyle(5e3,25600,1),this.graphics.strokeRoundedRect(-5e3,-5e3,1e4,1e4,0),this.graphics.lineStyle(10,16776960,1),this.graphics.strokeRoundedRect(-2500,-2500,5e3,5e3,0),this.socket.on("levels",(t=>this.levels=t));const h=t=>{if(!(this.enemies.filter((e=>e.id===t.id)).length>0)){var e={id:t.id,down:!1,toMove:{x:void 0,y:void 0},playerObj:void 0,lastTick:Date.now(),sword:this.add.image(t.pos.x,t.pos.y,t.skin+"Sword").setScale(.25).setDepth(49),player:this.add.image(t.pos.x,t.pos.y,t.skin+"Player").setScale(.25).setDepth(49),bar:new i(this,t.pos.x,t.pos.y+55),nameTag:this.add.text(t.pos.x,t.pos.y-90,t.name,{fontFamily:"serif",fill:"#000000",fontSize:"25px"}).setDepth(100),swordAnim:{go:!1,added:0},toAngle:0},s=100/(100*t.scale)*1.5;e.sword.angle=180*Math.atan2(t.mousePos.y-t.mousePos.viewport.height/2,t.mousePos.x-t.mousePos.viewport.width/2)/Math.PI+45,e.sword.x=e.player.x+e.player.width/s*Math.cos(e.sword.angle*Math.PI/180),e.sword.y=e.player.y+e.player.width/s*Math.sin(e.sword.angle*Math.PI/180),this.UICam.ignore([e.player,e.bar.bar,e.sword,e.nameTag,this.graphics]),this.enemies.push(e);var a=this.add.circle(0,0,10,16711680);this.cameras.main.ignore(a),a.setDepth(98),this.miniMap.people.push({id:t.id,circle:a}),Date.now()-t.joinTime<5e3&&(e.player.setAlpha(.5),e.sword.setAlpha(.5),e.bar.bar.setAlpha(.5),setTimeout((()=>{this.tweens.add({targets:[e.player,e.sword,e.bar.bar],alpha:1,duration:100,ease:"Linear",repeat:0,yoyo:!1})}),5e3-(Date.now()-t.joinTime)))}};this.removePlayer=t=>{try{var e=this.enemies.find((e=>e.id==t));this.tweens.add({targets:[e.player,e.nameTag,e.bar.bar,e.sword],alpha:0,duration:150,ease:"Sine2",onComplete:()=>{e.player.destroy(),this.enemies.splice(this.enemies.findIndex((e=>e.id==t)),1),e.bar.destroy(),e.nameTag.destroy(),e.sword.destroy(),this.miniMap.people.find((e=>e.id===t)).circle.destroy(),this.miniMap.people=this.miniMap.people.filter((e=>e.id!=t))}})}catch(t){console.log(t)}},this.socket.on("players",(t=>{t.forEach((t=>h(t))),this.ready=!0,this.ready||(this.ready=!0)})),this.socket.on("new",(t=>{h(t),this.ready||(this.ready=!0)})),this.socket.on("me",(t=>{if(this.loadrect.visible&&this.loadrect.destroy(),this.levels.length>0){var e=this.levels[t.level-1].coins-this.levels[t.level-1].start,i=t.coins-this.levels[t.level-1].start;this.lvlBar.setLerpValue(i/e*100),this.lvlState.setText("Level: "+t.level+" ("+Math.round(i/e*100)+"%)"),this.myObj&&t.level>this.myObj.level&&(this.lvlTextTween&&this.lvlTextTween.stop(),this.lvlText.data||this.lvlText.setData("x",0),this.lvlText.setData("x",this.lvlText.getData("x")+(t.level-this.myObj.level)),this.lvlText.setText("Level up!"+(this.lvlText.getData("x")>1?` x${this.lvlText.getData("x")}`:"")),this.lvlTextTween=this.tweens.add({targets:this.lvlText,alpha:1,y:this.canvas.height/4,completeDelay:1e3,duration:500,onComplete:()=>{this.lvlTextTween=this.tweens.add({targets:this.lvlText,alpha:0,y:this.canvas.height/5,onComplete:()=>this.lvlText.setData("x",0),duration:300,ease:"Power2"},this)},ease:"Power2"},this))}if(this.mePlayer.texture.key+"Player"!=t.skin&&(this.mePlayer.setTexture(t.skin+"Player"),this.meSword.setTexture(t.skin+"Sword")),this.myObj?(this.goTo.x=t.pos.x,this.goTo.y=t.pos.y):(this.mePlayer.x=t.pos.x,this.mePlayer.y=t.pos.y),this.mePlayer.setScale(t.scale),this.meBar.maxValue=t.maxHealth,this.meBar.setHealth(t.health),this.cameras.main.zoom<=.15||(t.scale<.75&&this.cameras.main.setZoom(1.25-t.scale),t.scale>=3||t.scale>=1?this.cameras.main.setZoom(.56-(t.scale-1)/8):t.scale>=.75&&this.cameras.main.setZoom(.56-(t.scale-.75)/3)),this.meSword.setScale(t.scale),this.background.setTileScale(this.cameras.main.zoom,this.cameras.main.zoom),this.background.displayWidth=this.cameras.main.displayWidth,this.background.displayHeight=this.cameras.main.displayHeight,this.killCount.setText("[img=kill] "+t.kills+"\n[img=coin] "+t.coins),this.myObj=t,!this.miniMap.people.find((e=>e.id===t.id))){var a=this.add.circle(0,0,10,16777215);this.cameras.main.ignore(a),a.setDepth(99),this.miniMap.people.push({id:t.id,circle:a})}var h=this.miniMap.people.find((e=>e.id===t.id));h.circle.x=this.miniGraphics.x+t.pos.x/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,h.circle.y=this.miniGraphics.y+t.pos.y/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,h.circle.radius=t.scale*s(1280,20,this.canvas.width)})),this.socket.on("player",(t=>{if(this.ready)try{var e=this.enemies.find((e=>e.id==t.id));if(!e)return;e.lastTick=Date.now(),e.playerObj=t,e.bar.maxValue=t.maxHealth,e.bar.setHealth(t.health),e.toMove.x=t.pos.x,e.toMove.y=t.pos.y;var i=t.mousePos;e.toAngle=180*Math.atan2(i.y-i.viewport.height/2,i.x-i.viewport.width/2)/Math.PI+45,e.player.setScale(t.scale),e.sword.setScale(t.scale),e.down=t.mouseDown;var a=this.miniMap.people.find((e=>e.id===t.id));a.circle.x=this.miniGraphics.x+t.pos.x/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,a.circle.y=this.miniGraphics.y+t.pos.y/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,a.circle.radius=s(1280,20,this.canvas.width)*t.scale}catch(t){console.log(t)}})),this.socket.on("playerLeave",this.removePlayer),this.socket.on("playerDied",((t,e)=>{if(this.myObj&&this.myObj.id===e.killedBy.id){var i=this.enemies.find((e=>e.id==t));if(i&&i.playerObj){var a=s(1366,64,this.canvas.width);if(Date.now()-this.lastKill<2500){this.streak++;var h="[b]",n=["Double","Triple","Quadra","Quinta","Hexta","Hepta","Octa","Nona","Deca"];this.streak-1>n.length?h+=`x${this.streak}`:h+=n[this.streak-1],h+=" Kill![/b]",this.killtxts.forEach((t=>{t.destroy()})),this.killtxts=[]}else this.streak=0,h=`[b][color=#e82a1f]Killed [/color][color=#0000FF]${i.playerObj.name}[/color][/b]`;var o=this.add.rexBBCodeText(this.canvas.width/2,this.canvas.height,h).setOrigin(.5).setAlpha(0).setFontSize(a);o.setData("index",this.killtxts.length),this.killtxts.push(o);const t=t=>{this.tweens.add({targets:t,alpha:0,y:this.canvas.height,onComplete:()=>{this.killtxts.slice(t.getData("index"),1),t.destroy()},ease:"Power2",duration:250})};this.tweens.add({targets:o,alpha:1,y:this.canvas.height-this.canvas.height/6,completeDelay:250,duration:750,onComplete:()=>t(o),ease:"Bounce"},this),this.cameras.main.ignore(o)}this.lastKill=Date.now()}this.removePlayer(t)})),this.socket.on("dealHit",(t=>{var e=this.enemies.find((e=>e.id==t));if(e){var i=this.add.particles("hitParticle"),s=i.createEmitter({maxParticles:5,scale:.2});s.setPosition(e.player.x,e.player.y),this.UICam.ignore(i),s.setSpeed(200),i.setDepth(5),s.setBlendMode(Phaser.BlendModes.ADD)}this.hit.play()})),this.socket.on("takeHit",(t=>{this.damage.play()}));const n=(t,e)=>{if(!this.dead){var i=!0;e||(e=[t.pos.x,t.pos.y],i=!1),this.coins.push({id:t.id,item:this.add.image(e[0],e[1],"coin").setScale(t.size/100).setDepth(20).setAlpha(i?0:1),state:{collected:!1,collectedBy:void 0,time:0}}),i&&this.tweens.add({targets:this.coins[this.coins.length-1].item,alpha:1,x:t.pos.x,y:t.pos.y,duration:250,ease:"Sine2"}),this.UICam.ignore(this.coins[this.coins.length-1].item)}};this.socket.on("coins",(t=>{t.forEach((t=>{0==this.coins.filter((e=>e.id==t.id)).length&&n(t)})),this.coins.filter((e=>0==t.filter((t=>e.id==t.id&&!e.state.collected)).length)).forEach((t=>{t.item.destroy()})),this.coins=this.coins.filter((e=>1==t.filter((t=>e.id==t.id&&!e.state.collected)).length))})),this.socket.on("coin",((t,e)=>{Array.isArray(t)?e?t.forEach((t=>{n(t,e)})):t.forEach((t=>{n(t)})):n(t)})),this.socket.on("youDied",(t=>{this.died(t)})),this.socket.on("youWon",(t=>{this.win(t)})),this.socket.on("collected",((t,e)=>{this.myObj&&this.myObj.id==e&&this.coin.play(),this.coins.find((e=>e.id==t))&&(this.coins.find((e=>e.id==t)).state={collected:!0,collectedBy:e,time:0})})),this.playerCount.x=this.miniGraphics.x+2*this.miniMap.scaleFactor,this.playerCount.y=this.canvas.height-2*this.miniMap.scaleFactor-17,setTimeout((()=>{this.tweens.add({targets:[this.mePlayer,this.meSword,this.meBar.bar],alpha:1,duration:100,ease:"Linear",repeat:0,yoyo:!1})}),5e3)}))}))}update(t,e){if(this.readyt){this.lvlBar.update();var i={left:!1,up:!1,right:!1,down:!1},s=this.input.keyboard.addKey("W"),a=this.input.keyboard.addKey("A"),h=this.input.keyboard.addKey("S"),n=this.input.keyboard.addKey("D");try{this.key=this.mobile?this.joyStick.createCursorKeys():this.cursors,(this.key.up.isDown||s.isDown)&&(i.up=!0),(this.key.down.isDown||h.isDown)&&(i.down=!0),(this.key.right.isDown||n.isDown)&&(i.right=!0),(this.key.left.isDown||a.isDown)&&(i.left=!0),this.socket.emit("move",i)}catch(t){console.log(t)}if(this.meSword)var o=this.meSword.angle;if(this.mobile)l=this.gamePoint;else var l=this.input;if(this.meSword.angle=180*Math.atan2(l.y-this.canvas.height/2,l.x-this.canvas.width/2)/Math.PI+45,this.mePlayer.angle=this.meSword.angle+45+180,this.mouseDown?this.swordAnim.added<=0&&(this.swordAnim.go=!0):this.swordAnim.added>=50&&(this.swordAnim.go=!1),this.swordAnim.go){var d=50/(this.myObj?this.myObj.damageCooldown:120)*e;this.swordAnim.added<50&&(this.swordAnim.added+=d),this.meSword.angle-=this.swordAnim.added}else this.swordAnim.added>0&&(this.swordAnim.added-=10,this.meSword.angle-=this.swordAnim.added);var r={viewport:{width:this.canvas.width,height:this.canvas.height},x:l.x,y:l.y};this.socket&&o&&this.meSword.angle!=o&&this.socket.emit("mousePos",r);var c=this.sys.game.loop.actualFps;this.enemies.forEach((t=>{if(Date.now()-t.lastTick>1e4)return this.removePlayer(t);if(t.toMove.x&&(t.player.x=x(t.player.x,t.toMove.x,c/500),t.player.y=x(t.player.y,t.toMove.y,c/500)),t.playerObj)var i=t.playerObj.scale;else i=.25;t.bar.width=t.player.height*i/.9375,t.bar.height=t.player.height*i*.15,t.bar.x=t.player.x-t.bar.width/2,t.bar.y=t.player.y-t.player.height*i/1.2,t.bar.draw();try{t.nameTag.setFontSize(100*i),t.nameTag.x=t.player.x-t.nameTag.width/2,t.nameTag.y=t.player.y-t.player.height*i-t.nameTag.height}catch(t){console.log(t)}if(t.playerObj)var s=100/(100*t.playerObj.scale)*1.5;else s=6;if(t.sword.angle=function(t,e,i){const s=function(t,e){return i=t-Math.floor(t/e)*e,s=e,Math.min(Math.max(i,0),s);var i,s}(e-t,360);return x(t,t+(s>180?s-360:s),.5)}(t.sword.angle,t.toAngle),t.player.angle=t.sword.angle+45+180,t.down?(t.swordAnim.added||(t.swordAnim.added=0),t.swordAnim.added<=0&&(t.swordAnim.go=!0)):t.swordAnim.added>=50&&(t.swordAnim.go=!1),t.swordAnim.go&&t.swordAnim.added<50){var a=50/t.playerObj.damageCooldown*e;t.swordAnim.added<50&&(t.swordAnim.added+=a)}!t.swordAnim.go&&t.swordAnim.added>0&&(t.swordAnim.added-=10),t.sword.angle-=t.swordAnim.added,t.sword.x=t.player.x+t.player.width/s*Math.cos(t.sword.angle*Math.PI/180),t.sword.y=t.player.y+t.player.width/s*Math.sin(t.sword.angle*Math.PI/180)})),this.goTo.x&&(this.mePlayer.x=x(this.mePlayer.x,this.goTo.x,c/500),this.mePlayer.y=x(this.mePlayer.y,this.goTo.y,c/500));var m=this.myObj;if(m||(m={scale:.25}),this.meBar.width=this.mePlayer.height*m.scale/.9375,this.meBar.height=this.mePlayer.height*m.scale*.2,this.meBar.x=this.mePlayer.x-this.meBar.width/2,this.meBar.y=this.mePlayer.y-this.mePlayer.height*m.scale/1.2,this.meBar.draw(),this.myObj)var y=100/(100*this.myObj.scale)*1.5;else y=6;if(this.meSword.x=this.mePlayer.x+this.mePlayer.width/y*Math.cos(this.meSword.angle*Math.PI/180),this.meSword.y=this.mePlayer.y+this.mePlayer.width/y*Math.sin(this.meSword.angle*Math.PI/180),this.myObj){var p=this.enemies.filter((t=>t.hasOwnProperty("playerObj")&&t.playerObj));p.push({playerObj:this.myObj});try{var g=p.sort(((t,e)=>t.playerObj.coins-e.playerObj.coins)).reverse(),u="",w=!1;if(g.slice(0,this.mobile?5:10).forEach(((t,e)=>{if(t.playerObj){if(!t.playerObj.hasOwnProperty("coins"))return console.log(t.playerObj);t.playerObj.id==this.myObj.id&&(w=!0);var i=t.playerObj;u+=`#${e+1}: ${"codergautamyt"==i.skin?"[color=blue][DEV][/color] ":""}${i.name}- ${b(i.coins)}\n`}})),!w){var v=g.findIndex((t=>t.playerObj.id==this.myObj.id));u+=`...\n#${v+1}: ${this.myObj.name}- ${b(this.myObj.coins)}\n`}this.leaderboard.setText(u),this.leaderboard.x=this.canvas.width-this.leaderboard.width-15}catch(t){console.log(t)}try{this.playerCount.setText("Players: "+(Object.keys(this.enemies).length+1).toString()+(this.mobile?"":"\nFPS: "+Math.round(this.sys.game.loop.actualFps)+"\nTPS: "+this.tps+"\nPing: "+this.ping+" ms"))}catch(t){console.log(t)}this.myObj&&(this.coins.forEach((t=>{if(t.state.collected){if(t.state.collectedBy==this.myObj.id)var e=this.mePlayer.x,i=this.mePlayer.y;else try{var s=this.enemies.find((e=>e.id==t.state.collectedBy));if(!s)return t.item.destroy(),void(this.coins=this.coins.filter((e=>e.id!=t.id)));e=s.player.x,i=s.player.y}catch(t){return void console.log(t)}t.item.x=x(t.item.x,e,(6-(Math.log2(c)-Math.log2(1.875)))/10*2),t.item.y=x(t.item.y,i,(6-(Math.log2(c)-Math.log2(1.875)))/10),t.state.time+=1,a=t.item.x,h=t.item.y,n=e,o=i,(Math.hypot(n-a,o-h)<this.mePlayer.width*this.mePlayer.scale/3||t.state.time>7)&&(t.item.destroy(),this.coins=this.coins.filter((e=>e.id!=t.id)))}var a,h,n,o})),this.background.setTilePosition(this.cameras.main.scrollX,this.cameras.main.scrollY),this.background.x=this.mePlayer.x-this.cameras.main.displayWidth/2,this.background.y=this.mePlayer.y-this.cameras.main.displayHeight/2,!this.ready||this.dead||this.socket.connected||(document.write('<h1>You got disconnected</h1><br><button onclick="location.reload()"><h1>Refresh</h1></button>'),this.dead=!0))}}function x(t,e,i){return(1-i)*t+i*e}function b(t){return t>999?parseFloat((t/1e3).toFixed(t<1e4?2:1))+"k":t}}}const a=s;class h extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.lerp=function(t,e,i){return(1-i)*t+i*e},this.background=this.add.rectangle(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(document.documentElement.clientWidth/2,0,"You died",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/2,"Killed by: "+this.data.killedBy+`\nSurvived Time: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,e,i,s)=>{this.scene.start("title")})),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){this.text.setFontSize(document.documentElement.clientWidth/10),this.stats.setFontSize(document.documentElement.clientWidth/20),this.btntext.setFontSize(document.documentElement.clientWidth/25),this.text.y<document.documentElement.clientHeight/5.5&&(this.text.y=this.lerp(this.text.y,document.documentElement.clientHeight/5.5,.2)),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime=Math.round(this.lerp(this.displayTime,this.data.timeSurvived,.1))),this.displayCoins<this.data.coins&&(this.displayCoins=Math.round(this.lerp(this.displayCoins,this.data.coins,.1)),this.data.coins-4==this.displayCoins&&(this.displayCoins=this.data.coins)),this.stats.setText(`Killed by: ${this.data.killedBy}\nSurvived Time: ${function(t){parseInt(t%1e3/100);var e=Math.floor(t/1e3%60),i=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==i?"":i+"m ")+e+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(document.documentElement.clientWidth,document.documentElement.clientHeight),this.background.width=document.documentElement.clientWidth,this.background.height=document.documentElement.clientHeight,this.text.x=document.documentElement.clientWidth/2,this.text.y=document.documentElement.clientHeight/5.5,this.stats.x=document.documentElement.clientWidth/2,this.stats.y=document.documentElement.clientHeight/2,this.btntext.x=document.documentElement.clientWidth/2,this.btntext.y=document.documentElement.clientHeight/1.2}),!1)}}const n=h;class o extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.background=this.add.rectangle(0,0,this.canvas.height,this.canvas.width,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(this.canvas.width/2,0,"You won!",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(this.canvas.width/2,this.canvas.height/2,`You conquered the map and became Ka-HUGE!\nTime Taken: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.lerpVal=0,this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(this.canvas.width/2,this.canvas.height/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,e,i,s)=>{this.scene.start("title")})),console.log(this.data.coins),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){var t,e;this.text.setFontSize(this.canvas.width/10),this.stats.setFontSize(this.canvas.width/30),this.btntext.setFontSize(this.canvas.width/25),this.text.y<this.canvas.height/4&&(this.text.y+=10),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime+=1e3),this.displayCoins=Math.round((0,t=this.data.coins,0*(1-(e=this.lerpVal))+t*e)),this.lerpVal<1&&(this.lerpVal+=.02),this.stats.setText(`A mighty warrior indeed..!\nTime Taken: ${function(t){parseInt(t%1e3/100);var e=Math.floor(t/1e3%60),i=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==i?"":i+"m ")+e+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(this.canvas.width,this.canvas.height),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.text.x=this.canvas.width/2,this.text.y=this.canvas.height/4,this.stats.x=this.canvas.width/2,this.stats.y=this.canvas.height/2,this.btntext.x=this.canvas.width/2,this.btntext.y=this.canvas.height/1.2}),!1)}}const l=o;class d extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){this.load.plugin("rexvirtualjoystickplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",!0),this.load.plugin("rexbbcodetextplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js",!0),this.load.image("playerPlayer","/assets/images/player.png"),this.load.image("playerSword","/assets/images/sword.png"),this.load.image("codergautamytPlayer","/assets/images/codergautamytPlayer.png"),this.load.image("codergautamytSword","/assets/images/codergautamytSword.png"),this.load.image("devilPlayer","/assets/images/devilPlayer.png"),this.load.image("devilSword","/assets/images/devilSword.png"),this.load.image("winterPlayer","/assets/images/winterPlayer.png"),this.load.image("winterSword","/assets/images/winterSword.png"),this.load.image("chefPlayer","/assets/images/chefPlayer.png"),this.load.image("chefSword","/assets/images/chefSword.png"),this.load.image("medicPlayer","/assets/images/medicPlayer.png"),this.load.image("medicSword","/assets/images/medicSword.png"),this.load.image("indiaPlayer","/assets/images/indiaPlayer.png"),this.load.image("indiaSword","/assets/images/indiaSword.png"),this.load.image("foxPlayer","/assets/images/foxPlayer.png"),this.load.image("foxSword","/assets/images/devilSword.png"),this.load.image("background","/assets/images/background.jpeg"),this.load.image("coin","/assets/images/coin.png"),this.load.image("kill","/assets/images/kill.png"),this.load.image("hitParticle","/assets/images/hitparticle.png"),this.load.audio("coin","/assets/sound/coin.m4a"),this.load.audio("damage","/assets/sound/damage.mp3"),this.load.audio("hit","/assets/sound/hitenemy.wav"),this.load.audio("winSound","/assets/sound/win.m4a"),this.load.audio("loseSound","/assets/sound/lost.mp3"),this.load.image("opening","/assets/images/opening.png"),this.load.html("title","/title.html"),this.load.html("promo","/promo.html"),this.load.html("footer","/footer.html"),this.load.audio("openingsound","/assets/sound/opening.mp3"),this.scale.fullscreenTarget=document.getElementById("game")}create(){this.go=!1,this.background=this.add.rectangle(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight,0).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/2,"Click to join the game..",{fontSize:"64px",fill:"#FFFFFF"}).setOrigin(.5),this.text.setAlpha(0),window.addEventListener("resize",(()=>{try{this.game.scale.resize(document.documentElement.clientWidth,document.documentElement.clientHeight),this.background.height=document.documentElement.clientHeight,this.background.width=document.documentElement.clientWidth}catch(t){console.log(t)}}),!0),this.input.on("pointerdown",(t=>{this.go=!0}))}update(){if(this.text.x=document.documentElement.clientWidth/2,this.text.y=document.documentElement.clientHeight/2,this.text.setFontSize(128*document.documentElement.clientWidth/1920),this.go)if(this.text.alpha>0)this.text.setAlpha(this.text.alpha-.05);else{try{this.scale.startFullscreen()}catch(t){console.log("fullscreen error oof")}this.scene.start("title")}else this.text.alpha<1&&this.text.setAlpha(this.text.alpha+.01)}}const r=d;window.addEventListener("load",(()=>{var t={type:Phaser.CANVAS,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,parent:"game",dom:{createContainer:!0,autoCenter:Phaser.Scale.CENTER_BOTH},scale:{mode:Phaser.Scale.RESIZE}},i=window.matchMedia("(pointer: coarse)").matches,s=new Phaser.Game(t),h=new n,o=new l,d=new r;window.setSecret=()=>{window.localStorage.setItem("skinSecret",prompt("Enter your secret skin code"))};var c=0,m=12e5,y=new a((t=>{p.playPreroll=Date.now()-c>m,t.win?(o.data=t.data,y.scene.start("win")):(h.data=t.data,y.scene.start("death"))})),p=new e(Date.now()-c>m,((t,e)=>{y.name=t,y.openingBgm=e,p.scene.start("game"),p.showPromo=!1,Date.now()-c>m&&(c=Date.now())}));function g(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}p.mobile=i,y.mobile=i,i||(p.showPromo=!0),Object.defineProperty(p,"canvas",{get:g}),Object.defineProperty(h,"canvas",{get:g}),Object.defineProperty(o,"canvas",{get:g}),Object.defineProperty(y,"canvas",{get:g}),Object.defineProperty(d,"canvas",{get:g}),s.scene.add("title",p),s.scene.add("game",y),s.scene.add("death",h),s.scene.add("win",o),s.scene.add("open",d),s.scene.start("open"),document.addEventListener("contextmenu",(function(t){t.preventDefault()}))}))})();
//# sourceMappingURL=main.js.map