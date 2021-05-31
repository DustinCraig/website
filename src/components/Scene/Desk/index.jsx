const Desk = () => (
    <>
        {/* Top */}
        <mesh scale={[6, 0.3, 8]} rotation={[0, 20, 0]}>
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>

        {/* Legs */}

        {/* Front Left */}
        <mesh
            scale={[0.3, 4, 0.3]}
            position={[-4.6, -2, 1]}
            rotation={[0, 20, 0]}
        >
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>

        {/* Front Right */}
        <mesh
            scale={[0.3, 4, 0.3]}
            position={[2.3, -1.9, 3.9]}
            rotation={[0, 20, 0]}
        >
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>

        {/* Back Left */}
        <mesh
            scale={[0.3, 4, 0.3]}
            position={[4.5, -2.1, -1.9]}
            rotation={[0, 20, 0]}
        >
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>

        {/* Back Right */}
        <mesh
            scale={[0.3, 4, 0.3]}
            position={[-2, -2.1, -4.5]}
            rotation={[0, 20, 0]}
        >
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>
    </>
)

export default Desk
