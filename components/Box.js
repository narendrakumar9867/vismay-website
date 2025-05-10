import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Boxs (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./Chest.glb')
  const { actions } = useAnimations(animations, group)

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Chest_box"
          castShadow
          receiveShadow
          geometry={nodes.Chest_box.geometry}
          material={materials.chest_and_safe_MT}>
          <mesh
            name="Chest_box001"
            castShadow
            receiveShadow
            geometry={nodes.Chest_box001.geometry}
            material={materials.chest_and_safe_MT}
          />
          <mesh
            name="Chest_Lid"
            castShadow
            receiveShadow
            geometry={nodes.Chest_Lid.geometry}
            material={materials.chest_and_safe_MT}
          />
          <mesh
            name="Lock"
            castShadow
            receiveShadow
            geometry={nodes.Lock.geometry}
            material={materials.chest_and_safe_MT}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./Chest.glb')