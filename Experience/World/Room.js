import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"
// import flamingo from "/textures/flamingo.mp4"

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
        this.setBalls();
        // this.onMouseMove();
        
        

    }

    setBalls(){
        
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

            // console.log(child)

            if(child.name === "WORLD_EDAFOS"){
                            

                child.material = new THREE.MeshBasicMaterial({
             
                    map : this.resources.items.screen,
                 });                                                    
            }
        });

  
 
        // this.scene.add(this.actualRoom)
        
    }

    setAnimation() {
        // this.mixer = new THREE.AnimationMixer(this.actualRoom);
        // this.swim = this.mixer.clipAction(this.room.animations[0]);
                
        // this.swim.play();
        
    // //   
        // console.log(this.room);
    }

    
    
    
    resize(){

    }

    update(){
        
   
        // this.mixer.update(this.time.delta * 0.0007);
    }

}