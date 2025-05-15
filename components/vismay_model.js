import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Vismay(props) {
  const { nodes, materials } = useGLTF('/Vismay.glb')

  console.log("Nodes:", nodes)
  console.log("Materials:", materials)

  return (
    <group {...props} dispose={null}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node1.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node2.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node3.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node4.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node5.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node6.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node7.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node8.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node9.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node10.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node11.geometry} 
        material={materials.x1} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Node12.geometry} 
        material={materials.x1} 
      />
    </group>
  )
}

useGLTF.preload('/Vismay.glb')