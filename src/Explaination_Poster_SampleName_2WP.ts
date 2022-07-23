
//----------------Plane領域---------------------------------------------------------------------------------------

//Edit側のplaneの回転は、下向きになってるのが正しいです
//-----------------SampleName_Plane---------------------------
const SampleName_Plane = new Entity()
SampleName_Plane.addComponent(new PlaneShape())
SampleName_Plane.addComponent(new Transform({
    position: new Vector3(8.053, 10.794, 0.6149999),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(10.31675, 4.814977, 0.546268)
}))
engine.addEntity(SampleName_Plane)


//-----------------Explain_Plane4---------------------------
const Explain_Plane4 = new Entity()
Explain_Plane4.addComponent(new Transform({
    position: new Vector3(12.646, 8.914004, 15.425),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(2.82, 2.82, 2.82)
}))
engine.addEntity(Explain_Plane4)


//-----------------Explain_Plane11---------------------------
const Explain_Plane11 = new Entity()
Explain_Plane11.addComponent(new Transform({
    position: new Vector3(2.804, 15.424, 15.452),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(2.5, 2.5, 2.5)
}))
engine.addEntity(Explain_Plane11)

//-----------------Explain_Plane12---------------------------
const Explain_Plane12 = new Entity()
Explain_Plane12.addComponent(new Transform({
    position: new Vector3(0.65998, 15.234, 2.886001),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(2.42, 2.42, 2.42)
}))
engine.addEntity(Explain_Plane12)

//-----------------Poster_Plane---------------------------
const Poster_Plane = new Entity()
Poster_Plane.addComponent(new Transform({
    position: new Vector3(13.843, 2.364, 1.035),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(2.113, 3.276, 0.373)
}))
engine.addEntity(Poster_Plane)


//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__plane4----------
const Explain_Plane4_UV = new PlaneShape()
Explain_Plane4_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Explain_Plane4.addComponent(Explain_Plane4_UV)

//------ UV__plane11---------
const Explain_Plane11_UV = new PlaneShape()
Explain_Plane11_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Explain_Plane11.addComponent(Explain_Plane11_UV)

//------ UV__plane12----------
const Explain_Plane12_UV = new PlaneShape()
Explain_Plane12_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Explain_Plane12.addComponent(Explain_Plane12_UV)

//------ UV__Poster_plane----------
const Poster_Plane_UV = new PlaneShape()
Poster_Plane_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Poster_Plane.addComponent(Poster_Plane_UV)




//----------------Onclick領域---------------------------------------------------------------------------------------

//------------Explain_Plane4--------------------------
Explain_Plane4.addComponent(new OnPointerDown((e) => {
    
        canvas.visible = true                   //ボタンクリックで、canvasを表示する
        text4.visible = true                   //クリックでテキスト1(MEA AQUA説明文)表示
        close_botton.visible = true          //クリックで閉じるボタン表示
    },
    {
        hoverText: "Explanation in English",
    }
))

//------------Explain_Plane12--------------------------
Explain_Plane11.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text11.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))

//------------Explain_Plane12--------------------------
Explain_Plane12.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text12.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))

//----------------UI領域---------------------------------------------------------------------------------------

const canvas = new UICanvas()
canvas.visible = false        //初期設定で、キャンバスを見えなくする


//------------背景領域、60*60の白_半透明_背景---------------------------
const UI_Back1 = new UIContainerStack(canvas)      //canvasの子として配置、
UI_Back1.adaptWidth = false
UI_Back1.width = "70%"
UI_Back1.height = "70%"

UI_Back1.positionY = 0
UI_Back1.positionX = 0
UI_Back1.color = Color4.White()
UI_Back1.opacity = 0.5
UI_Back1.hAlign = "center"
UI_Back1.vAlign = "center"
UI_Back1.stackOrientation = UIStackOrientation.VERTICAL



//------------text1__ExplainPlane1  人物紹介---------------------------
const text1 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text1.value = "Explaination1 in English"

text1.color = Color4.Black()
text1.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,righr
text1.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text1.fontSize = 22
text1.width = "55%"        //%で表記する(数値でもできる)。
text1.positionY = -30
text1.opacity = 1
text1.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text1.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text1.visible = false                         //初期設定でtext1を表示させない


//------------text4__ExplainPlane4---------------------------
const text4 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text4.value = "Here is the description of panel 12. Click to enter English sentences increase.I'm looking at the resolution of the characters now It will be published in the resolution of.Number of characters from 170 to 220 is suitable. The number of characters is If there are few, leave the bottom blank and display to do."     

text4.color = Color4.Black()
text4.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,righr
text4.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text4.fontSize = 22
text4.width = "55%"        //%で表記する(数値でもできる)。
text4.positionY = -30
text4.opacity = 1
text4.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text4.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text4.visible = false                         //初期設定でtext1を表示させない

//------------text11__ExplainPlane11---------------------------
const text11 = new UIText(canvas)

 //★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text11.value = "Explaination11 in English"     

text11.color = Color4.Black()
text11.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text11.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text11.fontSize = 22
text11.width = "55%"        //%で表記する(数値でもできる)。
text11.positionY = -20
text11.opacity = 1
text11.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text11.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text11.visible = false                       //初期設定でtext11を表示させない

//------------text12__ExplainPlane12---------------------------
const text12 = new UIText(canvas)

 //★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text12.value = "Explaination12 in English"

text12.color = Color4.Black()
text12.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text12.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text12.fontSize = 22
text12.width = "55%"        //%で表記する(数値でもできる)。
text12.positionY = -20
text12.opacity = 1
text12.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text12.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text12.visible = false                       //初期設定でtext11を表示させない



//------------close_領域------------------------------------------
//------------close_text領域---------------------------

const close_text = new UIText(canvas)
close_text.value = " close"    

close_text.color = Color4.Black()
close_text.fontSize = 21
close_text.width = "9%"        //%で表記する(数値でもできる)。
close_text.height = "6%"
close_text.hAlign = "center"
close_text.positionX = 14
close_text.positionY = -115
close_text.opacity = 1
close_text.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
close_text.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない


//------------クリックボタン領域、Closeのボタン----------------------
const close_botton = new UIImage(canvas, new Texture("images/scene-thumbnail.png"))
close_botton.name = "clickable-image"
close_botton.width = "9%"         //ボタンの大きさは100*30pxくらいがいい
close_botton.height = "6%"
close_botton.positionX = 0         //ポジション変更、+で➡寄り、ーで←寄り。中央が問題が少なそう。
close_botton.positionY = -120        //-120が限界かもしれない、それより下はクリック不可。ポジション変更、ーで下に移動
close_botton.opacity = 0.2


//ボタンクリックで実行、この形式はUIであり、エンティティにはOnPointerDownを使う
close_botton.onClick = new OnClick(() => {
    canvas.visible = false                       //ボタンクリックで、canvasを観えなくする
    text1.visible = false                         //閉じるボタンでテキスト2を表示させない
    text4.visible = false                         //閉じるボタンでテキスト2を表示させない
    text11.visible = false                         //閉じるボタンでテキスト10を表示させない
    text12.visible = false                         //閉じるボタンでテキスト11を表示させない

    canvas.isPointerBlocker = true
    close_botton.visible = false              //閉じるボタンで、閉じるボタンそのものを表示させない

})


//----------------マティ領域---------------------------------------------------------------------------------------

//-------マティ SampleName---------------
const SampleName_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const SampleName_Tex = new Texture("images/water.jpg")
SampleName_Mat.texture = SampleName_Tex

SampleName_Plane.addComponent(SampleName_Mat)

//-------マティ  1～4---------------
const Explain_Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Explain_Plane1to4_Tex = new Texture("images/Explain_poster.png")
Explain_Plane1to4_Mat.texture = Explain_Plane1to4_Tex

Explain_Plane4.addComponent(Explain_Plane1to4_Mat)
Explain_Plane11.addComponent(Explain_Plane1to4_Mat)
Explain_Plane12.addComponent(Explain_Plane1to4_Mat)
Poster_Plane.addComponent(Explain_Plane1to4_Mat)