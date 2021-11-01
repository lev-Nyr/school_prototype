import GameSign from "../../components/GameSign/GameSign";

function SubtractionPage() {
    function handleClose() {

    }
    return (
        <div>
            <GameSign onClose={handleClose} sign="-" />
            </div>

    );
}

export default SubtractionPage;