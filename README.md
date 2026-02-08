# NodeWebSocket_PaintDemo_STARTER

# naughty_fatty_in_the_sea
a simple cyber pet can be kept both in laptop&amp;smart phone
project prototype reference https://editor.p5js.org/ltomlinson/sketches/3yY82TBxQ
【how to play】
so far accesible：
1-UNZIP the file

2-open it in VScode

3-make sure your laptop&phone connect the same wifi

4-CLICK INDEX.HTML WITH MOUSE RIGHT BUTTON"OPEN WITH LIFE SURVER"
<img width="1449" height="866" alt="image" src="https://github.com/user-attachments/assets/441ab6a0-791a-485b-b817-8637f4a9e28d" />

5-CHOOSE TERMINAL,TYPE"IP CONFIG" FIND YOUR HOST NAME
<img width="336" height="27" alt="image" src="https://github.com/user-attachments/assets/da64eb3c-4608-469d-94f0-3831b51f53e2" />

6--Open 【Chrome】on your mobile phone

7--http://YOUR HOST NAME/NodeWebSocket_PaintDemo_STARTER/public/
(this game should be functional both on android/apple IOS system)



【my working process】
<img width="1021" height="594" alt="image" src="https://github.com/user-attachments/assets/3c32e35e-2b22-4f27-aae6-918eb312cf37" />


Plan A A+ A++:
A--simplest,just drag a whale to interect with sth
A+---operating submarine to attrack cute whales
A++---multiple player mode,each player can become a whale

I started from PLAN A
【noumenon】
1-make a whale with mouseX&Y

2-make a simply interective cyber whale
(they will follow u accroding to the mouseX&Y)

【Different device linkage/network connection】

1-Can be played on the phone(touch the screen)

2-multiple players attract multiple whales at the same time(optional/potintial extension)

I start to test the phone interection directly from this[project prototype reference https://editor.p5js.org/ltomlinson/sketches/3yY82TBxQ]


find free picture
<img width="640" height="641" alt="image" src="https://github.com/user-attachments/assets/166174a2-7db6-45f6-a306-3d7739325ebc" />
<img width="891" height="454" alt="image" src="https://github.com/user-attachments/assets/e97810ec-2e7a-4e91-bc27-b1828930df87" />

The key to operate the game both in computer&mobile device is to find a paramater suitable for phone that similar to mouseX&Y
obviously its not a good idea to write[mouseY/mouseX );],because it seems my phone dont know what mouse.x/y means
<img width="268" height="58" alt="image" src="https://github.com/user-attachments/assets/00ad644a-0dbc-4912-a80e-20cef05065e0" />
so i give a paramater called"TARGET"<img width="248" height="49" alt="image" src="https://github.com/user-attachments/assets/7126b6e0-c2be-4f6d-a94d-a0ab30a76bb1" />
 transfered TO mouse X&Y
↓this is the first time i try to make this,so there s a lot of chaos during i creat this thing,my mobile phone showed nothing for 2 hours,i have to create test file to check the problem
(actually i didnt managed to find out whats going on,probably its my method to open the browser was unreasonable(?))
![5f5c4643685d78b9bef076fd58a5d417](https://github.com/user-attachments/assets/c4525332-e63c-4631-9d17-f11e9ba12201)
![74863852b92a34cb54bbdfaac1d8d00b](https://github.com/user-attachments/assets/1f9fb538-b9fe-49dd-a5db-2f6a3b2b177e)
<img width="364" height="172" alt="QQ截图20260208031443" src="https://github.com/user-attachments/assets/039e8b2f-eebf-45c8-837c-9a665816e583" />
<img width="832" height="299" alt="image" src="https://github.com/user-attachments/assets/b64377d5-ec71-4088-84a9-0c18f5da098d" />
<img width="363" height="59" alt="image" src="https://github.com/user-attachments/assets/374e563b-670e-4b77-b428-9960b6946781" />
<img width="1083" height="412" alt="image" src="https://github.com/user-attachments/assets/c48befb7-6b13-4415-8e8c-2bfdbe3adc5e" />
<img width="626" height="389" alt="image" src="https://github.com/user-attachments/assets/092acf2a-eed0-4519-aa81-e47614af00a4" />
finally...but then new problems
<img width="307" height="474" alt="f9888c752c8e44e11f56d4fbac230ccc" src="https://github.com/user-attachments/assets/ea94bf40-ffef-4902-8d3e-6a639095ee86" />
this part i forget to give the screenshot,but actually my fish dont move,so i change to [touch] as interective gesture
<img width="693" height="432" alt="image" src="https://github.com/user-attachments/assets/8fc40afa-becc-4826-ae68-6817f9f51930" />


when i started to modify the background and the game,nearly 3 hours passed,i have to spend extra many time to create
<img width="1111" height="677" alt="image" src="https://github.com/user-attachments/assets/63321ac9-1dc9-4765-bff2-594e989bc439" />

new issue---------when i pulling the whale,its tail is the"head"..i have to modify the rotate angle+pi

<img width="297" height="49" alt="image" src="https://github.com/user-attachments/assets/b4231b51-6594-44bc-be73-fdb06d2a54f2" />


any way,at least i made sth...
<img width="270" height="484" alt="image" src="https://github.com/user-attachments/assets/c685a853-52db-40cf-b3bd-93d0d48430a4" />
![5d596f0ff4450a9e40eee86e26392c27](https://github.com/user-attachments/assets/cbb62853-7358-4636-b797-fb46966e1983)




