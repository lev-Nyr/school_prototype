import GameSign from "../../components/GameSign/GameSign";
import SoundButton from '../../components/SoundButton/SoundButton'

function AdditionPage() {
  function handleClose() {

  }
  return (
    <div>
      
      <GameSign onClose={handleClose} sign="+" />
    </div>
  );
}

export default AdditionPage;