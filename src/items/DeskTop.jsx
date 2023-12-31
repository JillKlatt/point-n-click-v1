/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { texts } from "../text";
import { useStore } from "../state";
import NotebookClosed from "./NotebookClosed";
import PuzzleBox from "./PuzzleBox";

import OpOne from "./OpOne";

export function Keeb(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Desktop2.glb");

  const keebClick = () => {
    props.printText(texts.keeb, "keeb");
  };

  return (
    <group
      position={[-0.08, 0.99, -0.6]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={keebClick}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[-0.26, -0.28, -0.11]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0.geometry}
            material={materials.NovelKeys}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0_1.geometry}
            material={materials.keycap}
          />
        </group>
      </group>
    </group>
  );
}

export function Desktop(props) {
  const [hasPower, setHasPower] = React.useState(false);
  const group = useRef();
  const deskState = useStore((state) => state.desk);
  const moveDeskUp = useStore((state) => state.moveDeskUp);
  const moveDeskDown = useStore((state) => state.moveDeskDown);
  const showComputerScreen = useStore((state) => state.showComputerScreen);
  const showNotebook = useStore((state) => state.showNotebook);
  const playSound = useStore((state) => state.playSound);
  const up = deskState.up;
  const { nodes, materials } = useGLTF("/Desktop2.glb");
  const upButtonTexts = texts.desk.upButton;
  const downButtonTexts = texts.desk.downButton;

  const printText = props.printText;

  const speakerClick = () => {
    printText(texts.speaker, "speaker");
  };

  const { position } = useSpring({
    position: up ? 0.2 : 0,
    config: { mass: 1, friction: 150, tension: 170 },
  });

  const handleUpClick = () => {
    if (!deskState.power) {
      printText(upButtonTexts.off, "upButton");
      return;
    }
    if (deskState.up) {
      printText(upButtonTexts.on.up);
    }
    if (!deskState.up) {
      moveDeskUp();
      playSound("deskUp");
      printText(upButtonTexts.on.down);
    }
  };

  const handleDownClick = () => {
    if (!deskState.power) {
      printText(downButtonTexts.off, "downButton");
      return;
    }
    if (deskState.up) {
      moveDeskDown();
      playSound("deskDown");
      printText(downButtonTexts.on.up);
    }
    if (!deskState.up) {
      printText(downButtonTexts.on.down);
    }
  };

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <animated.group position-y={position}>
          <NotebookClosed onClick={showNotebook} />
          <OpOne />
          <PuzzleBox {...props} />
          <group
            position={[-0.32, 0.79, -1.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.03, 1.03, 1.03]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iMac_Silver_iMac_Screen_0.geometry}
              material={materials.iMac_Screen}
              onClick={showComputerScreen}
              position={[0, 0, -0.02]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iMac_Silver_iMac_Grey_Shader_0.geometry}
              material={materials.iMac_Grey_Shader}
              position={[0, 0, -0.02]}
            />
          </group>
          <Keeb scale={1} position={[0, 0, 0]} printText={printText} />
          <group
            position={[-0.32, 0.7, -0.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.06, 1.06, 1.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Desk_Mat_Mat_Black_0.geometry}
              material={materials.Material}
              position={[0, 0, -0.02]}
              rotation={[0, 0, -Math.PI]}
            />
          </group>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cardboard_Box.geometry}
            material={materials["Cardboard box"]}
            position={[-0.32, 0.72, -0.98]}
            scale={[-0.16, -0.04, -0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desk_top.geometry}
            material={nodes.desk_top.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.up_Button.geometry}
            material={nodes.up_Button.material}
            position={[0.15, 0.64, -0.5]}
            onClick={handleUpClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.downButton.geometry}
            material={nodes.downButton.material}
            position={[0.2, 0.64, -0.5]}
            onClick={handleDownClick}
          />
          {deskState.power && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.screen.geometry}
              material={materials.ON}
              position={[0.09, 0.64, -0.5]}
            />
          )}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Plant.geometry}
            material={materials.Plant_Shader}
            position={[-0.86, 0.9, -0.9]}
            rotation={[-Math.PI / 2, 0, 1.46]}
            scale={[0.02, 0.01, 0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={nodes.Cube025.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={nodes.Cube025_1.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={nodes.Cube025_2.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_3.geometry}
            material={nodes.Cube025_3.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_4.geometry}
            material={nodes.Cube025_4.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={nodes.Cube028.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={nodes.Cube028_1.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_2.geometry}
            material={nodes.Cube028_2.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_3.geometry}
            material={nodes.Cube028_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_4.geometry}
            material={nodes.Cube028_4.material}
            onClick={speakerClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lamp.geometry}
            material={materials.material_0}
            position={[0.25, 1.18, -0.95]}
            rotation={[-Math.PI / 2, 0, 0.63]}
            scale={[0.55, 0.55, 0.55]}
          />
        </animated.group>
      </group>
    </>
  );
}

useGLTF.preload("/Desktop2.glb");