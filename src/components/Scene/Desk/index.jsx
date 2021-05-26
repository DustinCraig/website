const Desk = () => (
    <>
        {/* Top */}
        <mesh scale={[6, 0.3, 8]} rotation={[0, 20, 0]}>
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>

        {/* Legs */}
        <mesh
            scale={[0.3, 4, 0.3]}
            position={[-4.6, -2, 1]}
            rotation={[0, 20, 0]}
        >
            <boxGeometry />
            <meshPhongMaterial />
        </mesh>
    </>
)

export default Desk
