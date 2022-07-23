

//�\�\�\�\�\�\�\�\�\OBJ_YoutubeLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const YoutubeLink_Click = new Entity()
YoutubeLink_Click.addComponent(new PlaneShape())
YoutubeLink_Click.addComponent(new Transform({
    position: new Vector3(14.14999, 15.274, 12.219),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)
}))

YoutubeLink_Click.addComponent(new OnPointerDown((e) =>{

    //��������URL �ύX�|�C���g ������������������������������������������������
    openExternalURL("https://youtube")
},
    {
        hoverText: "Open youtube",
    }
))
 

engine.addEntity(YoutubeLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_TwitterLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const TwitterLink_Click = new Entity()
TwitterLink_Click.addComponent(new PlaneShape())
TwitterLink_Click.addComponent(new Transform({
    position: new Vector3(14.15, 15.274, 10.874),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)

}))

TwitterLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������
    openExternalURL("https://twitter")
},
    {
        hoverText: "Open twitter",
    }
))

engine.addEntity(TwitterLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_WebsiteLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const WebsiteLink_Click = new Entity()
WebsiteLink_Click.addComponent(new PlaneShape())
WebsiteLink_Click.addComponent(new Transform({
    position: new Vector3(14.15, 15.27, 13.552),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)
}))

WebsiteLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������������
    openExternalURL("https://website")
},
    {
        hoverText: "Open Website",
    }
))
engine.addEntity(WebsiteLink_Click)


//---------------Music-----------------------------------------------------------------------------------


let Sounds_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��

//---------------�X�s�[�J�[�N���b�N1--------------------------------------------------
const PlaneSounds_click1 = new Entity()
PlaneSounds_click1.addComponent(new PlaneShape())   //�`����������
PlaneSounds_click1.addComponent(new Transform({
    position: new Vector3(14.02, 15.08, 9.628003),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.5500002, 0.8940004, 0.338)
}))
PlaneSounds_click1.addComponent(new OnPointerDown((e) => {
    Sounds_OnOff = !Sounds_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds_OnOff == true) {
        sound_Background_source.playing = true

    }
    if (Sounds_OnOff == false) {
        sound_Background_source.playing = false
    }
},
    {
        hoverText: "Music On/Off",
    }

))

engine.addEntity(PlaneSounds_click1)

//---------------�X�s�[�J�[�N���b�N2--------------------------------------------------
const PlaneSounds_click2 = new Entity()
PlaneSounds_click2.addComponent(new PlaneShape())   //�`����������
PlaneSounds_click2.addComponent(new Transform({
    position: new Vector3(6.995999, 5.194002, 6.877995),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.295, 0.507, 0.14)
}))
PlaneSounds_click2.addComponent(new OnPointerDown((e) => {
    Sounds_OnOff = !Sounds_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds_OnOff == true) {
        sound_Background_source.playing = true

    }
    if (Sounds_OnOff == false) {
        sound_Background_source.playing = false
    }
},
    {
        hoverText: "Music On/Off",
    }

))

engine.addEntity(PlaneSounds_click2)

//---------���y�̔��M��-----------------
const Sounds_plate1 = new Entity()
Sounds_plate1.addComponent(new Transform({
    position: new Vector3(8, 8, 8),
    scale: new Vector3(2, 2, 2),
}))
engine.addEntity(Sounds_plate1)


//�\�\�\�\���y1�\�\�\�\�\�\

//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound_Background = new AudioClip("sounds/fog.mp3")
const sound_Background_source = new AudioSource(sound_Background)
sound_Background_source.loop = true
sound_Background_source.playing = false
sound_Background_source.volume = 0.8
Sounds_plate1.addComponent(sound_Background_source)

