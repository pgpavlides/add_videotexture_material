import * as THREE from "three"

import Experience from "../Experience.js";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
 

        this.setSunlight();
        this.setSunlight2();
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#fdedad", 4);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 15;
        this.sunLight.shadow.mapSize.set(2048,2048);
        this.sunLight.shadow.normalBias = 0.15;
        
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);

    }

    setSunlight2() {
        this.sunLight2 = new THREE.AmbientLight( "#ffffff", 1 );
       
        this.scene.add(this.sunLight2);

    }

 
    
    resize(){

    }

    update(){
        
    }

}