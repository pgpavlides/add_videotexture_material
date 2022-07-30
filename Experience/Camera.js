import * as THREE from "three"

import Experience from "./Experience";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerpectiveCamera();
        // this.createOrthographicCamera();
        this.setOrbitControls();
        
        
    }

    createPerpectiveCamera(){
        this.perpectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );

        this.perpectiveCamera.position.x = 0;
        this.perpectiveCamera.position.y = 19;
        this.perpectiveCamera.position.z = 30;

       
        
    }

   

  

    // createOrthographicCamera(){
        
    //     this.orthographicCamera = new THREE.OrthographicCamera(
    //         (-this.sizes.aspect * this.sizes.frustrum)/2,
    //         (this.sizes.aspect * this.sizes.frustrum)/2,
    //         this.sizes.frustrum/2,
    //         -this.sizes.frustrum/2,
    //         -40,
    //         40
    //     );

    //     this.orthographicCamera.position.y = 1.25;
    //     this.orthographicCamera.position.x = 0;
    //     this.orthographicCamera.rotation.x = -Math.PI / 6 ;

    //     // this.scene.add(this.orthographicCamera);
        

    //     // this.helper = new THREE.CameraHelper(this.orthographicCamera);
    //     // this.scene.add(this.helper);

    //     const size = 20;
    //     const divisions = 20;

    //     // const gridHelper = new THREE.GridHelper(size, divisions);
    //     // this.scene.add (gridHelper);

    //     // const axesHelper = new THREE.AxesHelper( 5 );
    //     // this.scene.add (axesHelper);

        
      
        
        
    //     // this.scene.add(this.orthographicCamera);
        
    // }

    setOrbitControls(){

        

        this.controls = new OrbitControls(this.perpectiveCamera, this.canvas); 
        this.controls.enableDamping = true;
        // this.controls.dampingFactor = 1.5;
        this.controls.rotateSpeed = 0.5;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.2;
     }
     
    resizeCamera(){

        // Updating PerspectiveCamera on resize
        this.perpectiveCamera.aspect = this.sizes.aspect
        this.perpectiveCamera.updateProjectionMatrix();
        

        // this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2
        // this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2
        // this.orthographicCamera.top = this.sizes.frustrum/2
        // this.orthographicCamera.bottom = -this.sizes.frustrum/2
        // this.orthographicCamera.updateProjectionMatrix();
    }

    

    update(){
        this.controls.update();
        // console.log(this.perpectiveCamera.position.x,this.perpectiveCamera.position.y,this.perpectiveCamera.position.z)
        
        // console.log("x  " + this.perpectiveCamera.position.x);
        // console.log("y  " + this.perpectiveCamera.position.y);
        // console.log("z  " + this.perpectiveCamera.position.z);
        
        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // this.helper.position.copy(this.orthographicCamera.position);
        // this.helper.rotation.copy(this.orthographicCamera.rotation);
        // console.log(this.perpectiveCamera.position)

    }


}