import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"
import flamingo from "/textures/flamingo.mp4"

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene
        
    // console.log(flamingo)
        

        this.setModel();
        this.setAnimation();
        // this.onMouseMove();
        
    }

   

    setModel() {

        // console.log(this.resources.items.screen)
        // console.log(this.actualRoom)

        this.actualRoom.children.forEach (child=>{
            child.castShadow = true;
            child.receiveShadow = true;

            if(child instanceof THREE.Group){
                child.children.forEach ((groupchild)=>{
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            }

            

            if(child.name === "WORLD_EDAFOS"){
             

                console.log(this.resources.items.screen)
                
                // child.material = new THREE.MeshBasicMaterial({color: 0xff00ff});
                child.material = new THREE.MeshBasicMaterial({
                    // color: 0xff00ff25,
                    // map : this.resources.items.screen,
                 });
                //  child.material.color.set(0xff00ff16)
                //  child.material.map = (this.resources.items.screen)
                
                
                // child.material.color = "#ffee00"
                // console.log(child.material.color)
               
            }
        });

        // console.log(this.video)
        // console.log(this.resources.items.screen)
 
        this.scene.add(this.actualRoom)
        
    }

    setAnimation() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
                
    //     this.swim.play();
        
    // //   
    //     console.log(this.room);
    }

    
    // onMouseMove(){
    //     // window.addEventListener("mousemove", (e)=>{
    //     //     // console.log(e);
    //     //     this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
    //     //     this.lerp.target = this.rotation * 0.1;
    //     //     console.log(this.rotation)
    //     // });
    // }
    
    resize(){

    }

    update(){
        
        // this.lerp.current = GSAP.utils.interpolate(
        //     this.lerp.current,
        //     this.lerp.target,
        //     this.lerp.ease
        // );

        // this.actualRoom.rotation.y = this.lerp.current;
        // this.controls.update();  
        this.mixer.update(this.time.delta * 0.0007);
    }

}