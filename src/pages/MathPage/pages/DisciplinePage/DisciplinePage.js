import './DisciplinePage.css'

function DisciplinePage() {
    return (
        <div className="DisciplinePage"> 
            <p className="DisciplinePage__a">Выберите дисцеплину</p>
            <a className="DisciplinePage__a" href="/math/addition">Сложение</a>
            <a className="DisciplinePage__a" href='/math/subtraction'>Вычитание</a>
            <a className="DisciplinePage__a" href="/math/multiplication">Умножение</a>
            <a className="DisciplinePage__a" href='/math/division'>Деление</a>
        </div>

    );
}

export default DisciplinePage;
