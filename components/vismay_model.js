import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three' // Needed for LoopOnce

export function Vismay(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Vismay.glb')
  const { actions, names } = useAnimations(animations, group)

useEffect(() => {
  if (names.length > 0) {
    const action = actions[names[0]];
    if (action) {
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.fadeIn(0.5).play();
    }
  }
}, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="chest"
          castShadow
          receiveShadow
          geometry={nodes.chest.geometry}
          material={materials.chest_and_safe_MT}
          rotation={[Math.PI / 2.1, 0, 0]}
          scale={0.003}
        />
        <mesh
          name="chest_cap_pivot_Rotation"
          castShadow
          receiveShadow
          geometry={nodes.chest_cap_pivot_Rotation.geometry}
          material={materials['chest_and_safe_MT.001']}
          position={[-0.086, 1.943, -1.159]}
          rotation={[1.568, 0, 0]}
          scale={0.003}>
          <mesh
            name="latch_pivot_rotation001"
            castShadow
            receiveShadow
            geometry={nodes.latch_pivot_rotation001.geometry}
            material={materials['chest_and_safe_MT.002']}
            position={[-7.445, 662.545, -103.211]}
            rotation={[-0.119, 0, 0]}
            scale={1.126}>
            <mesh
              name="latch_pivot_rotation"
              castShadow
              receiveShadow
              geometry={nodes.latch_pivot_rotation.geometry}
              material={materials['chest_and_safe_MT.002']}
              position={[-0.825, 2.445, 46.044]}
              rotation={[0.169, 0, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          name="chest001"
          castShadow
          receiveShadow
          geometry={nodes.chest001.geometry}
          material={materials.metal}
          position={[1.718, 1.093, 0.068]}
          rotation={[-Math.PI / 2, Math.PI / 3, Math.PI]}
          scale={0.003}
        />
        <mesh
          name="chest002"
          castShadow
          receiveShadow
          geometry={nodes.chest002.geometry}
          material={materials.metal}
          position={[-1.997, 1.108, 0.03]}
          rotation={[-Math.PI / 2, -Math.PI / 3, -Math.PI]}
          scale={0.003}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.vismay}
          position={[-0.084, 1.096, -0.102]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.714}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Vismay.glb')