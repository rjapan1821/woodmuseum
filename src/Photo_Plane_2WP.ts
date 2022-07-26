

//----------------Frame領域---------------------------------------------------------------------------------------
//-----------------PicFrame1----------------------------------------------------------------------------
const PicFrame1 = new Entity()
PicFrame1.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame1.addComponent(new Transform({
    position: new Vector3(14.69, 1.73, 4.789994),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(2.223, 1.548, 1.215)
}))

//-----------------PicFrame2----------------------------------------------------------------------------
const PicFrame2 = new Entity()
PicFrame2.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame2.addComponent(new Transform({
    position: new Vector3(11.91801, 1.73, 7.170001),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.645, 1.084, 0.841)
}))

//-----------------PicFrame3----------------------------------------------------------------------------
const PicFrame3 = new Entity()
PicFrame3.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame3.addComponent(new Transform({
    position: new Vector3(6.958007, 1.71, 7.164004),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.682, 1.112, 0.855)
}))

//-----------------PicFrame4----------------------------------------------------------------------------
const PicFrame4 = new Entity()
PicFrame4.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame4.addComponent(new Transform({
    position: new Vector3(6.859, 9.14, 15.422),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(4.833, 3.312, 2.545)
}))

//-----------------PicFrame5----------------------------------------------------------------------------
const PicFrame5 = new Entity()
PicFrame5.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame5.addComponent(new Transform({
    position: new Vector3(7.016, 1.73, 11.028),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.59, 1.084, 0.843)
}))

//-----------------PicFrame6----------------------------------------------------------------------------
const PicFrame6 = new Entity()
PicFrame6.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame6.addComponent(new Transform({
    position: new Vector3(11.879, 1.71, 11.015),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.633, 1.12, 0.859)
}))

//-----------------PicFrame7----------------------------------------------------------------------------
const PicFrame7 = new Entity()
PicFrame7.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame7.addComponent(new Transform({
    position: new Vector3(5.785, 8.06, 7.875),
    rotation: new Quaternion(0, 0.3665012, 0, -0.9304176),
    scale: new Vector3(1.76, 1.21, 0.92)
}))

//-----------------PicFrame8----------------------------------------------------------------------------
const PicFrame8 = new Entity()
PicFrame8.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame8.addComponent(new Transform({
    position: new Vector3(11.973, 8.38, 7.897),
    rotation: new Quaternion(0, 0.358368, 0, 0.9335805),
    scale: new Vector3(1.777, 1.23, 0.699)
}))

//-----------------PicFrame9----------------------------------------------------------------------------
const PicFrame9 = new Entity()
PicFrame9.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame9.addComponent(new Transform({
    position: new Vector3(12.004, 8.14, 10.143),
    rotation: new Quaternion(0, 0.9304176, 0, 0.3665012),
    scale: new Vector3(1.754, 1.139, 0.884)
}))

//-----------------PicFrame10----------------------------------------------------------------------------
const PicFrame10 = new Entity()
PicFrame10.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame10.addComponent(new Transform({
    position: new Vector3(5.806, 8.1, 10.101),
    rotation: new Quaternion(0, 0.9335805, 0, -0.3583679),
    scale: new Vector3(1.724, 1.173, 0.907)
}))

//-----------------PicFrame11----------------------------------------------------------------------------
const PicFrame11 = new Entity()
PicFrame11.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame11.addComponent(new Transform({
    position: new Vector3(8.171, 15.63, 15.427),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(4.346, 2.969, 2.244)
}))

//-----------------PicFrame12----------------------------------------------------------------------------
const PicFrame12 = new Entity()
PicFrame12.addComponent(new GLTFShape("models/2G_PicFrame_gltf.gltf"))
PicFrame12.addComponent(new Transform({
    position: new Vector3(0.7169998, 15.28, 7.283005),
    rotation: new Quaternion(0, 0.7071068, 0, -0.7071068),
    scale: new Vector3(3.628, 2.538, 1.948)
}))




//----------------Plane領域---------------------------------------------------------------------------------------

const scale_x = 1.55
const scale_y = 1.55
const scale_z = 1


//-----------------Plane1---------------------------
const Plane1 = new Entity()
Plane1.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane2---------------------------
const Plane2 = new Entity()
Plane2.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane3---------------------------
const Plane3 = new Entity()
Plane3.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane4---------------------------
const Plane4 = new Entity()
Plane4.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane5---------------------------
const Plane5 = new Entity()
Plane5.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane6---------------------------
const Plane6 = new Entity()
Plane6.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane7---------------------------
const Plane7 = new Entity()
Plane7.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane8---------------------------
const Plane8 = new Entity()
Plane8.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane9---------------------------
const Plane9 = new Entity()
Plane9.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane10---------------------------
const Plane10 = new Entity()
Plane10.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane11---------------------------
const Plane11 = new Entity()
Plane11.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane12---------------------------
const Plane12 = new Entity()
Plane12.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(scale_x, scale_y, scale_z),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//----------------ペアレント領域---------------------------------------------------------------------------------------
Plane1.setParent(PicFrame1)
Plane2.setParent(PicFrame2)
Plane3.setParent(PicFrame3)
Plane4.setParent(PicFrame4)
Plane5.setParent(PicFrame5)
Plane6.setParent(PicFrame6)
Plane7.setParent(PicFrame7)
Plane8.setParent(PicFrame8)
Plane9.setParent(PicFrame9)
Plane10.setParent(PicFrame10)
Plane11.setParent(PicFrame11)
Plane12.setParent(PicFrame12)

//----------------エンジン領域---------------------------------------------------------------------------------------
engine.addEntity(PicFrame1)
engine.addEntity(PicFrame2)
engine.addEntity(PicFrame3)
engine.addEntity(PicFrame4)
engine.addEntity(PicFrame5)
engine.addEntity(PicFrame6)
engine.addEntity(PicFrame7)
engine.addEntity(PicFrame8)
engine.addEntity(PicFrame9)
engine.addEntity(PicFrame10)
engine.addEntity(PicFrame11)
engine.addEntity(PicFrame12)



//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__plane1----------
const Plane1_UV = new PlaneShape()
Plane1_UV.uvs = [
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
Plane1.addComponent(Plane1_UV)

//------ UV__plane2----------
const Plane2_UV = new PlaneShape()
Plane2_UV.uvs = [
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
Plane2.addComponent(Plane2_UV)

//------ UV__plane3----------
const Plane3_UV = new PlaneShape()
Plane3_UV.uvs = [
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
Plane3.addComponent(Plane3_UV)

//------ UV__plane4----------
const Plane4_UV = new PlaneShape()
Plane4_UV.uvs = [
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
Plane4.addComponent(Plane4_UV)

//------ UV__plane5----------
const Plane5_UV = new PlaneShape()
Plane5_UV.uvs = [
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
Plane5.addComponent(Plane5_UV)

//------ UV__plane6----------
const Plane6_UV = new PlaneShape()
Plane6_UV.uvs = [
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
Plane6.addComponent(Plane6_UV)

//------ UV__plane7----------
const Plane7_UV = new PlaneShape()
Plane7_UV.uvs = [
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
Plane7.addComponent(Plane7_UV)

//------ UV__plane8----------
const Plane8_UV = new PlaneShape()
Plane8_UV.uvs = [
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
Plane8.addComponent(Plane8_UV)

//------ UV__plane9----------
const Plane9_UV = new PlaneShape()
Plane9_UV.uvs = [
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
Plane9.addComponent(Plane9_UV)

//------ UV__plane10----------
const Plane10_UV = new PlaneShape()
Plane10_UV.uvs = [
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
Plane10.addComponent(Plane10_UV)

//------ UV__plane11----------
const Plane11_UV = new PlaneShape()
Plane11_UV.uvs = [
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
Plane11.addComponent(Plane11_UV)

//------ UV__plane12----------
const Plane12_UV = new PlaneShape()
Plane12_UV.uvs = [
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
Plane12.addComponent(Plane12_UV)








//----------------Onclick領域---------------------------------------------------------------------------------------

//人物紹介のPlane1だけOnClickで英語表記ができる。
Plane1.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text1.visible = true                   //クリックでテキスト1表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))

/*
//NFTを入れる場合はここを変更する
//------------Onclick--------------------------
Plane1.addComponent(new OnPointerDown((e) => {

    // openExternalURL("https://2423449029wners")


    //NFTを開くにはこちら、ethereum://コントラクト/トークンID　　
    openNFTDialog("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/54563776266242323944574597059366271481682546366005111285728620076447125471233")

}))

*/


  


//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane1to4_Tex = new Texture("images/photo1to4_1229px.png")
Plane1to4_Mat.texture = Plane1to4_Tex

Plane1.addComponent(Plane1to4_Mat)
Plane2.addComponent(Plane1to4_Mat)
Plane3.addComponent(Plane1to4_Mat)
Plane4.addComponent(Plane1to4_Mat)

//-------マティ  5～8---------------
const Plane5to8_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane5to8_Tex = new Texture("images/photo5to8_1229px.png")
Plane5to8_Mat.texture = Plane5to8_Tex

Plane5.addComponent(Plane5to8_Mat)
Plane6.addComponent(Plane5to8_Mat)
Plane7.addComponent(Plane5to8_Mat)
Plane8.addComponent(Plane5to8_Mat)

//-------マティ  9～12---------------
const Plane9to12_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane9to12_Tex = new Texture("images/photo9to12_1229px.png")
Plane9to12_Mat.texture = Plane9to12_Tex

Plane9.addComponent(Plane9to12_Mat)
Plane10.addComponent(Plane9to12_Mat)
Plane11.addComponent(Plane9to12_Mat)
Plane12.addComponent(Plane9to12_Mat)




