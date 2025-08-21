const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>teste</p>
                <form method="dialog">
                    <button>Fechar</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom