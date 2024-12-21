export default function Footer(){
    const clock = new Date().getHours();
    const open = 10;
    const close = 20;

    const isOpen = clock >= open && clock <= close;

    return (
        
        <footer>
            {
                isOpen ? (
                    <p>Kapanış Saati : {close}</p>
                ) : (
                    <p>Açılış Saati : {open}</p>
                )
            }

        </footer>
    )
}