import * as THREE from "three"
import Room from "./Room.js"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from "../Experience.js";
import GSAP from "gsap"

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;
        this.sizes = this.experience.sizes;
        this.world = this.experience.world;
       

    
        
        // let currentIntersect = null;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        
        this.currentIntersect = null;
        this.onPointerMove();
        this.onPointerClick();
        // this.resetCamera();

        // this.setOrbitControls();
        // console.log(this.world)
        
        // console.log(this.camera.perpectiveCamera.position)
        // console.log(this.world.mike)
        
        
    }
   

    

    
    
    
   onPointerMove() {
    
    window.addEventListener("mousemove", (event) =>{
    
        this.mouse.x = event.clientX / this.sizes.width * 2 - 1
        this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1  
        
        });        
    } 

    onPointerClick(){
        
        window.addEventListener('click', () =>
        {

            this.timeline = new GSAP.timeline();

            

            if(this.currentIntersect)
            {
                switch(this.currentIntersect.object)
                {
                    case this.world.object1:
                        
                        this.timeline.to(this.camera.perpectiveCamera.position, {
                            x: 0.3186,
                            y: 9.8163,
                            z: 20.7420,
                            ease: "Sine.easeOut",
                            duration: 2,
                        }, "same")

                        this.timeline.to(this.camera.controls.target, {
                            x: this.world.object1.position.x,
                            y: this.world.object1.position.y,
                            z: this.world.object1.position.z,
                            ease: "Sine.easeOut",
                            duration: 2,
                            
                            
                        }, "same")
                        break

                    case this.world.object2:
                        
                        this.timeline.to(this.camera.perpectiveCamera.position, {
                            x: -14.7316,
                            y: 9.7463,
                            z: 21.0062,
                            ease: "Sine.easeOut",
                            duration: 2,
                            
                            
                        }, "same")
                        
                        // console.log(this.object2in)
                        this.timeline.to(this.camera.controls.target, {
                            x: this.world.object2.position.x,
                            y: this.world.object2.position.y,
                            z: this.world.object2.position.z,
                            ease: "Sine.easeOut",
                            duration: 2,
                            
                            
                        }, "same")
                        break

                    case this.world.object3:
                        this.timeline.to(this.camera.perpectiveCamera.position, {
                            x: 15.39,
                            y: 10.010,
                            z: 20.387,
                            ease: "Sine.easeOut",
                            duration: 2,
                            
                            
                        }, "same")
                        
                        // console.log(this.object2in)
                        this.timeline.to(this.camera.controls.target, {
                            x: this.world.object3.position.x,
                            y: this.world.object3.position.y,
                            z: this.world.object3.position.z,
                            ease: "Sine.easeOut",
                            duration: 2,
                            
                            
                        }, "same")
                        break
                }
            }
        })
    }


    resetCamera(){
        this.button = document.querySelector(".resetcamerabutton")
        this.button.onclick = (event) => {
            this.timeline = new GSAP.timeline();
            this.timeline.to(this.camera.perpectiveCamera.position, {
                x: 0.3186,
                y: 19.8163,
                z: 30.7420,
                ease: "Sine.easeOut",
                duration: 2,
            }, "same")

            this.timeline.to(this.camera.controls.target, {
                x: this.world.object1.position.x,
                y: this.world.object1.position.y,
                z: this.world.object1.position.z,
                ease: "Sine.easeOut",
                duration: 2,
                
                
            }, "same")
        };
            
            
            // console.log(this.camera.perpectiveCamera)
      
            
            

            
        
    }
    
    resize(){

    }

    update(){

        // console.log(this.mouse.x)
        // console.log(this.mouse.y)

        this.camera.controls.update();
        
        this.raycaster.setFromCamera(this.mouse, this.camera.perpectiveCamera )  
       
        // let currentIntersect = null;
        const objectsToTest = [ this.world.object1, this.world.object2, this.world.object3 ];
        const intersects = this.raycaster.intersectObjects(objectsToTest)

        if(intersects.length)
        {
            if(!this.currentIntersect)
            {
                // console.log('mouse enter')
            }
    
            this.currentIntersect = intersects[0]
        }
        else
        {
            if(this.currentIntersect)
            {
                // console.log('mouse leave')
            }
            
            this.currentIntersect = null
        } 
    
        
        // for ( let i = 0; i < this.objectsToTest.length; i ++ ) {

        //     this.objectsToTest[1].object.material.color.set( 0xff0000 );
    
        // }
                
    }

}