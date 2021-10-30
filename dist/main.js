(()=>{"use strict";class t extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){this.load.image("opening","/assets/images/opening.png"),this.load.html("form","/textbox.html"),this.load.audio("opening","/assets/sound/opening.mp3")}create(){this.music=this.sound.add("opening",{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!0,delay:0}),this.music.play(),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),this.background=this.add.image(0,0,"opening").setOrigin(0).setScrollFactor(0,0).setScale(2),this.background.displayHeight=window.innerHeight,this.background.displayWidth=window.innerWidth,this.text=this.add.text(window.innerWidth/2,0,"Sword.io",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.nameBox=this.add.dom(window.innerWidth/2,window.innerHeight/1.7).createFromCache("form"),this.input.keyboard.on("keydown",function(t){("a"==t.key||"s"==t.key||"d"==t.key||"w"==t.key||32==t.which)&&(this.nameBox.getChildByName("name").value+=t.key)}.bind(this));try{this.nameBox.getChildByName("name").value=function(t){let i="oldName=",e=decodeURIComponent(document.cookie).split(";");for(let t=0;t<e.length;t++){let s=e[t];for(;" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(i))return s.substring(i.length,s.length)}return""}()}catch(t){document.write("Something went wrong..\n\nProbably due to some kind of proxy enforced by your school or administrator")}this.done=!1,this.btnrect=this.add.rectangle(0,0,0,0,65280),this.btntext=this.add.text(window.innerWidth/2,window.innerHeight/1.2,"Play",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10;const t=()=>{let t=this.nameBox.getChildByName("name");t&&""!=t.value&&(this.done||(this.done=!0,document.cookie="oldName="+t.value,this.nameBox.destroy(),this.callback(t.value,this.music)))};this.btnrect.setInteractive().on("pointerdown",((i,e,s,h)=>{t()})),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(i=>{t()}))}update(){this.text.setFontSize(window.innerWidth/10),this.text.y<window.innerHeight/3&&(this.text.y+=10),this.nameBox.x=window.innerWidth/2,this.nameBox.y=window.innerHeight/1.8,this.btntext.x=window.innerWidth/2,this.btntext.y=window.innerHeight/1.7+this.nameBox.height,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(window.innerWidth,window.innerHeight),this.background.displayWidth=window.innerWidth,this.background.displayHeight=window.innerHeight,this.text.x=window.innerWidth/2,this.text.y=window.innerHeight/3}),!1)}}const i=t,e=class{constructor(t,i,e,s,h){this.bar=new Phaser.GameObjects.Graphics(t).setDepth(99),this.x=i,this.y=e,this.maxValue=100,this.value=100,this.height=h,this.width=s,t.add.existing(this.bar)}setHealth(t){var i,e;return this.value=(i=t,0,e=this.maxValue,Math.min(Math.max(i,0),e)),this.draw(),0===this.value}draw(){this.bar.clear(),this.bar.fillStyle(0),this.bar.fillRect(this.x,this.y,this.width,this.height),this.bar.fillStyle(16777215),this.bar.fillRect(this.x+2,this.y+2,this.width-4,this.height-4),this.value<30?this.bar.fillStyle(16711680):this.bar.fillStyle(65280);var t=Math.floor((this.width-4)*(this.value/this.maxValue));this.bar.fillRect(this.x+2,this.y+2,t,this.height-4)}destroy(){this.bar.destroy()}};class s extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){this.load.image("player","/assets/images/player.png"),this.load.image("sword","/assets/images/sword.png"),this.load.image("background","/assets/images/background.jpeg"),this.load.image("coin","/assets/images/coin.png"),this.load.audio("coin","/assets/sound/coin.m4a"),this.load.audio("damage","/assets/sound/damage.mp3"),this.load.audio("hit","/assets/sound/hitenemy.wav"),this.load.audio("winSound","/assets/sound/win.m4a"),this.load.audio("loseSound","/assets/sound/lost.mp3"),this.socket=io(),this.ready=!1}died(t){this.loseSound.play(),this.children.list.forEach((t=>{t.destroy()})),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.myObj.coins}),this.callback({win:!1,data:t})}win(t){this.winSound.play(),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.myObj.coins}),this.callback({win:!0,data:t})}create(){this.openingBgm.stop();var t,i={mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0};this.coin=this.sound.add("coin",i),this.damage=this.sound.add("damage",i),this.hit=this.sound.add("hit",i),this.winSound=this.sound.add("winSound",i),this.loseSound=this.sound.add("loseSound",i),this.canvas={width:window.innerWidth,height:window.innerHeight},this.tps=0,this.background=this.add.tileSprite(-2500,-2500,5e3,5e3,"background").setOrigin(0).setDepth(2),this.void=this.add.rectangle(-5e3,-5e3,1e4,1e4,25600).setOrigin(0).setDepth(1),this.background.fixedToCamera=!0,this.meSword=this.add.image(400,100,"sword").setScale(.25).setDepth(50),this.mePlayer=this.add.image(400,100,"player").setScale(.25).setDepth(51),this.swordAnim={go:!1,added:0},this.goTo={x:void 0,y:void 0},this.myObj=void 0,this.killCount=this.add.text(window.innerWidth/1.5,0,"Kills: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(40).setDepth(101),this.killCount.scrollFactorX=0,this.killCount.scrollFactorY=0,this.playerCount=this.add.text(this.cameras.main.worldView.x*this.cameras.main.zoom,this.cameras.main.worldView.y*this.cameras.main.zoom,"Players: 0\nFPS: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(20).setDepth(101),this.playerCount.scrollFactorX=0,this.playerCount.scrollFactorY=0,this.leaderboard=this.add.text(window.innerWidth,this.cameras.main.worldView.y*this.cameras.main.zoom,"Players: 0\nFPS: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(20).setDepth(101),this.playerCount.scrollFactorX=0,this.playerCount.scrollFactorY=0,this.miniGraphics=this.add.graphics().setDepth(100),this.miniGraphics.x=window.innerWidth-205,this.miniGraphics.y=window.innerHeight-205,this.miniGraphics.lineStyle(5,16776960,1),this.miniGraphics.strokeRoundedRect(0,0,192,192,0),this.cameras.main.ignore(this.miniGraphics),this.miniMap={square:this.miniGraphics,people:[]},this.meBar=new e(this,0,0,16,80),this.coins=[],this.enemies=[],this.dead=!1,this.cursors=this.input.keyboard.createCursorKeys(),this.cameras.main.setZoom(1),this.UICam=this.cameras.add(this.cameras.main.x,this.cameras.main.y,window.innerWidth,window.innerHeight),this.cameras.main.ignore([this.killCount,this.playerCount,this.leaderboard]),this.UICam.ignore([this.mePlayer,this.meBar.bar,this.meSword,this.background,this.void]),this.cameras.main.startFollow(this.mePlayer),window.addEventListener("resize",(()=>{try{this.canvas={width:window.innerWidth,height:window.innerHeight},this.game.scale.resize(this.canvas.width,this.canvas.height),this.UICam.x=this.cameras.main.x,this.UICam.y=this.cameras.main.y,this.miniGraphics.x=window.innerWidth-205,this.miniGraphics.y=window.innerHeight-205}catch(t){console.log(t)}}),!0),this.socket.emit("go",this.name,(t="",t+=function(t){for(var i="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=e.length,h=0;h<5;h++)i+=e.charAt(Math.floor(Math.random()*s));return i}(),t+=Date.now(),(t+="A")+Math.random().toString().concat("0".repeat(3)).substr(2,3))),this.input.on("pointerdown",(function(t){this.mouseDown||(this.mouseDown=!0,this.socket.emit("mouseDown",!0))}),this),this.input.on("pointerup",(function(t){this.mouseDown&&(this.mouseDown=!1,this.socket.emit("mouseDown",!1))}),this),this.socket.on("tps",(t=>{this.tps=t})),this.socket.on("ban",(t=>{document.write(t)})),this.graphics=this.add.graphics().setDepth(4),this.graphics.lineStyle(10,16776960,1),this.graphics.strokeRoundedRect(-2500,-2500,5e3,5e3,0);const s=t=>{if(!(this.enemies.filter((i=>i.id===t.id)).length>0)){var i={id:t.id,down:!1,toMove:{x:void 0,y:void 0},playerObj:void 0,sword:this.add.image(t.pos.x,t.pos.y,"sword").setScale(.25).setDepth(49),player:this.add.image(t.pos.x,t.pos.y,"player").setScale(.25).setDepth(49),bar:new e(this,t.pos.x,t.pos.y+55),nameTag:this.add.text(t.pos.x,t.pos.y-90,t.name,{fontFamily:"serif",fill:"#000000",fontSize:"25px"}).setDepth(100),swordAnim:{go:!1,added:0},toAngle:0},s=100/(100*t.scale)*1.5;i.sword.angle=180*Math.atan2(t.mousePos.y-t.mousePos.viewport.height/2,t.mousePos.x-t.mousePos.viewport.width/2)/Math.PI+45,i.sword.x=i.player.x+i.player.width/s*Math.cos(i.sword.angle*Math.PI/180),i.sword.y=i.player.y+i.player.width/s*Math.sin(i.sword.angle*Math.PI/180),this.UICam.ignore([i.player,i.bar.bar,i.sword,i.nameTag]),this.enemies.push(i);var h=this.add.circle(0,0,10,16711680);this.cameras.main.ignore(h),h.setDepth(98),this.miniMap.people.push({id:t.id,circle:h})}},h=t=>{try{var i=this.enemies.find((i=>i.id==t));i.player.destroy(),i.sword.destroy(),i.bar.destroy(),i.nameTag.destroy(),this.enemies.splice(this.enemies.findIndex((i=>i.id==t)),1),this.miniMap.people.find((i=>i.id===t)).circle.destroy(),this.miniMap.people=this.miniMap.people.filter((i=>i.id!=t))}catch(t){console.log(t)}};this.socket.on("players",(t=>{t.forEach((t=>s(t))),this.ready=!0,this.ready||(this.ready=!0)})),this.socket.on("new",(t=>{s(t),this.ready||(this.ready=!0)})),this.socket.on("me",(t=>{if(this.myObj?(this.goTo.x=t.pos.x,this.goTo.y=t.pos.y):(this.mePlayer.x=t.pos.x,this.mePlayer.y=t.pos.y),this.mePlayer.setScale(t.scale),this.meBar.maxValue=t.maxHealth,this.meBar.setHealth(t.health),this.cameras.main.zoom<=.15||(t.scale<.75&&this.cameras.main.setZoom(1.25-t.scale),t.scale>=3||t.scale>=1?this.cameras.main.setZoom(.56-(t.scale-1)/8):t.scale>=.75&&this.cameras.main.setZoom(.56-(t.scale-.75)/3)),this.meSword.setScale(t.scale),this.killCount.setText("Kills: "+t.kills+"\nCoins: "+t.coins),this.myObj=t,!this.miniMap.people.find((i=>i.id===t.id))){var i=this.add.circle(0,0,10,16777215);this.cameras.main.ignore(i),i.setDepth(99),this.miniMap.people.push({id:t.id,circle:i})}var e=this.miniMap.people.find((i=>i.id===t.id));e.circle.x=this.miniMap.square.x+t.pos.x/2500*96+96,e.circle.y=this.miniMap.square.y+t.pos.y/2500*96+96,e.circle.radius=20*t.scale})),this.socket.on("player",(t=>{if(this.ready)try{var i=this.enemies.find((i=>i.id==t.id));i.playerObj=t,i.bar.maxValue=t.maxHealth,i.bar.setHealth(t.health),i.toMove.x=t.pos.x,i.toMove.y=t.pos.y;var e=t.mousePos;i.toAngle=180*Math.atan2(e.y-e.viewport.height/2,e.x-e.viewport.width/2)/Math.PI+45,i.player.setScale(t.scale),i.sword.setScale(t.scale),i.down=t.mouseDown;var s=this.miniMap.people.find((i=>i.id===t.id));s.circle.x=this.miniMap.square.x+t.pos.x/2500*96+96,s.circle.y=this.miniMap.square.y+t.pos.y/2500*96+96,s.circle.radius=20*t.scale}catch(t){console.log(t)}})),this.socket.on("playerLeave",h),this.socket.on("playerDied",h),this.socket.on("dealHit",(t=>{this.hit.play()})),this.socket.on("takeHit",(t=>{this.damage.play()}));const n=t=>{this.dead||(this.coins.push({id:t.id,item:this.add.image(t.pos.x,t.pos.y,"coin").setScale(t.size/100).setDepth(20),state:{collected:!1,collectedBy:void 0,time:0}}),this.UICam.ignore(this.coins[this.coins.length-1].item))};this.socket.on("coins",(t=>{t.forEach((t=>{0==this.coins.filter((i=>i.id==t.id)).length&&n(t)})),this.coins.filter((i=>0==t.filter((t=>i.id==t.id&&!i.state.collected)).length)).forEach((t=>{t.item.destroy()})),this.coins=this.coins.filter((i=>1==t.filter((t=>i.id==t.id&&!i.state.collected)).length))})),this.socket.on("coin",(t=>{n(t)})),this.socket.on("youDied",(t=>{this.died(t)})),this.socket.on("youWon",(t=>{this.win(t)})),this.socket.on("collected",((t,i)=>{this.myObj&&this.myObj.id==i&&this.coin.play(),this.coins.find((i=>i.id==t))&&(this.coins.find((i=>i.id==t)).state={collected:!0,collectedBy:i,time:0})}))}update(){var t={left:!1,up:!1,right:!1,down:!1},i=this.input.keyboard.addKey("W"),e=this.input.keyboard.addKey("A"),s=this.input.keyboard.addKey("S"),h=this.input.keyboard.addKey("D");(this.cursors.up.isDown||i.isDown)&&(t.up=!0),(this.cursors.down.isDown||s.isDown)&&(t.down=!0),(this.cursors.right.isDown||h.isDown)&&(t.right=!0),(this.cursors.left.isDown||e.isDown)&&(t.left=!0),this.socket.emit("move",t);var n=this.meSword.angle,a=this.input;this.meSword.angle=180*Math.atan2(a.y-this.canvas.height/2,a.x-this.canvas.width/2)/Math.PI+45,this.mouseDown?this.swordAnim.go=!0:this.swordAnim.go=!1,this.swordAnim.go?(this.swordAnim.added<30&&(this.swordAnim.added+=5),this.meSword.angle-=this.swordAnim.added):this.swordAnim.added>0&&(this.swordAnim.added-=5,this.meSword.angle-=this.swordAnim.added);var o={viewport:{width:this.canvas.width,height:this.canvas.height},x:a.x,y:a.y};this.meSword.angle!=n&&this.socket.emit("mousePos",o);var d=this.sys.game.loop.actualFps;function r(t,i,e){return(1-e)*t+e*i}this.enemies.forEach((t=>{if(t.playerObj&&t.playerObj.speed,t.toMove.x&&(t.player.x=r(t.player.x,t.toMove.x,d/500),t.player.y=r(t.player.y,t.toMove.y,d/500)),t.playerObj)var i=t.playerObj.scale;else i=.25;if(t.bar.width=t.player.height*i/.9375,t.bar.height=t.player.height*i*.15,t.bar.x=t.player.x-t.bar.width/2,t.bar.y=t.player.y-t.player.height*i/1.2,t.bar.draw(),t.nameTag.setFontSize(100*i),t.nameTag.x=t.player.x-t.nameTag.width/2,t.nameTag.y=t.player.y-t.player.height*i-t.nameTag.height,t.playerObj)var e=100/(100*t.playerObj.scale)*1.5;else e=6;t.sword.angle=function(t,i,e){const s=function(t,i){return e=t-Math.floor(t/i)*i,s=i,Math.min(Math.max(e,0),s);var e,s}(i-t,360);return r(t,t+(s>180?s-360:s),e)}(t.sword.angle,t.toAngle,d/1e3),t.down?(t.swordAnim.go=!0,t.swordAnim.added=0):t.swordAnim.go=!1,t.swordAnim.go?t.swordAnim.added<30&&(t.swordAnim.added+=5,t.sword.angle-=t.swordAnim.added):t.swordAnim.added>0&&(t.swordAnim.added-=5),t.sword.x=t.player.x+t.player.width/e*Math.cos(t.sword.angle*Math.PI/180),t.sword.y=t.player.y+t.player.width/e*Math.sin(t.sword.angle*Math.PI/180)})),this.goTo.x&&(this.mePlayer.x=r(this.mePlayer.x,this.goTo.x,d/500),this.mePlayer.y=r(this.mePlayer.y,this.goTo.y,d/500));var l=this.myObj;if(l||(l={scale:.25}),this.meBar.width=this.mePlayer.height*l.scale/.9375,this.meBar.height=this.mePlayer.height*l.scale*.2,this.meBar.x=this.mePlayer.x-this.meBar.width/2,this.meBar.y=this.mePlayer.y-this.mePlayer.height*l.scale/1.2,this.meBar.draw(),this.myObj)var c=100/(100*this.myObj.scale)*1.5;else c=6;if(this.meSword.x=this.mePlayer.x+this.mePlayer.width/c*Math.cos(this.meSword.angle*Math.PI/180),this.meSword.y=this.mePlayer.y+this.mePlayer.width/c*Math.sin(this.meSword.angle*Math.PI/180),this.myObj){var w=this.enemies.filter((t=>t.hasOwnProperty("playerObj")));w.push({playerObj:this.myObj});try{var m=w.sort(((t,i)=>t.playerObj.coins-i.playerObj.coins)).reverse().slice(0,10),y="";m.forEach(((t,i)=>{if(t.playerObj){var e=t.playerObj;y+=`#${i+1}: ${e.name}- ${e.coins}\n`}})),this.leaderboard.setText(y),this.leaderboard.x=window.innerWidth-this.leaderboard.width,this.killCount.x=.9*window.innerWidth-this.leaderboard.width-this.killCount.width}catch(t){}this.playerCount.setText("Players: "+(Object.keys(this.enemies).length+1).toString()+"\nFPS: "+Math.round(this.sys.game.loop.actualFps)+"\nTick Speed: "+Math.round(this.tps/30*100)+"%"),this.playerCount.x=0,this.playerCount.y=0,this.myObj&&(this.coins.forEach((t=>{if(t.state.collected){if(t.state.collectedBy==this.myObj.id)var i=this.mePlayer.x,e=this.mePlayer.y;else try{var s=this.enemies.find((i=>i.id==t.state.collectedBy));i=s.player.x,e=s.player.y}catch(t){return void console.log(t)}t.item.x=r(t.item.x,i,(6-(Math.log2(d)-Math.log2(1.875)))/10*2),t.item.y=r(t.item.y,e,(6-(Math.log2(d)-Math.log2(1.875)))/10),t.state.time+=1,h=t.item.x,n=t.item.y,a=i,o=e,(Math.hypot(a-h,o-n)<this.mePlayer.width*this.mePlayer.scale/3||t.state.time>7)&&(t.item.destroy(),this.coins=this.coins.filter((i=>i.id!=t.id)))}var h,n,a,o})),!this.ready||this.dead||this.socket.connected||(document.write('<h1>You got disconnected</h1><br><button onclick="location.reload()"><h1>Refresh</h1></button>'),this.dead=!0))}}}const h=s;class n extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.background=this.add.rectangle(0,0,window.innerWidth,window.innerHeight,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(window.innerWidth/2,0,"You died",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,console.log(this.data.timeSurvived),this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(window.innerWidth/2,window.innerHeight/2,"Killed by: "+this.data.killedBy+`\nSurvived Time: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(window.innerWidth/2,window.innerHeight/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,i,e,s)=>{this.scene.start("title")})),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){this.text.setFontSize(window.innerWidth/10),this.stats.setFontSize(window.innerWidth/20),this.btntext.setFontSize(window.innerWidth/25),this.text.y<window.innerHeight/4.5&&(this.text.y+=10),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime+=1e3),this.displayCoins<this.data.coins&&(this.displayCoins+=1),this.stats.setText(`Killed by: ${this.data.killedBy}\nSurvived Time: ${function(t){parseInt(t%1e3/100);var i=Math.floor(t/1e3%60),e=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==e?"":e+"m ")+i+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(window.innerWidth,window.innerHeight),this.background.width=window.innerWidth,this.background.height=window.innerHeight,this.text.x=window.innerWidth/2,this.text.y=window.innerHeight/4.5,this.stats.x=window.innerWidth/2,this.stats.y=window.innerHeight/2,this.btntext.x=window.innerWidth/2,this.btntext.y=window.innerHeight/1.2}),!1)}}const a=n;class o extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.background=this.add.rectangle(0,0,window.innerHeight,window.innerWidth,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(window.innerWidth/2,0,"You won!",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,console.log(this.data.timeSurvived),this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(window.innerWidth/2,window.innerHeight/2,`You conquered the map and became Ka-HUGE!\nTime Taken: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(window.innerWidth/2,window.innerHeight/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,i,e,s)=>{this.scene.start("title")})),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){this.text.setFontSize(window.innerWidth/10),this.stats.setFontSize(window.innerWidth/30),this.btntext.setFontSize(window.innerWidth/25),this.text.y<window.innerHeight/4&&(this.text.y+=10),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime+=1e3),this.displayCoins<this.data.coins&&(this.displayCoins+=1e3),this.stats.setText(`You conquered the map and became Ka-HUGE!\nTime Taken: ${function(t){parseInt(t%1e3/100);var i=Math.floor(t/1e3%60),e=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==e?"":e+"m ")+i+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(window.innerWidth,window.innerHeight),this.background.width=window.innerWidth,this.background.height=window.innerHeight,this.text.x=window.innerWidth/2,this.text.y=window.innerHeight/4,this.stats.x=window.innerWidth/2,this.stats.y=window.innerHeight/2,this.btntext.x=window.innerWidth/2,this.btntext.y=window.innerHeight/1.2}),!1)}}const d=o;class r extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.go=!1,this.background=this.add.rectangle(0,0,window.innerWidth,window.innerHeight,0).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2,"Click to join the game..",{fontSize:"64px",fill:"#FFFFFF"}).setOrigin(.5),this.text.setAlpha(0),window.addEventListener("resize",(()=>{try{this.game.scale.resize(window.innerWidth,window.innerHeight),this.background.height=window.innerHeight,this.background.width=window.innerWidth}catch(t){console.log(t)}}),!0),this.input.on("pointerdown",(t=>{this.go=!0}))}update(){this.text.x=window.innerWidth/2,this.text.y=window.innerHeight/2,this.text.setFontSize(128*window.innerWidth/1920),this.go?this.text.alpha>0?this.text.setAlpha(this.text.alpha-.05):this.scene.start("title"):this.text.alpha<1&&this.text.setAlpha(this.text.alpha+.01)}}const l=r;var c={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,parent:"game",dom:{createContainer:!0},scale:{mode:Phaser.Scale.NONE}},w=new Phaser.Game(c),m=new a,y=new d,p=new h((t=>{t.win?(y.data=t.data,p.scene.start("win")):(m.data=t.data,p.scene.start("death"))})),g=new i(((t,i)=>{p.name=t,p.openingBgm=i,g.scene.start("game")})),u=new l;w.scene.add("title",g),w.scene.add("game",p),w.scene.add("death",m),w.scene.add("win",y),w.scene.add("open",u),w.scene.start("open"),window.onerror=function(t,i,e){document.write("Error : "+t+"<br><br>"),document.write("Line number : "+e+"<br><br>"),document.write("File : "+i)}})();