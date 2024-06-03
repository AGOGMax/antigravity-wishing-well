"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 -t saturn_bapspatil/scene.gltf 
Author: Freemodels (https://sketchfab.com/vivaanarora9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-17b34b975dc3449da83f2ee7802004f3
Title: Saturn
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    Saturn: THREE.MeshStandardMaterial
    rings: THREE.MeshStandardMaterial
  }
  animations: any[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Saturn(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.758}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-0.419, Math.PI / 2, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Saturn} material-envMapIntensity={4} />
            <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.rings} material-envMapIntensity={4} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/scene.gltf')
