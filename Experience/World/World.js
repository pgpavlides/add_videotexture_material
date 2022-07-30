import * as THREE from "three"

import Experience from "../Experience.js";

import Room from "./Room.js"
import Floor from "./Floor.js"
import Controls from "./Controls.js"
import Environment from "./Environment.js"

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        this.time = this.experience.time;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.room = new Room();
            this.floor = new Floor(); 
            this.controls = new Controls();
        });

        this.textureLoader = new THREE.TextureLoader()
        this.particleTexture = this.textureLoader.load('/textures/mike.png');

        this.createSpheres();
        this.particleSystem();

        
    }



    particleSystem(){
        this.particlesGeometry = new THREE.BufferGeometry(2,32,32)
        this.count = 10000;

        this.positions = new Float32Array(this.count * 3);
        this.colors = new Float32Array(this.count * 3);

        for(let i = 0; i < this.count * 3; i++){
            this.positions[i] = (Math.random() - 0.5) * 90
            this.colors[i] = Math.random();
        }

        this.particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.positions, 3)
        )
        this.particlesGeometry.setAttribute(
            'color',
            new THREE.BufferAttribute(this.colors, 3)
        )


        this.particlesMaterial = new THREE.PointsMaterial();
        this.particlesMaterial.size = 0.9;
        this.particlesMaterial.sizeAttenuation = true;
        // this.particlesMaterial.color = new THREE.Color('#00ff00')
        this.particlesMaterial.map = this.particleTexture
        this.particlesMaterial.transparent = true;
        this.particlesMaterial.alphaMap = this.particleTexture
        // this.particlesMaterial.alphaTest = 0.001;
        // this.particlesMaterial.depthTest = true;
        this.particlesMaterial.depthWrite = false;
        this.particlesMaterial.vertexColors = true;
        this.particles = new THREE.Points(this.particlesGeometry,this.particlesMaterial)
        this.scene.add(this.particles)
            
       
    }

    createSpheres() {

        
        
        this.geometry = new THREE.SphereGeometry ( 1.3,15,16 );
        this.material = new THREE.MeshBasicMaterial ( {color: 0xff0000 , wireframe: true});
        this.material2 = new THREE.MeshBasicMaterial ( {color: 0x00ff00 , wireframe: true});
        this.material3 = new THREE.MeshBasicMaterial ( {color: 0x0000ff , wireframe: true});
        this.object1 = new THREE.Mesh (this.geometry , this.material );
        this.object2 = new THREE.Mesh (this.geometry , this.material2 );
        this.object3 = new THREE.Mesh (this.geometry , this.material3 );
        
        // this.scene.add(this.object1,this.object2,this.object3);
        
        this.object1.position.set(0,0,0);
        this.object2.position.set(-15,0,0);
        this.object3.position.set(+15,0,0);
    }

    resize(){ 
        
    }

    update(){

        for(let i = 0; i < this.count * 3; i++){
            
            // this.i3 = i * 3

            // this.x = this.particlesGeometry.attributes.position.array[this.i3 + 2]
            // this.particlesGeometry.attributes.position.array[this.i3 + 1] = (Math.sin(this.time.elapsed * 0.001 + this.x)  )
            
        }

        this.particlesGeometry.attributes.position.needsUpdate = true;

        if (this.room) {
            this.room.update();
        }
        if (this.controls) {
            this.controls.update();
        }
    }

}
     

    
