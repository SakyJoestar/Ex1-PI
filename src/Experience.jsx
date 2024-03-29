import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    const boxRef = useRef(null);
    
useFrame((state, delta) => {
    boxRef.current.rotation.y += 1 * delta;
    boxRef.current.rotation.x += 1 * delta;
})

    return(
        <>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[10,10,5]} intensity={2}/>
        <OrbitControls makeDefault/>
        <mesh ref={boxRef}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={ "purple"}/>
        </mesh>
        </>
    )
};

 export default Experience;

// const Experience = ({title, subtitle}) => {
//     return(
//   <>
//     <h1 className="title">{title}</h1>
//     <span>{subtitle}</span>
//   </>
//     )
// };

// export default Experience;