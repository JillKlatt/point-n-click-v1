/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useStore } from "../state";

export default function PuzzleBox(props) {
  const group = useRef();
  const { texts, printText } = props;
  const { nodes } = useGLTF("/puzzleBox.glb");
  const {
    collectPuzzle,
    hideButton,
    setButton,
    addToInventory,
    puzzle,
    playSound,
  } = useStore();
  const handleClick = () => {
    printText(texts.puzzle);

    setButton({
      text: "Collect box",
      click: collectPuzzle,
      afterClick: () => {
        playSound("pickup");
        printText([
          "I pick it up. It feels slightly warm. Actually, it doesn't... but it seems like the kind of thing you should say.",
        ]);
      },
      hideButton: hideButton,
    });
    addToInventory("puzzle");
  };
  return (
    <>
      {puzzle.visible && (
        <group ref={group} {...props} dispose={null} onClick={handleClick}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={nodes.Cube045.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve021.geometry}
            material={nodes.Curve021.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve024.geometry}
            material={nodes.Curve024.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve027.geometry}
            material={nodes.Curve027.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve028.geometry}
            material={nodes.Curve028.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049.geometry}
            material={nodes.Cylinder049.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050.geometry}
            material={nodes.Cylinder050.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hingle.geometry}
            material={nodes.hingle.material}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bottom_blocker.geometry}
              material={nodes.bottom_blocker.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.center_pin.geometry}
              material={nodes.center_pin.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve025.geometry}
              material={nodes.Curve025.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve026_1.geometry}
              material={nodes.Curve026_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve031.geometry}
              material={nodes.Curve031.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve032_1.geometry}
              material={nodes.Curve032_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lid.geometry}
              material={nodes.lid.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rim.geometry}
              material={nodes.rim.material}
            />
          </mesh>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/puzzleBox.glb");