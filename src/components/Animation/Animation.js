import { useState, useEffect, useRef } from "react"



const Animation = () => {

    const [background, setBackground] = useState('green');

    const divRef = useRef();

    const countRef = useRef('hola');
    countRef.current = 'chau';
    console.log(countRef)

    useEffect(() => {
        const handleScroll = () => {
            // const div = document.getElementById('scroll-color');
            //con el useRef no tengo que usar el dom

            const div = divRef.current;

            const {y} = div.getBoundingClientRect();

            const backgroundColor = y <= 0 ? 'blue' : 'green'; 
            setBackground(backgroundColor);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        //en vez de usar el "id" usamos la prop "ref" y le pasamos la referencia que creamos anteriormente
        <div>
            <div ref={divRef} style={{height: '120vh', background}}>
                <h2 style={{color:"white"}}>Animacion</h2>
                <p> Scrollear para cambiar el color de fondo </p>

            </div>
        </div>


        //ESTO ES SIN EL useRef()
        // <div>
        //     <div id='scroll-color' style={{height: '120vh', background}}>
        //         <h2 style={{color:"white"}}>Animacion</h2>
        //         <p> Scrollear para cambiar el color de fondo </p>

        //     </div>
        // </div>
    )
}

export default Animation