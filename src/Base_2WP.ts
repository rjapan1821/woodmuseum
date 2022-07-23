
//―――――――――――OBJ ―――――――――――――――――――――――――――――――――――――――――
//―――――――――OBJ_Bill_All―――――――――――――


const Bill_All = new Entity()
Bill_All.addComponent(new GLTFShape("models/2G_DCL_gltf.gltf"))   
Bill_All.addComponent(new Transform({


//★★★★変更ポイント  微妙な位置ずれを修正 ★★★★★★★★★★★★★★★★★★★★★★★
    position: new Vector3(7.959999, -0.06599934, 8.142),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
}))

engine.addEntity(Bill_All)


