import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Pastry = ({ }) => {
    const pastry = useGLTF("./pastryHero/pastryHero.gltf");
     
    const myMesh = React.useRef();
/*
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });
  */
    return (
      <mesh ref={myMesh}>
         <directionalLight
        	name="Directional Light"
        	castShadow
        	intensity={0.7}
        	shadow-mapSize-width={1024}
        	shadow-mapSize-height={1024}
        	shadow-camera-near={-10000}
        	shadow-camera-far={100000}
        	shadow-camera-left={-1000}
        	shadow-camera-right={1000}
        	shadow-camera-top={1000}
        	shadow-camera-bottom={-1000}
        	position={[200, 300, 28.31]}
      	/>
        <hemisphereLight name="Default Ambient Light" intensity={1.3} color="#eaeaea" />

        
        <primitive
          object={pastry.scene}
          scale={ 2.7}
          position= { [0, 0, 0]}
          rotation={[.5, .5, 0]}
        />
      </mesh>
    );
  };
  
  const PastryCanvas = () => {
    
  
    return (
      <Canvas
        style={{height: '56vh'}}
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Pastry />
        </Suspense>
  
        <Preload all />
      </Canvas>
    );
  };
  
  export default PastryCanvas;